import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Text } from '@react-three/drei';

const Skills3D: React.FC = () => {
    return (
        <div className="h-[300px] w-full flex items-center justify-center">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />

                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Icosahedron args={[1.5, 0]}>
                        <MeshDistortMaterial
                            color="#0ea5e9"
                            attach="material"
                            distort={0.3}
                            speed={2}
                            wireframe
                        />
                    </Icosahedron>
                </Float>

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        position={[0, 0, 0]}
                        fontSize={0.5}
                        color="#ffffff"
                        anchorX="center"
                        anchorY="middle"
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    >
                        TECH
                    </Text>
                </Float>
            </Canvas>
        </div>
    );
};

export default Skills3D;
