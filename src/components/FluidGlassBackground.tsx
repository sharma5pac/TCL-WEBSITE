"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, RoundedBox, Environment, Float } from '@react-three/drei';

function GlassBar() {
    const mesh = useRef(null);
    const { width, height } = useThree((state) => state.viewport);

    return (
        <group>
            <Float speed={2} rotationIntensity={0.05} floatIntensity={0.05} floatingRange={[-0.1, 0.1]}>
                {/* 
                Responsive Sizing:
                Width = viewport width (minus a small margin if needed, but usually full is good)
                Height = viewport height
            */}
                <RoundedBox args={[width, height, 0.5]} radius={height / 2} smoothness={4} ref={mesh}>
                    <MeshTransmissionMaterial
                        resolution={512}
                        distortion={0.12}
                        color="#ffffff"
                        thickness={2}
                        anisotropy={0.2}
                        ior={1.1}
                        chromaticAberration={0.04}
                        roughness={0.18}
                        transmission={0.99}
                        clearcoat={1}
                        attenuationDistance={0.5}
                        attenuationColor="#ffffff"
                    />
                </RoundedBox>
            </Float>

            <Environment preset="city" />
        </group>
    );
}

export default function FluidGlassBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
                // Resize capability
                resize={{ scroll: false, offsetSize: true }}
            >
                <GlassBar />
            </Canvas>
        </div>
    );
}
