import { useFrame } from '@react-three/fiber'
import React, { useRef, } from 'react'
import {  DoubleSide } from 'three'

const Box = () => {

    const ref = useRef(null)

    const vertex = `
    varying vec2 vUv;
    uniform float time;
    void main() {
      vUv = uv;
      vec3 trans = position;
        trans.y += sin(position.y +time);
        trans.x += sin(position.x +time)/2.;
        trans.z += sin(position.z +time)/2.;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(trans, 1.0);
    }`

    const frag = `
    uniform float time;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(sin(vUv.x +0.5 +time), cos(vUv.y +0.5 +time), sin(vUv.x +0.33 )+0.5, 1.);
    }
  `
    useFrame(({clock}) => {
        if(ref.current){
            ref.current.material.uniforms.time.value += 0.08
        }
    })
    return (
        <mesh ref={ref}>
            <boxBufferGeometry  args={[3,3,3]} />
            <shaderMaterial vertexShader={vertex} side={DoubleSide} uniforms={{time : {value: 0.0}}} fragmentShader={frag} attach="material" color="hotpink" />
        </mesh>
    )
}

export default Box
