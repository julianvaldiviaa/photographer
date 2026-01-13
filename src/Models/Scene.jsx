import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Scene(props) {
  // 1. Cargamos el modelo
  const { nodes } = useGLTF('/scene.gltf')
  
  // 2. Cargamos las texturas
  const [color, metal, normal] = useTexture([
    '/CAM0001_Textures_baseColor.png',
    '/CAM0001_Textures_metallicRoughness.png',
    '/CAM0001_Textures_normal.png'
  ])

  // Configuración de texturas
  color.colorSpace = THREE.SRGBColorSpace
  color.flipY = metal.flipY = normal.flipY = false

  return (
    <group {...props} dispose={null}>
      {Object.keys(nodes).map((key) => (
        nodes[key].isMesh && (
          <mesh key={key} geometry={nodes[key].geometry}>
            <meshStandardMaterial 
              map={color} 
              metalnessMap={metal} 
              roughnessMap={metal} 
              normalMap={normal} 
            />
          </mesh>
        )
      ))}
    </group>
  )
}

useGLTF.preload('/scene.gltf')