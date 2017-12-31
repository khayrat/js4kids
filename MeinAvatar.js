<body></body>
<script src="http://gamingJS.com/Three.js"></script>
<script src="http://gamingJS.com/ChromeFixes.js"></script>
<script>
  // This is where stuff in our game will happen:
  var scene = new THREE.Scene();
  var marker = new THREE.Object3D();
  
  scene.add(marker);

  // This is what sees the stuff:
  var aspect_ratio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
  camera.position.z = 500;
  marker.add(camera);

  // This will draw what the camera sees onto the screen:
  var renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // ******** START CODING ON THE NEXT LINE ********

  var cover  = new THREE.MeshNormalMaterial();
  var body   = new THREE.SphereGeometry(100);
  var avatar = new THREE.Mesh(body, cover);
  
  marker.add(avatar);
  
  
  //////////// head
  
  var head_shape = new THREE.SphereGeometry(65);
  var head  = new THREE.Mesh(head_shape, cover);
  head.position.set(0, 165, 0);
  avatar.add(head);
  
  //////////// hand
  
  var hand       = new THREE.SphereGeometry(50);
  
  var right_hand = new THREE.Mesh(hand, cover);
  right_hand.position.set(-150, 0, 0);
  avatar.add(right_hand);

  var left_hand = new THREE.Mesh(hand, cover);
  left_hand.position.set(150, 0, 0);
  avatar.add(left_hand);

  
  //////////// foot
  
  var foot       = new THREE.SphereGeometry(50);
  
  var right_foot = new THREE.Mesh(foot, cover);
  right_foot.position.set(-75, -125, 0);
  avatar.add(right_foot);

  var left_foot = new THREE.Mesh(hand, cover);
  left_foot.position.set(75, -125, 0);
  avatar.add(left_foot);
  
  /////////// Trees
  makeTreeAt( 500, 0);
  makeTreeAt(-500, 0);
  makeTreeAt( 750, -1000);
  makeTreeAt(-750, -1000);
  
  function makeTreeAt(x, z) {
    console.log("makeTreeAt(" +x +", " +z +")");
    var trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(50,50,200),
      new THREE.MeshBasicMaterial({color: 0xA0522D})
    );
    var top = new THREE.Mesh(
      new THREE.SphereGeometry(150),
      new THREE.MeshBasicMaterial({color: 0x228B22})
    );
    top.position.y = 175;
    trunk.add(top);
    trunk.position.set(x, -75, z);
    scene.add(trunk);
  }
    
  // Auf Tastendruckereignissse lauschen
  var is_cart_wheeling = false;
  var is_flipping      = false;
  var is_rotating      = false;

  document.addEventListener('keydown', function(even) {
    var code  = event.keyCode;
    var up    = 38;
    var down  = 40;
    var right = 39;
    var left  = 37;
    var c     = 67;
    var f     = 70;
    var r     = 82;
    
    console.log("key-code: " +code);  
    
    if (code == up) {
      marker.position.y += 5;
    }
    if (code == down) {
      marker.position.y -= 5;
    }
    if (code == right) {
      marker.position.x += 5;
    }
    if (code == left) {
      marker.position.x -= 5;
    }
    if (code == c) {
      is_cart_wheeling = !is_cart_wheeling;
    }
    if (code == f) {
      is_flipping = !is_flipping;
    }
    if (code == r) {
      is_rotating = !is_rotating;
    }
  });
  
  function animate() {
    //console.log("animate()...")
    requestAnimationFrame(animate);
   
    if (is_cart_wheeling) {
      avatar.rotation.z += 0.05;
    }
    if (is_flipping) {
      avatar.rotation.x += 0.05;
    }
    if (is_rotating) {
      avatar.rotation.y += 0.05;
    }
    
    renderer.render(scene, camera);
  }
  
  animate();
  
</script>