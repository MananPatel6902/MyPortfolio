import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Torus, MeshWobbleMaterial, Stars } from '@react-three/drei';

const Contact3D: React.FC = () => {
    return (
        <div className="h-[300px] w-full flex items-center justify-center">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

                <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
                    <Torus args={[1, 0.3, 16, 100]}>
                        <MeshWobbleMaterial
                            color="#8b5cf6"
                            attach="material"
                            factor={0.5}
                            speed={2}
                            roughness={0}
                            metalness={0.8}
                        />
                    </Torus>
                </Float>

                <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default Contact3D;
