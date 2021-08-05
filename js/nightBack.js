let scene, camera, render
    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

function init() {

    const canvas = document.querySelector('#c');
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,2500)

    window.addEventListener( 'resize', function( )
        {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize( width, height );
            camera.aspect = width / height;
            camera.updateProjectionMatrix( );
        });

    const loaderT = new THREE.CubeTextureLoader();
        const texture = loaderT.load([
            'https://raw.githubusercontent.com/Skyresoul/TheWorld3/main/Sky2_right1.png',
            'https://raw.githubusercontent.com/Skyresoul/TheWorld3/main/Sky2_left2.png',
            'https://raw.githubusercontent.com/Skyresoul/TheWorld3/main/Sky2_top3.png',
            'https://raw.githubusercontent.com/Skyresoul/TheWorld3/main/Sky2_bottom4.png',
            'https://raw.githubusercontent.com/Skyresoul/TheWorld3/main/Sky2_front5.png',
            'https://raw.githubusercontent.com/Skyresoul/TheWorld3/main/Sky2_back6.png',
        ]);
    scene.background = texture;

    camera.position.x = 400
    camera.position.y = 400
    camera.position.z = 1000
    scene.position.y  = -700
    scene.position.x = -300
    

    hlight = new THREE.AmbientLight(0x404040, 10)
    scene.add(hlight)

    directionalLight = new THREE.DirectionalLight(0xffffff, 10)
    directionalLight.position.set(0,10,0)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    light = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 300, 500)
    scene.add(light)

    light2 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(500, 100, 0)
    scene.add(light2)

    light3 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(0, 100, -500)
    scene.add(light3)

    light4 = new THREE.PointLight(0xc4c4cc4, 2)
    light.position.set(-5000, 300, 0)
    scene.add(light4)

    renderer = new THREE.WebGLRenderer({canvas, antialias: true})

    renderer.setSize(window.innerWidth, window.innerHeight)
    
    //controls = new THREE.OrbitControls(camera, renderer.domElement);
                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

    let loader = new THREE.GLTFLoader()
    loader.load('https://raw.githubusercontent.com/Skyresoul/TheWorld1/main/scene.gltf', function(gltf){
        car = gltf.scene.children[0]
        car.scale.set(40, 40, 40)
        scene.add(gltf.scene)
        animate();
    })
}

    function onDocumentMouseMove( event ) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart( event ) {
        if ( event.touches.length === 1 ) {
            event.preventDefault();
            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;
        }
    }

    function onDocumentTouchMove( event ) {
        if ( event.touches.length === 1 ) {
            event.preventDefault();
            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;
        }
    }

function animate() {
    camera.position.x += ( mouseX - camera.position.x ) * .0045;
    camera.position.y += ( mouseY - camera.position.y ) * .006;
    camera.lookAt( -400, -400, -60 );
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}
init()