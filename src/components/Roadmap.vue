<template>
  <section class="roadmap">
    <div class="container">
      <h2 class="section-title">Development Roadmap</h2>
      <p class="section-description">
        Our journey to build the ultimate blockchain ecosystem platform with the community
      </p>
      
      <div class="timeline">
        <div 
          v-for="(milestone, index) in milestones" 
          :key="index"
          class="milestone"
          :class="{ 'milestone-left': index % 2 === 0, 'milestone-right': index % 2 !== 0 }"
        >
          <div class="milestone-content">
            <div class="milestone-header">
              <div class="milestone-icon">
                <img :src="milestone.icon" :alt="milestone.title" />
              </div>
              <h3 class="milestone-title">{{ milestone.title }}</h3>
              <div class="milestone-date">{{ milestone.date }}</div>
            </div>
            <div class="milestone-body">
              <ul class="milestone-features">
                <li v-for="(feature, i) in milestone.features" :key="i">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const milestones = [
  {
    title: 'Phase 1: Foundation',
    date: 'Q1 2024',
    icon: '/icons/foundation.svg',
    features: [
      'Core platform development',
      'Basic NFT marketplace',
      'First game integration',
      'Community building'
    ]
  },
  {
    title: 'Phase 2: Expansion',
    date: 'Q2 2024',
    icon: '/icons/expansion.svg',
    features: [
      'Multi-game support',
      'Advanced trading features',
      'Mobile app launch',
      'DAO governance start'
    ]
  },
  {
    title: 'Phase 3: Ecosystem',
    date: 'Q3 2024',
    icon: '/icons/ecosystem.svg',
    features: [
      'Developer SDK release',
      'Cross-game asset interoperability',
      'Staking rewards',
      'Full DAO governance'
    ]
  },
  {
    title: 'Phase 4: Metaverse',
    date: 'Q4 2024',
    icon: '/icons/metaverse.svg',
    features: [
      '3D virtual world',
      'VR/AR integration',
      'Social features',
      'Full platform maturity'
    ]
  }
]
</script>

<style scoped>
.roadmap {
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

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background: linear-gradient(to bottom, #00ff88, #00a1ff);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 10px;
}

.milestone {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease;
}

.milestone.visible {
  opacity: 1;
  transform: translateY(0);
}

.milestone-left {
  left: 0;
}

.milestone-right {
  left: 50%;
}

.milestone::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #00ff88;
  border: 4px solid #0a0a0a;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.milestone-right::after {
  left: -17px;
}

.milestone-content {
  padding: 20px 30px;
  background: rgba(20, 20, 20, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.milestone:hover .milestone-content {
  border-color: rgba(0, 255, 136, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.1);
}

.milestone-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.milestone-icon {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.milestone-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.milestone-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
  margin-right: auto;
  color: #00ff88;
}

.milestone-date {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  color: #00a1ff;
  padding: 5px 10px;
  background: rgba(0, 161, 255, 0.1);
  border-radius: 5px;
}

.milestone-features {
  padding-left: 20px;
}

.milestone-features li {
  margin-bottom: 8px;
  line-height: 1.5;
  position: relative;
}

.milestone-features li::before {
  content: '•';
  color: #00ff88;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

@media (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .milestone {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .milestone-left,
  .milestone-right {
    left: 0;
  }

  .milestone::after {
    left: 18px;
  }

  .milestone-right::after {
    left: 18px;
  }
}
</style>
