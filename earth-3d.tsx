"use client"

import { useRef, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Html, useProgress, useGLTF } from "@react-three/drei"
import { Navigation } from "@/components/navigation"
import { SidePanel } from "@/components/side-panel"
import { AboutMeContent, ProjectsContent, ContactContent } from "@/components/panel-contents"
import { usePanelStore } from "@/hooks/use-panel-store"

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg font-medium">Loading Earth... {Math.round(progress)}%</p>
      </div>
    </Html>
  )
}

export default function Component() {
  const [autoRotate, setAutoRotate] = useState(true)
  const { aboutMe, projects, contact, closePanel } = usePanelStore()

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Opemipo Portfolio</h1>
            <p className="text-gray-300">Me & my projects :))</p>
          </div>
          <Navigation />
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <Suspense fallback={<Loader />}>
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.15} color="#4a90e2" />
          <directionalLight
            position={[5, 3, 5]}
            intensity={1.2}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-5, -3, -5]} intensity={0.3} color="#ff6b6b" />

          {/* Earth with Atmosphere */}
          <Earth />
          <Atmosphere />

          {/* Enhanced Starfield */}
          <Stars radius={300} depth={60} count={25000} factor={8} saturation={0} fade speed={0.5} />

          {/* Orbit Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={autoRotate}
            autoRotateSpeed={0.3}
            minDistance={1.8}
            maxDistance={8}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
            panSpeed={0.8}
          />
        </Suspense>
      </Canvas>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)]"></div>
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[5] opacity-20 bg-noise mix-blend-overlay"></div>

      {/* Side Panels */}
      <SidePanel
        title="About Me"
        isOpen={aboutMe}
        onClose={() => closePanel('aboutMe')}
      >
        <AboutMeContent />
      </SidePanel>

      <SidePanel
        title="Projects"
        isOpen={projects}
        onClose={() => closePanel('projects')}
      >
        <ProjectsContent />
      </SidePanel>

      <SidePanel
        title="Contact"
        isOpen={contact}
        onClose={() => closePanel('contact')}
      >
        <ContactContent />
      </SidePanel>
    </div>
  )
}

function Earth() {
  const meshRef = useRef<any>(null)
  const { scene } = useGLTF("/assets/3d/opemipo_globe.glb")

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={meshRef} castShadow receiveShadow>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  )
}

function Atmosphere() {
  return (
    <mesh scale={[1.02, 1.02, 1.02]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial color="#4a90e2" transparent={true} opacity={0.1} side={2} />
    </mesh>
  )
}
