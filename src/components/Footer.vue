<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="Sonic Game" />
          </div>
          <p class="tagline">
            The Future of Blockchain Ecosystem
          </p>
          <div class="social-links">
            <a 
              v-for="(link, platform) in socialLinks" 
              :key="platform"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                :src="`/icons/${platform}.svg`" 
                :alt="platform" 
                class="social-icon"
              />
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="links-column" v-for="(column, index) in footerLinks" :key="index">
            <h3 class="column-title">{{ column.title }}</h3>
            <ul class="column-links">
              <li v-for="(item, i) in column.links" :key="i">
                <a :href="item.url">{{ item.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; 2024-2025 Z4 Network. All rights reserved.
        </p>
        <div class="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = {
  twitter: 'https://twitter.com/z4network',
  discord: 'https://discord.gg/z4network',
  telegram: 'https://t.me/z4network',
  github: 'https://github.com/z4network'
}

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', url: '/features' },
      { label: 'Blockchain', url: '/blockchain' },
      { label: 'Marketplace', url: '/marketplace' },
      { label: 'Roadmap', url: '/roadmap' }
    ]
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', url: '/docs' },
      { label: 'API', url: '/api' },
      { label: 'SDK', url: '/sdk' },
      { label: 'GitHub', url: 'https://github.com/z4network' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', url: '/about' },
      { label: 'Team', url: '/team' },
      { label: 'Careers', url: '/careers' },
      { label: 'Contact', url: '/contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', url: '/blog' },
      { label: 'FAQ', url: '/faq' },
      { label: 'Help Center', url: '/help' },
      { label: 'Community', url: '/community' }
    ]
  }
]
</script>

<style scoped>
.footer {
  background: #000;
  color: #fff;
  padding: 80px 0 0;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

.logo img {
  width: 100%;
  height: auto;
}

.tagline {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 30px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 24px;
  height: 24px;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.social-icon:hover {
  opacity: 1;
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
}

.column-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #00ff88;
}

.column-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column-links li {
  margin-bottom: 12px;
}

.column-links a {
  color: #fff;
  opacity: 0.7;
  text-decoration: none;
  transition: all 0.3s ease;
}

.column-links a:hover {
  opacity: 1;
  color: #00a1ff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.7;
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links a {
  font-size: 0.9rem;
  color: #fff;
  opacity: 0.7;
  text-decoration: none;
  transition: all 0.3s ease;
}

.legal-links a:hover {
  opacity: 1;
  color: #00ff88;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-links {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>
