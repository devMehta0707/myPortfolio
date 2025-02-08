/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 laptop.gltf 
Author: Blue Lantern (https://sketchfab.com/genoris2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-alienpredator-194969af91df43788b65c5c951a07452
Title: Laptop AlienPredator
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/src/components/models/laptop.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.388, 0.301, 0.317]} scale={[0.046, 0.016, 0.053]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.031']} />
      </group>
      <group position={[0.484, 0.24, 0.117]} scale={[0.817, 1, 1]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.005']} />
      </group>
      <group position={[0.484, 0.288, -0.283]} rotation={[0.017, 0, 0]} scale={[0.817, 1, 1]}>
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.484, 0.321, 0.724]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.614, 1]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.008']} />
      </group>
      <group position={[0.472, 0.186, 0.664]}>
        <mesh geometry={nodes.Object_20.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials['Material.002']} />
      </group>
      <group position={[1.368, 0.185, 0.662]} scale={[1, 1.718, 1]}>
        <mesh geometry={nodes.Object_23.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_24.geometry} material={materials['Material.006']} />
      </group>
      <group position={[1.403, 0.261, 0.144]} scale={[0.023, 0.003, 0.03]}>
        <mesh geometry={nodes.Object_28.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_29.geometry} material={materials['Material.011']} />
      </group>
      <group position={[1.403, 0.261, 0.067]} scale={[0.023, 0.003, 0.03]}>
        <mesh geometry={nodes.Object_31.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_32.geometry} material={materials['Material.011']} />
      </group>
      <group position={[1.403, 0.261, 0.144]} scale={[0.023, 0.003, 0.03]}>
        <mesh geometry={nodes.Object_34.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_35.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-0.433, 0.261, 0.131]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.023, 0.003, 0.03]}>
        <mesh geometry={nodes.Object_39.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_40.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-0.433, 0.261, 0.211]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.023, 0.003, 0.03]}>
        <mesh geometry={nodes.Object_44.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_45.geometry} material={materials['Material.011']} />
      </group>
      <group position={[0.484, 0.221, 0.668]} rotation={[0, -Math.PI / 2, 0]} scale={[0.023, 0.003, 0.037]}>
        <mesh geometry={nodes.Object_47.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_48.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-0.457, 0.257, 0.051]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.012, 0.001, 0.016]}>
        <mesh geometry={nodes.Object_52.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_53.geometry} material={materials['Material.011']} />
      </group>
      <mesh geometry={nodes.Object_26.geometry} material={materials['Material.005']} position={[1.396, 0.299, 0.715]} rotation={[0.175, 0, 0]} scale={[1.199, 0.947, 0.947]} />
      <mesh geometry={nodes.Object_37.geometry} material={materials['Material.005']} position={[0.484, 0.24, 0.158]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.817, 1, 1]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials['Material.005']} position={[0.484, 0.24, 0.238]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.817, 1, 1]} />
      <mesh geometry={nodes.Object_50.geometry} material={materials['Material.025']} position={[0.464, 1.038, 0.735]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0.098, 0.098]} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.material_0} position={[-0.496, 0.256, 0.014]} rotation={[0, 0, -Math.PI / 2]} scale={0.002} />
    </group>
  )
}

useGLTF.preload('/src/components/models/laptop.gltf')