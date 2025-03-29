<template>
    <div class="container text-center my-5">
      <h2>Live Blockchain Stats</h2>
      <div class="row mt-4">
        <div class="col-md-4">
          <h3>{{ tps }}</h3>
          <p>Transactions Per Second</p>
        </div>
        <div class="col-md-4">
          <h3>{{ blockTime }}s</h3>
          <p>Average Block Time</p>
        </div>
        <div class="col-md-4">
          <h3>{{ activeUsers }}</h3>
          <p>Active Wallets</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tps: 0,
        blockTime: 0,
        activeUsers: 0
      };
    },
    mounted() {
      this.fetchBlockchainData();
    },
    methods: {
      async fetchBlockchainData() {
        // 模拟数据，可以用 Web3.js / Ethers.js 替换
        setTimeout(() => {
          this.tps = 1500000;
          this.blockTime = 0.02;
          this.activeUsers = 1250000;
        }, 1000);
      }
    }
  };
  </script>
  