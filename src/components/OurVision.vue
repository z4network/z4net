<template>
  <section class="our-vision">
    <div class="container">
      <h2 class="section-title">Our Vision</h2>
      <p class="section-description">
        Sonic is building the next generation gaming platform powered by blockchain technology,
        bringing true digital ownership and play-to-earn mechanics to millions of players worldwide.
      </p>
      
      <div class="vision-cards">
        <div v-for="card in cards" :key="card.title" class="vision-card">
          <div class="card-icon">
            <img :src="card.icon" :alt="card.title" />
          </div>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'True Ownership',
    description: 'Players truly own their in-game assets as NFTs',
    icon: '/icons/ownership.svg'
  },
  {
    title: 'Play to Earn',
    description: 'Earn valuable rewards while playing your favorite games',
    icon: '/icons/earn.svg'
  },
  {
    title: 'Interoperability',
    description: 'Use your assets across multiple games and platforms',
    icon: '/icons/interop.svg'
  },
  {
    title: 'Community Governance',
    description: 'Players have a say in the future of the platform',
    icon: '/icons/governance.svg'
  }
]
</script>

<style scoped>
.our-vision {
  padding: 100px 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #00ff88, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.8;
}

.vision-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.vision-card {
  background: rgba(20, 20, 20, 0.7);
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.vision-card:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 255, 136, 0.3);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #00ff88;
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
}
</style>
