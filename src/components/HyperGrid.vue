<template>
  <section class="hyper-grid">
    <div class="container">
      <h2 class="section-title">Explore the Sonic Universe</h2>
      <p class="section-description">
        Discover the vast world of Sonic with unique characters, items and locations
      </p>
      
      <div class="grid-container">
        <div 
          v-for="(item, index) in gridItems" 
          :key="index"
          class="grid-item"
          :class="`item-${index + 1}`"
          :style="{ 'background-image': `url(${item.image})` }"
          @mouseenter="activeIndex = index"
          @mouseleave="activeIndex = null"
        >
          <div class="item-content">
            <h3 class="item-title">{{ item.title }}</h3>
            <p class="item-description" v-if="activeIndex === index">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const gridItems = [
  {
    title: 'Sonic Characters',
    description: 'Meet the iconic characters of the Sonic universe',
    image: '/images/characters.jpg'
  },
  {
    title: 'Power Ups',
    description: 'Collect special items to enhance your abilities',
    image: '/images/powerups.jpg'
  },
  {
    title: 'Worlds',
    description: 'Explore diverse and vibrant game worlds',
    image: '/images/worlds.jpg'
  },
  {
    title: 'Quests',
    description: 'Embark on exciting missions and challenges',
    image: '/images/quests.jpg'
  },
  {
    title: 'Marketplace',
    description: 'Trade and collect rare in-game items',
    image: '/images/marketplace.jpg'
  }
]
</script>

<style scoped>
.hyper-grid {
  padding: 100px 0;
  background: #000;
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 20px;
}

.grid-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.grid-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.grid-item:hover::before {
  background: rgba(0, 0, 0, 0.2);
}

.grid-item:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}

.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

.item-2 {
  grid-column: 3 / span 2;
  grid-row: 1;
}

.item-3 {
  grid-column: 3;
  grid-row: 2;
}

.item-4 {
  grid-column: 4;
  grid-row: 2;
}

.item-5 {
  grid-column: 1 / span 4;
  grid-row: 3;
}

.item-content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 30px;
  width: 100%;
  color: white;
  z-index: 2;
}

.item-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.item-description {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 500px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.grid-item:hover .item-description {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 200px);
  }

  .grid-item {
    grid-column: 1 !important;
    grid-row: auto !important;
  }
}
</style>
