class Webgl {
  static pointLight(x, y, z, color, intensivity) {
    const pointLight = new THREE.PointLight(color, intensivity);
    pointLight.position.set(x, y, z);
    return pointLight;
  }

  static init() {
    const scene = new THREE.Scene();

    // Camera

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(0, 3, 0);
    camera.lookAt(0, 0, 0);

    // Canvas

    const canvas = document.querySelector(".webgl");

    // Renderer

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvas,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Controls

    // const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Resize

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Texture loader

    const textureLoader = new THREE.TextureLoader();
    loader.crossOrigin = "";
    let normalMap = textureLoader.load("https://huseynovvusal.github.io/portfolio-site/img/texture.png");

    // Geometry

    let geometry = new THREE.SphereGeometry(1, 64, 64);

    // Mesh

    let material = new THREE.MeshStandardMaterial({
      normalMap: normalMap,
      roughness: 0.6,
      metalness: 0.8,
      color: 0x303030,
    });

    // Sphere

    let sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lights

    const pointLightPurlpe = this.pointLight(5, -5, 5, 0xdd0ad4, 0.5);
    scene.add(pointLightPurlpe);

    const pointLight = this.pointLight(-5, -5, -1, 0xffffff, 0.8);
    scene.add(pointLight);

    // Event

    window.addEventListener("scroll", windowOnScroll);

    function windowOnScroll() {
      sphere.rotation.y = window.scrollY * 0.0005;
      sphere.rotation.x = window.scrollY * 0.0005;
    }
    // Animate

    const animate = () => {
      requestAnimationFrame(animate);
      // controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }
}
