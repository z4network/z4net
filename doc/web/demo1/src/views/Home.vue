<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h1 class="display-3 neon-text mb-4">WELCOME TO Z4 BLOCKCHAIN</h1>
        <p class="lead text-light mb-5">The next-generation blockchain network with quantum-resistant security</p>
        
        <div class="row g-4 mb-5">
          <div class="col-md-4">
            <div class="card bg-transparent border-neon h-100">
              <div class="card-body">
                <i class="bi bi-lightning-charge fs-1 text-info mb-3"></i>
                <h3 class="card-title text-light">Lightning Fast</h3>
                <p class="card-text text-muted">10,000+ TPS with sub-second finality</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-transparent border-neon h-100">
              <div class="card-body">
                <i class="bi bi-shield-lock fs-1 text-purple mb-3"></i>
                <h3 class="card-title text-light">Quantum Safe</h3>
                <p class="card-text text-muted">Post-quantum cryptography built-in</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-transparent border-neon h-100">
              <div class="card-body">
                <i class="bi bi-globe fs-1 text-cyan mb-3"></i>
                <h3 class="card-title text-light">Decentralized</h3>
                <p class="card-text text-muted">Global network of 500+ nodes</p>
              </div>
            </div>
          </div>
        </div>

        <StatsSection />
      </div>
    </div>
  </div>
</template>

<script>
import StatsSection from '../components/StatsSection.vue';

export default {
  components: { StatsSection }
};
</script>

<style scoped>
.border-neon {
  border: 1px solid rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 162, 255, 0.3);
  transition: all 0.3s ease;
}

.border-neon:hover {
  border-color: rgba(0, 240, 255, 0.7);
  box-shadow: 0 0 25px rgba(0, 162, 255, 0.7);
  transform: translateY(-5px);
}

.text-cyan {
  color: #00f0ff;
}

.text-purple {
  color: #a100ff;
}
</style>
