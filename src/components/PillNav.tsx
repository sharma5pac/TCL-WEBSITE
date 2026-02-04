"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import './PillNav.css';

interface NavItem {
    label: string;
    href: string;
    ariaLabel?: string;
}

interface PillNavProps {
    items: NavItem[];
    baseColor?: string;
    pillColor?: string;
    hoveredPillTextColor?: string;
    pillTextColor?: string;
    onMobileMenuClick?: () => void;
    initialLoadAnimation?: boolean;
    className?: string;
    ease?: string;
}

const PillNav = ({
    items,
    className = '',
    ease = 'power3.easeOut',
    baseColor = '#fff',
    pillColor = '#060010',
    hoveredPillTextColor = '#060010',
    pillTextColor,
    onMobileMenuClick,
    initialLoadAnimation = true
}: PillNavProps) => {
    const pathname = usePathname();
    const activeHref = pathname; // Simple matching for now
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Arrays for refs
    const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
    const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);

    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const navItemsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        circleRefs.current = circleRefs.current.slice(0, items.length);
        tlRefs.current = tlRefs.current.slice(0, items.length);
        activeTweenRefs.current = activeTweenRefs.current.slice(0, items.length);

        const layout = () => {
            items.forEach((_, index) => {
                const circle = circleRefs.current[index];
                if (!circle || !circle.parentElement) return;

                const pill = circle.parentElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;

                // Calculate circle size to cover the pill
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2; // Diameter
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector('.pill-label');
                const whiteLabel = pill.querySelector('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (whiteLabel) gsap.set(whiteLabel, { y: h + 12, opacity: 0 });

                // Create timeline
                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

                if (label) {
                    tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
                }

                if (whiteLabel) {
                    gsap.set(whiteLabel, { y: Math.ceil(h + 100), opacity: 0 });
                    tl.to(whiteLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        // Mobile menu init
        const menu = mobileMenuRef.current;
        if (menu) {
            gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
        }

        return () => window.removeEventListener('resize', onResize);
    }, [items, ease]);

    const handleEnter = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLeave = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;

        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
            } else {
                gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
            }
        }

        if (menu) {
            if (newState) {
                gsap.set(menu, { visibility: 'visible' });
                gsap.fromTo(
                    menu,
                    { opacity: 0, y: 10, scaleY: 1 },
                    {
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        duration: 0.3,
                        ease,
                        transformOrigin: 'top center'
                    }
                );
            } else {
                gsap.to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: () => {
                        gsap.set(menu, { visibility: 'hidden' });
                    }
                });
            }
        }

        onMobileMenuClick?.();
    };

    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor
    } as React.CSSProperties;

    return (
        <div className="pill-nav-container w-full">
            <nav className={`pill-nav flex items-center justify-between pointer-events-auto ${className}`} aria-label="Primary" style={cssVars}>

                {/* Mobile Hamburger - Only visible on mobile */}
                <button
                    className="mobile-menu-button md:hidden ml-auto p-2 cursor-pointer z-50 bg-black/50 rounded-full border border-white/10 backdrop-blur-md"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    ref={hamburgerRef}
                >
                    <span className="hamburger-line block w-5 h-0.5 bg-white mb-1.5 origin-center" />
                    <span className="hamburger-line block w-5 h-0.5 bg-white origin-center" />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className="mobile-menu-popover fixed inset-0 z-40 bg-black/95 flex items-center justify-center pointer-events-none md:hidden"
                ref={mobileMenuRef}
                style={cssVars}
            >
                <ul className="mobile-menu-list flex flex-col items-center gap-6 pointer-events-auto">
                    {items.map((item, i) => (
                        <li key={item.href || `mobile-item-${i}`}>
                            <Link
                                href={item.href}
                                className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${activeHref === item.href ? 'text-blue-500' : 'text-white/70 hover:text-white'}`}
                                onClick={() => toggleMobileMenu()} // Close menu on click
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;
