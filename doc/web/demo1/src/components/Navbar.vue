<template>
    <nav class="navbar navbar-expand-lg navbar-dark px-4" style="background-color: rgba(11,15,25,0.7); backdrop-filter: blur(5px);">
      <a class="navbar-brand neon-text" href="#">🚀 Z4 Blockchain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link neon-hover" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link neon-hover" to="/technology">Technology</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link neon-hover" to="/developers">Developers</router-link>
          </li>
          <li class="nav-item ms-3">
            <button class="btn btn-neon" @click="connectWallet">
              {{ walletAddress ? shortAddress(walletAddress) : "Connect Wallet" }}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from "vue";
  import { ethers } from "ethers";
  
  export default {
    setup() {
      const walletAddress = ref(null);
  
      async function connectWallet() {
        if (window.ethereum) {
          try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            walletAddress.value = accounts[0];
          } catch (error) {
            console.error("Error connecting to MetaMask", error);
          }
        } else {
          alert("Please install MetaMask!");
        }
      }
  
      function shortAddress(address) {
        return address.slice(0, 6) + "..." + address.slice(-4);
      }
  
      return { walletAddress, connectWallet, shortAddress };
    }
  };
  </script>

  <style scoped>
  .navbar {
    border-bottom: 1px solid rgba(0, 240, 255, 0.3);
    box-shadow: 0 0 10px rgba(0, 162, 255, 0.5);
  }

  .nav-link {
    position: relative;
    margin: 0 10px;
    transition: all 0.3s ease;
  }

  .nav-link.neon-hover:hover {
    color: #00f0ff !important;
    text-shadow: 0 0 5px #00f0ff, 0 0 10px #00a2ff;
  }

  .btn-neon {
    background: transparent;
    color: #00f0ff;
    border: 1px solid #00f0ff;
    transition: all 0.3s ease;
  }

  .btn-neon:hover {
    background: rgba(0, 240, 255, 0.1);
    box-shadow: 0 0 10px #00f0ff, 0 0 20px #00a2ff;
  }
  </style>
