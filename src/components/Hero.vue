<template>
  <section id="home" class="hero">
    <div class="hero-background"></div>
    <div class="container">
      <div class="hero-content fade-in-up">
        <h1 class="hero-title">
          Hi, I'm <span class="highlight">Hana Priscilla</span>
        </h1>
        <h2 class="hero-subtitle">
          Volunteer Engagement Executive
        </h2>
        <p class="hero-description">
          A results-driven professional with 3 years of experience in project management. Proven
          expertise in collaborating with diverse stakeholders, including local and international donors, as
          well as national and global universities. Strong strategic planning, communication, and
          organizational skills enable me to drive impactful initiatives and streamline operations.
          Passionate about creating social change and empowering communities, I am eager to take on
          new challenges to further develop my skills and contribute to meaningful, sustainable impact.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <h3>500+</h3>
            <p>Volunteers Engaged</p>
          </div>
          <div class="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div class="stat">
            <h3>25+</h3>
            <p>Community Partners</p>
          </div>
        </div>
        <div class="hero-actions">
          <a href="#projects" class="btn">View My Work</a>
          <a href="#contact" class="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div class="hero-image fade-in-up">
        <div class="image-placeholder">
          <div class="profile-circle">
            <img src="../assets/profil.jpeg" alt="Profile" class="profile-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <a href="#about">
        <div class="scroll-indicator">
          <span></span>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fdff 0%, #ffffff 50%, #e8f6fd 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(135deg, #80d9fa 0%, #4bc4e2 50%, #007cad 100%);
  opacity: 0.03;
  z-index: -2;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 70%, rgba(75, 196, 226, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 70% 30%, rgba(128, 217, 250, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(42, 176, 213, 0.08) 0%, transparent 60%);
  z-index: -1;
}

.hero::after {
  content: '';
  position: absolute;
  top: 20%;
  right: -10%;
  width: 500px;
  height: 500px;
  border: 2px solid rgba(75, 196, 226, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  z-index: -1;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.highlight {
  background: linear-gradient(135deg, #4bc4e2, #007cad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #2ab0d5;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.0rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.stat h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #2ab0d5;
  margin-bottom: 0.5rem;
}

.stat p {
  color: #666;
  font-size: 0.9rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(75, 196, 226, 0.3);
  position: relative;
}

.image-placeholder::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 2px solid #4bc4e2;
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse 2s infinite;
}

.profile-circle {
  width: 280px;
  height: 280px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}


.hero-scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-indicator {
  width: 2px;
  height: 30px;
  background: #4bc4e2;
  position: relative;
  opacity: 0.7;
}

.scroll-indicator span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: #4bc4e2;
  animation: scroll 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.1;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  33% {
    transform: translateY(-20px) rotate(120deg);
  }

  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .image-placeholder {
    width: 250px;
    height: 250px;
  }

  .profile-circle {
    width: 200px;
    height: 200px;
    font-size: 3rem;
  }
}
</style>
