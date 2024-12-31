'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function RobotAnimation() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Enhanced Robot Creation
    const createRobotPart = (geometry: THREE.BufferGeometry, color: number, wireframe: boolean = true) => {
      const material = new THREE.MeshPhongMaterial({
        color,
        wireframe,
        transparent: true,
        opacity: 0.8,
        emissive: color,
        emissiveIntensity: 0.2,
      })
      return new THREE.Mesh(geometry, material)
    }

    // Robot Core Group
    const robot = new THREE.Group()

    // Head with more details
    const head = createRobotPart(new THREE.BoxGeometry(1, 1, 1), 0x3b82f6)
    head.position.y = 2

    // Antenna
    const antenna = createRobotPart(new THREE.ConeGeometry(0.1, 0.4, 8), 0x60a5fa)
    antenna.position.y = 2.7
    
    // Enhanced Eyes with glow
    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16)
    const eyeMaterial = new THREE.MeshPhongMaterial({
      color: 0x60a5fa,
      emissive: 0x60a5fa,
      emissiveIntensity: 1,
      transparent: true,
      opacity: 0.9,
    })
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
    leftEye.position.set(-0.3, 2, 0.5)
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
    rightEye.position.set(0.3, 2, 0.5)

    // Body with core
    const body = createRobotPart(new THREE.CylinderGeometry(0.7, 1, 2, 8), 0x3b82f6)
    body.position.y = 0.5

    // Core energy sphere
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.MeshPhongMaterial({
        color: 0x60a5fa,
        emissive: 0x60a5fa,
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.8,
      })
    )
    core.position.y = 0.5
    core.position.z = 0.5

    // Enhanced Arms with joints
    const createArm = (x: number, rotation: number) => {
      const arm = new THREE.Group()
      
      const upperArm = createRobotPart(
        new THREE.CylinderGeometry(0.2, 0.2, 1.2, 8),
        0x3b82f6
      )
      
      const joint = createRobotPart(
        new THREE.SphereGeometry(0.2, 8, 8),
        0x60a5fa
      )
      joint.position.y = -0.6
      
      const lowerArm = createRobotPart(
        new THREE.CylinderGeometry(0.15, 0.15, 0.8, 8),
        0x3b82f6
      )
      lowerArm.position.y = -1.1
      
      arm.add(upperArm, joint, lowerArm)
      arm.position.set(x, 0.5, 0)
      arm.rotation.z = rotation
      return arm
    }

    const leftArm = createArm(-1.2, Math.PI / 6)
    const rightArm = createArm(1.2, -Math.PI / 6)

    // Enhanced Legs with joints
    const createLeg = (x: number) => {
      const leg = new THREE.Group()
      
      const upperLeg = createRobotPart(
        new THREE.CylinderGeometry(0.25, 0.25, 1.2, 8),
        0x3b82f6
      )
      
      const knee = createRobotPart(
        new THREE.SphereGeometry(0.25, 8, 8),
        0x60a5fa
      )
      knee.position.y = -0.6
      
      const lowerLeg = createRobotPart(
        new THREE.CylinderGeometry(0.2, 0.2, 1, 8),
        0x3b82f6
      )
      lowerLeg.position.y = -1.1
      
      leg.add(upperLeg, knee, lowerLeg)
      leg.position.set(x, -1, 0)
      return leg
    }

    const leftLeg = createLeg(-0.5)
    const rightLeg = createLeg(0.5)

    // Add all parts to robot
    robot.add(head, antenna, leftEye, rightEye, body, core, leftArm, rightArm, leftLeg, rightLeg)
    scene.add(robot)

    // Floating Tech Elements
    const techElements = new THREE.Group()
    
    // Create circuit patterns
    const createCircuitLine = () => {
      const points = []
      const segmentCount = 5
      for (let i = 0; i < segmentCount; i++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          )
        )
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.5
      })
      return new THREE.Line(geometry, material)
    }

    for (let i = 0; i < 15; i++) {
      techElements.add(createCircuitLine())
    }

    // Add floating cubes
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 0.3 + 0.1
      const cube = createRobotPart(
        new THREE.BoxGeometry(size, size, size),
        0x3b82f6
      )
      cube.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      )
      techElements.add(cube)
    }

    scene.add(techElements)

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const createSpotlight = (color: number, intensity: number, position: THREE.Vector3) => {
      const light = new THREE.SpotLight(color, intensity)
      light.position.copy(position)
      light.angle = Math.PI / 4
      light.penumbra = 0.3
      light.decay = 2
      light.distance = 50
      return light
    }

    const spotLight1 = createSpotlight(0x3b82f6, 1, new THREE.Vector3(5, 5, 5))
    const spotLight2 = createSpotlight(0x60a5fa, 1, new THREE.Vector3(-5, -5, 5))
    scene.add(spotLight1, spotLight2)

    // Position camera
    camera.position.z = 8

    // Animation
    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)

      // Robot animations
      robot.rotation.y += 0.005
      core.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.1)
      robot.position.y = Math.sin(Date.now() * 0.001) * 0.2

      // Tech elements animations
      techElements.rotation.x += 0.001
      techElements.rotation.y += 0.001
      techElements.children.forEach((element, i) => {
        if (element instanceof THREE.Line) {
          element.rotation.z += 0.001 * (i % 2 ? 1 : -1)
        } else {
          element.rotation.x += 0.01
          element.rotation.y += 0.01
          element.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frame)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}

