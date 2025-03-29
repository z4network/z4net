<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">Z4 Network</h1>
      <h2 class="subtitle">The Next Generation Blockchain Eco-System Platform</h2>
      <div class="cta-buttons">
        <a href="/game" class="btn primary">Join Now</a>
        <a href="/whitepaper" class="btn secondary">Whitepaper</a>
      </div>
    </div>
    <div class="hero-background">
      <!-- 这里将放置背景视频或动画 -->
      <div class="particles"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 这里将初始化粒子动画
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.title {
  font-family: 'Orbitron', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  background: linear-gradient(90deg, #00ff88, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 2s ease-in-out infinite alternate;
}

.subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary {
  background: linear-gradient(90deg, #00ff88, #00a1ff);
  color: #000;
}

.secondary {
  border: 2px solid #00ff88;
  color: #00ff88;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: radial-gradient(circle at center, rgba(0, 255, 136, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/particles.png');
  background-size: cover;
  opacity: 0.3;
  animation: float 30s linear infinite;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(0, 255, 136, 0.8), 0 0 30px rgba(0, 161, 255, 0.6);
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(50px, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
