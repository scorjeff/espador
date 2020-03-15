/**
 * http://usejsdoc.org/
 */

var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe9b96e);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 800);
camera.position.set(35, 15, 25);

var canvasHeight = 500;
var canvasWidth = 1000;

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(canvasWidth, canvasHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
})

var light = new THREE.DirectionalLight(0xff0000, 0.9, 1000);
light.position.set(0, 20, 15);
scene.add(light);

var front;

var axisHelper = new THREE.AxisHelper(5);
 axisHelper.position.x = -1;
 axisHelper.position.y = 10;
scene.add(axisHelper);

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('../blender-files/');
mtlLoader.load('frontRED.mtl', function (materials) {

	materials.preload();

	var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.setPath('../blender-files/');
	objLoader.load('frontRED.obj', function(object){
		console.log(object);
			scene.add(object);
			front = object;

			//positon de départ de l'objet front
			object.position.z -= -1.5;
			object.position.x =5;
			object.position.y -=-10;
			object.rotation.y -=5.5;
		});
	});



//mouvement objet et déplacement = control orbit
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

//controls.update() must be called after any manual changes to the camera's transform

controls.update();

var animate = function () {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
/* var render = function () {
	requestAnimationFrame(render);

	//rotation libre
	//front.rotation.x -= 0.005;

	renderer.render(scene, camera);
} */
animate();

