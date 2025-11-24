import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';

const Hero3D: React.FC = () => {
    return (
        <div className="h-[300px] md:h-[500px] w-full flex items-center justify-center">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#0ea5e9" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />

                <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                    <Sphere args={[1, 100, 200]} scale={2}>
                        <MeshDistortMaterial
                            color="#1e1b4b" // Dark indigo base
                            attach="material"
                            distort={0.5}
                            speed={2}
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </Sphere>
                </Float>

                {/* Allow user to rotate the object for interactivity */}
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
