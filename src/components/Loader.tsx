"use client";
import React from 'react';

export default function Loader() {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-[50vh] perspective-1000">
            <div className="relative w-24 h-24 transform-style-3d animate-spin-slow">
                {/* Core */}
                <div className="absolute inset-0 m-auto w-12 h-12 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
                <div className="absolute inset-0 m-auto w-8 h-8 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

                {/* Rings - Ring 1 */}
                <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-full border-t-transparent animate-[spin_3s_linear_infinite]" />

                {/* Ring 2 - Rotated X */}
                <div className="absolute inset-0 border-2 border-purple-500/50 rounded-full border-b-transparent animate-[spin_4s_linear_infinite_reverse]" style={{ transform: 'rotateX(60deg)' }} />

                {/* Ring 3 - Rotated Y */}
                <div className="absolute inset-0 border-2 border-blue-500/50 rounded-full border-l-transparent animate-[spin_5s_linear_infinite]" style={{ transform: 'rotateY(60deg)' }} />

                {/* Orbital Particles */}
                <div className="absolute w-full h-full animate-[spin_6s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .animate-spin-slow { animation: spin 10s linear infinite; }
                @keyframes spin { from { transform: rotateY(0deg) rotateX(0deg); } to { transform: rotateY(360deg) rotateX(360deg); } }
            `}</style>
        </div>
    );
}
