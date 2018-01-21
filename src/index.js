import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshNormalMaterial()
const sphere = new THREE.Mesh(geometry, material)

scene.add(sphere)
camera.position.z = 5

function render () {
  requestAnimationFrame(render)

  sphere.rotation.x += 0.05
  sphere.rotation.y += 0.1

  renderer.render(scene, camera)
}

render()