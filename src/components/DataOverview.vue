<template>
  <section class="data-overview">
    <div class="container">
      <h2 class="section-title">By the Numbers</h2>
      <p class="section-description">
        Sonic is growing rapidly with an engaged community of players and developers
      </p>
      
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-value" ref="counterRef">0</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>

      <div class="chart-container">
        <!-- 这里将放置图表组件 -->
        <div class="chart-placeholder">
          <div class="placeholder-graph"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Active Players', value: 250000 },
  { label: 'Daily Transactions', value: 15000 },
  { label: 'NFTs Minted', value: 500000 },
  { label: 'Games Integrated', value: 25 }
]

const counterRef = ref<HTMLElement[]>([])

onMounted(() => {
  const animateCounters = () => {
    counterRef.value.forEach((el, index) => {
      const target = stats[index].value
      const duration = 2000
      const startTime = performance.now()
      
      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const currentValue = Math.floor(progress * target)
        el.textContent = currentValue.toLocaleString()
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }
      
      requestAnimationFrame(updateCounter)
    })
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters()
        observer.disconnect()
      }
    })
  }, { threshold: 0.5 })

  observer.observe(document.querySelector('.data-overview')!)
})
</script>

<style scoped>
.data-overview {
  padding: 100px 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #00ff88, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  max-width: 600px;
  margin: 0 auto 60px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background: rgba(20, 20, 20, 0.7);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 255, 136, 0.3);
  box-shadow: 0 10px 20px rgba(0, 255, 136, 0.1);
}

.stat-value {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #00ff88;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.8;
}

.chart-container {
  background: rgba(20, 20, 20, 0.7);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.chart-placeholder {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
}

.placeholder-graph {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(0, 255, 136, 0.2) 0%, 
    rgba(0, 161, 255, 0.2) 100%);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.placeholder-graph::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 20px,
    rgba(255, 255, 255, 0.1) 20px,
    rgba(255, 255, 255, 0.1) 40px
  );
  animation: shimmer 2s infinite linear;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .stat-value {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
