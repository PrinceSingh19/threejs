import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = 50;
const renderer = new THREE.WebGLRenderer();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 500, 1000);
pointLight.position.set(10, 0, 3);
scene.add(pointLight);

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(5, 5, 5);
//const geometry = new THREE.CapsuleGeometry(1, 1, 10, 20);
// const geometry = new THREE.DodecahedronGeometry(1, 0);
const material = new THREE.MeshStandardMaterial({ color: "red" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(1, 16, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: "white" });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

sphere.position.set(20, 0, 10);
pointLight.position.set(20, 0, 10);

const controls = new OrbitControls(camera, renderer.domElement);
let q = 0;
function animate() {
	controls.update();
	q += 0.01;
	let qSin = Math.sin(q);
	let qCos = Math.cos(q);
	// cube.position.x = 3 * qSin;
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	// cube.rotation.z += 0.01;
	// let scaledCos = 30 * qCos;
	// let scaledSin = 30 * qSin;
	// sphere.position.set(scaledCos, 0, scaledSin);
	// pointLight.position.set(scaledCos, 0, scaledSin);
	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}

animate();
