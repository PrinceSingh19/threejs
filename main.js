import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let boundFlag = true;
function animate() {
	if (cube.position.x > 5) {
		boundFlag = false;
	} else if (cube.position.x < -5) {
		boundFlag = true;
	}

	if (boundFlag) {
		cube.position.x += 0.01;
	} else {
		cube.position.x -= 0.01;
	}

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;
	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}

animate();
