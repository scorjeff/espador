/**
 * http://usejsdoc.org/
 */

var scene = new THREE.Scene();
  //scene.background = new THREE.Color(0xe9b96e);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 800);
camera.position.set(35, 15, 25);

var canvasHeight = 500;
var canvasWidth = 1000;

//var light = new THREE.AmbientLight( 0xB4B4B4, 0.9 );
var light = new THREE.PointLight( 0xffffff, 0.9 );
//light.position.set(400, 200, 10 );
light.position.set(50, 100, 100 );
scene.add(light);

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(canvasWidth, canvasHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
})

var frontRight;
var frontLeft;
var RearLeft;
var RearRight;

var axisHelper = new THREE.AxisHelper(5);
 axisHelper.position.x = -1;
 axisHelper.position.y = 10;
scene.add(axisHelper);

//frontLEFTCream

	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('../blender-files/');
	mtlLoader.load('frontLeftCream.mtl', function (materials) {
	
		materials.preload();
	
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath('../blender-files/');
		objLoader.load('frontLeftCream.obj', function(object){
			console.log(object);
				scene.add(object);
				frontLeft = object;
	
				//positon de départ de l'objet front
				object.position.z -= 0;
				object.position.x = 0;
				object.position.y -= 0;
				object.rotation.y -= 0;
			});
		});

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('../blender-files/');
mtlLoader.load('frontRightBLUE.mtl', function (materials) {

	materials.preload();

	var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.setPath('../blender-files/');
	objLoader.load('frontRightBLUE.obj', function(object){
		console.log(object);
			scene.add(object);
			frontRight = object;

			//positon de départ de l'objet front
			object.position.z -= -10;
			object.position.x = 8;
			object.position.y -= -9;
			object.rotation.y -= 0;
		});
	});
	

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('../blender-files/');
mtlLoader.load('RearLeftRED.mtl', function (materials) {

	materials.preload();

	var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.setPath('../blender-files/');
	objLoader.load('RearLeftRED.obj', function(object){
		console.log(object);
			scene.add(object);
			ReartLeft = object;

			//positon de départ de l'objet front
			object.position.z -= 3;
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
animate();

