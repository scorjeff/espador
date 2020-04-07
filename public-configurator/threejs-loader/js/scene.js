/**
 * http://usejsdoc.org/
 */

var scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xe9b96e);
var canvas = document .querySelector ( '#canvas' );

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 800);
camera.position.set(35, 15, 25);

var canvasHeight = 300;
var canvasWidth = 800;


// var light = new THREE.AmbientLight( 0xB4B4B4, 0.9 );
var light1 = new THREE.PointLight( 0xffffff, 0.6 );
// light.position.set(400, 200, 10 );
light1.position.set(50, 50, 50 );
scene.add(light1);

var light2 = new THREE.AmbientLight( 0xffffff, 0.5 );
// light.position.set(400, 200, 10 );
light2.position.set(0, 10, -50 );
scene.add(light2);

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(canvasWidth, canvasHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
})
// appel function button
//

var frontRight;
var frontLeft;
var RearLeft;
var RearRight;

var axisHelper = new THREE.AxisHelper(5);
 axisHelper.position.x = -1;
 axisHelper.position.y = 10;
scene.add(axisHelper);

//
// function change couleur
const colors = [
	{
		colorfrontLeft: '../'
	}
]

// frontLEFTCream

	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('../blender-files/');
	mtlLoader.load('frontLeftCream.mtl', function (materials) {
	object = obj.scene;
		materials.preload();
	
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath('../blender-files/');
		objLoader.load('frontLeftCream.obj', function(object){
			console.log(object);
				scene.add(object);
				frontLeft = object;
	
				// positon de départ de l'objet front
				object.position.z -= 9.5;
				object.position.x = 0;
				object.position.y -= -10;
				object.rotation.y -= 0;
			});
		});

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('../blender-files/');
mtlLoader.load('frontRightCream.mtl', function (materials) {

	materials.preload();

	var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.setPath('../blender-files/');
	objLoader.load('frontRightCream.obj', function(object){
		console.log(object);
			scene.add(object);
			frontRight = object;

			// positon de départ de l'objet front
			object.position.z -= -10;
			object.position.x = -2;
			object.position.y -= -10;
			object.rotation.y -= 0;
		});
	});
	
	var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('../blender-files/');
mtlLoader.load('RearLeftCream.mtl', function (materials) {

	materials.preload();

	var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.setPath('../blender-files/');
	objLoader.load('RearLeftCream.obj', function(object){
		console.log(object);
			scene.add(object);
			RearRight = object;

			// positon de départ de l'objet front
			object.position.z -= 11.2;
			object.position.x = -2;
			object.position.y -= -10;
			object.rotation.y -= 0;
		});
	});

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('../blender-files/');
mtlLoader.load('RearRightCream.mtl', function (materials) {

	materials.preload();

	var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.setPath('../blender-files/');
	objLoader.load('RearRightCream.obj', function(object){
		console.log(object);
			scene.add(object);
			RearLeft = object;

			// positon de départ de l'objet front
			object.position.z -= -10;
			object.position.x = -2;
			object.position.y -= -10;
			object.rotation.y -= 0;
		});
	});
	
		//buton
var button = document.querySelector("button");
    button.style.top = "400px";
    button.style.left = "100px";
    button.textContent = "blue";
    button.style.width = "90px";
    button.style.height = "50px";


    button.setAttribute = ("id", "but");
    button.style.position = "absolute";
    button.style.color = "black";
    button.color = "green";

    document.body.appendChild(button);
    button.addEventListener("click", function(){
			frontRight.MTLLoader.getElementById = frontRightBlue.mtl;
		
	})
	

// mouvement objet et déplacement = control orbit
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// controls.update() must be called after any manual changes to the camera's
// transform

controls.update();

var animate = function () {
	renderer.render( scene, camera );
	requestAnimationFrame( animate );

	 if (resizeRendererToDisplaySize(renderer)) {
		    const canvas = renderer.domElement;
		    camera.aspect = canvas.clientWidth / canvas.clientHeight;
		    camera.updateProjectionMatrix();
		  }
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

}
animate();

