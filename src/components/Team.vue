<template>
  <section class="team">
    <div class="container">
      <h2 class="section-title">Core Team</h2>
      <p class="section-description">
        Experienced professionals building the future of gaming
      </p>
      
      <div class="team-grid">
        <div 
          v-for="member in teamMembers" 
          :key="member.name"
          class="team-member"
        >
          <div class="member-image">
            <img :src="member.avatar" :alt="member.name" />
            <div class="social-links">
              <a 
                v-for="(link, platform) in member.social" 
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
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <div class="member-role">{{ member.role }}</div>
            <p class="member-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former game director at a AAA studio with 15+ years experience in game development and blockchain technology.',
    avatar: '/avatars/alex-chen.jpg',
    social: {
      twitter: 'https://twitter.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
      github: 'https://github.com/alexchen'
    }
  },
  {
    name: 'Sarah Park',
    role: 'CTO',
    bio: 'Lead engineer at multiple successful startups, specializing in scalable blockchain architectures and game engines.',
    avatar: '/avatars/sarah-park.jpg',
    social: {
      twitter: 'https://twitter.com/sarahpark',
      linkedin: 'https://linkedin.com/in/sarahpark',
      github: 'https://github.com/sarahpark'
    }
  },
  {
    name: 'Jamal Williams',
    role: 'Game Design Director',
    bio: 'Award-winning game designer with expertise in player engagement and tokenomics design.',
    avatar: '/avatars/jamal-williams.jpg',
    social: {
      twitter: 'https://twitter.com/jamalwilliams',
      linkedin: 'https://linkedin.com/in/jamalwilliams'
    }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Community Lead',
    bio: 'Built and managed communities for several top blockchain projects with 500k+ members.',
    avatar: '/avatars/elena-rodriguez.jpg',
    social: {
      twitter: 'https://twitter.com/elenarodriguez',
      discord: 'https://discord.com/users/elena'
    }
  }
]
</script>

<style scoped>
.team {
  padding: 100px 0;
  background: #0a0a0a;
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

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.team-member {
  background: rgba(20, 20, 20, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 255, 136, 0.3);
  box-shadow: 0 15px 30px rgba(0, 255, 136, 0.1);
}

.member-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-member:hover .member-image img {
  transform: scale(1.05);
}

.social-links {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-member:hover .social-links {
  opacity: 1;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

.member-info {
  padding: 25px;
}

.member-name {
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #00ff88;
}

.member-role {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  color: #00a1ff;
  margin-bottom: 15px;
}

.member-bio {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .member-image {
    height: 250px;
  }
}
</style>
