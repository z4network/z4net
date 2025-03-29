<template>
  <div class="app">
    <Header />
    <Hero />
    <OurVision />
    <HyperGrid />
    <DataOverview />
    <Roadmap />
    <Team />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import OurVision from './components/OurVision.vue'
import HyperGrid from './components/HyperGrid.vue'
import DataOverview from './components/DataOverview.vue'
import Roadmap from './components/Roadmap.vue'
import Team from './components/Team.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Orbitron:wght@400;500;600&family=Manrope:wght@400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #000;
  color: #fff;
}
</style>
