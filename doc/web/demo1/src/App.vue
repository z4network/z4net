<template>
  <div id="app">
    <div id="three-container"></div>
    <div class="content-overlay">
      <Navbar />
      <router-view />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import Navbar from './components/Navbar.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: { Navbar, FooterSection },
  mounted() {
    this.initThreeJS();
  },
  methods: {
    initThreeJS() {
      const container = document.getElementById('three-container');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // 创建粒子系统
      const particles = 5000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particles * 3);
      const colors = new Float32Array(particles * 3);

      for (let i = 0; i < particles; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

        colors[i * 3] = 0.1 + Math.random() * 0.4; // 蓝色调
        colors[i * 3 + 1] = 0.1 + Math.random() * 0.2; // 少量绿色
        colors[i * 3 + 2] = 0.5 + Math.random() * 0.5; // 紫色调
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });

      const particleSystem = new THREE.Points(geometry, material);
      scene.add(particleSystem);

      camera.position.z = 500;

      function animate() {
        requestAnimationFrame(animate);
        particleSystem.rotation.x += 0.0005;
        particleSystem.rotation.y += 0.001;
        renderer.render(scene, camera);
      }
      animate();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }
  }
};
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

#three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content-overlay {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(11,15,25,0.9) 0%, rgba(42,10,60,0.8) 100%);
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.neon-text {
  text-shadow: 0 0 5px #00f0ff, 0 0 10px #00a2ff, 0 0 15px #0062ff;
}
</style>
