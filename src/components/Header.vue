<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Z4Network" />
      </div>
      
      <nav class="nav">
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/" class="menu-link">Home</router-link>
          </li>
          
          <li class="menu-item dropdown">
            <a href="#" class="menu-link">Z4 BlockChain</a>
            <div class="dropdown-content">
              <router-link to="/z4blockchain/overview" class="dropdown-item">Overview</router-link>
              <router-link to="/z4blockchain/tech" class="dropdown-item">Technology</router-link>
              <router-link to="/z4blockchain/whitepaper" class="dropdown-item">Whitepaper</router-link>
              
              <div class="dropdown-submenu">
                <a href="#" class="dropdown-item">Node Validator</a>
                <div class="dropdown-subcontent">
                  <router-link to="/node/setup" class="dropdown-item">Setup Guide</router-link>
                  <router-link to="/node/rewards" class="dropdown-item">Rewards</router-link>
                  <router-link to="/node/faq" class="dropdown-item">FAQ</router-link>
                </div>
              </div>
              
              <div class="dropdown-submenu">
                <a href="#" class="dropdown-item">Token</a>
                <div class="dropdown-subcontent">
                  <router-link to="/token/economics" class="dropdown-item">Tokenomics</router-link>
                  <router-link to="/token/staking" class="dropdown-item">Staking</router-link>
                  <router-link to="/token/exchange" class="dropdown-item">Exchange</router-link>
                </div>
              </div>
              
              <div class="dropdown-submenu">
                <a href="#" class="dropdown-item">SPL-TOKEN</a>
                <div class="dropdown-subcontent">
                  <router-link to="/spltoken/create" class="dropdown-item">Create</router-link>
                  <router-link to="/spltoken/manage" class="dropdown-item">Manage</router-link>
                  <router-link to="/spltoken/tools" class="dropdown-item">Tools</router-link>
                </div>
              </div>
              
              <div class="dropdown-submenu">
                <a href="#" class="dropdown-item">NFT</a>
                <div class="dropdown-subcontent">
                  <router-link to="/nft/market" class="dropdown-item">Marketplace</router-link>
                  <router-link to="/nft/collections" class="dropdown-item">Collections</router-link>
                  <router-link to="/nft/create" class="dropdown-item">Create</router-link>
                </div>
              </div>
            </div>
          </li>
          
          <li class="menu-item dropdown">
            <a href="#" class="menu-link">Document</a>
            <div class="dropdown-content">
              <router-link to="/doc/api" class="dropdown-item">API</router-link>
              <router-link to="/doc/tutorials" class="dropdown-item">Tutorials</router-link>
              <router-link to="/doc/references" class="dropdown-item">References</router-link>
            </div>
          </li>
          
          <li class="menu-item dropdown">
            <a href="#" class="menu-link">Media</a>
            <div class="dropdown-content">
              <router-link to="/media/news" class="dropdown-item">News</router-link>
              <router-link to="/media/videos" class="dropdown-item">Videos</router-link>
              <router-link to="/media/events" class="dropdown-item">Events</router-link>
            </div>
          </li>
          
          <li class="menu-item dropdown">
            <a href="#" class="menu-link">Explorer</a>
            <div class="dropdown-content">
              <router-link to="/explorer/z4scan" class="dropdown-item">Z4Scan</router-link>
              <router-link to="/explorer/z4explorer" class="dropdown-item">Z4Explorer</router-link>
            </div>
          </li>
          <li class="menu-item dropdown">
            <a href="#" class="menu-link">About</a>
            <div class="dropdown-content">
              <router-link to="/about/team" class="dropdown-item">Team</router-link>
              <router-link to="/about/contact" class="dropdown-item">Contact</router-link>
              <router-link to="/about/careers" class="dropdown-item">Careers</router-link>
            </div>
          </li>
        </ul>
      </nav>

      <div class="language-selector">
        <select v-model="selectedLanguage" class="lang-select">
          <option v-for="lang in languages" :key="lang" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const languages = ref(['EN', 'ZH', 'JA', 'KO'])
const selectedLanguage = ref('EN')
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo img {
  height: 40px;
}

.nav {
  flex: 1;
  margin: 0 30px;
}

.menu {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;
  margin: 0 15px;
}

.menu-link {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  transition: color 0.3s;
}

.menu-link:hover {
  color: #00ff88;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  min-width: 200px;
  border: 1px solid rgba(0, 255, 136, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-item {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dropdown-submenu {
  position: relative;
}

.dropdown-subcontent {
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  min-width: 200px;
  border: 1px solid rgba(0, 255, 136, 0.2);
}

.dropdown-submenu:hover .dropdown-subcontent {
  display: block;
}

.language-selector select {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 4px;
  width: 80px;
}

.language-selector select option {
  background: #333;
  color: white;
}
</style>
