<template>
    <div class="container text-center my-5">
      <h2>Live Blockchain Stats</h2>
      <div class="row mt-4">
        <div class="col-md-4">
          <h3>{{ tps }}</h3>
          <p>Transactions Per Second</p>
        </div>
        <div class="col-md-4">
          <h3>{{ gasPrice }} Gwei</h3>
          <p>Gas Price</p>
        </div>
        <div class="col-md-4">
          <h3>{{ blockNumber }}</h3>
          <p>Latest Block</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { ethers } from "ethers";
  
  export default {
    setup() {
      const tps = ref(0);
      const gasPrice = ref(0);
      const blockNumber = ref(0);
  
      async function fetchBlockchainData() {
        const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
        blockNumber.value = await provider.getBlockNumber();
        gasPrice.value = ethers.formatUnits(await provider.getFeeData().then(d => d.gasPrice), "gwei");
        tps.value = 1500;  // 假设的 TPS
      }
  
      onMounted(fetchBlockchainData);
  
      return { tps, gasPrice, blockNumber };
    }
  };
  </script>
  