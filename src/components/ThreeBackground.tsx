import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

const ThreeBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-10] bg-dark-100">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]} // Handles high pixel density for "4K quality"
                gl={{ antialias: true, alpha: true }}
            >
                {/* Deep space background */}
                <color attach="background" args={['#050505']} />

                {/* Stars with movement */}
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />

                {/* Floating particles in primary/secondary colors */}
                <Sparkles
                    count={100}
                    scale={10}
                    size={2}
                    speed={0.4}
                    opacity={0.6}
                    color="#0ea5e9" // Primary blue
                />
                <Sparkles
                    count={100}
                    scale={10}
                    size={2}
                    speed={0.4}
                    opacity={0.6}
                    color="#8b5cf6" // Secondary purple
                />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
