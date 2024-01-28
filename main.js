import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//creating a scene
const scene = new THREE.Scene();

//creating perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

//setting camera position distance from the object
camera.position.z = 50;

//adding the renderer
const renderer = new THREE.WebGLRenderer();

//adding the textures to the model
const texture1 = new THREE.TextureLoader().load("brick-texture.jpg");
const texture2 = new THREE.TextureLoader().load("brick-texture.png");

//adding the ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

//adding the point light
const pointLight = new THREE.PointLight(0xffffff, 50, 1000);
scene.add(pointLight);

//setting the renderer size for the viewport width and height
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

//creating the new box geometry to add the shapes
const geometry = new THREE.SphereGeometry(5, 32, 32);
//const geometry = new THREE.CapsuleGeometry(1, 1, 10, 20);
// const geometry = new THREE.DodecahedronGeometry(1, 0);

// creating the standard material mesh to avoid having its own lumination
const material = new THREE.PointsMaterial({
	// map: texture1,
	// bumpMap: texture2,
	// bumpScale: 0.5,
	color: "red",
	size: 0.1,

	// normalMap: texture2,
});

const cube = new THREE.Points(geometry, material);
scene.add(cube);

//creating a new sphere
const sphereGeometry = new THREE.SphereGeometry(1, 16, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: "white" });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

//setting the position of point light and sphere
sphere.position.set(2, 0, 10);
pointLight.position.set(2, 0, 10);

//adding the orbital controls
const controls = new OrbitControls(camera, renderer.domElement);
let q = 0;

//function to animate the  responses
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
