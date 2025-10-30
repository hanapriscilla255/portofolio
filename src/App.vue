<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Experience,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #f8fdff 0%, #e8f6fd 100%);
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(75, 196, 226, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(42, 176, 213, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(128, 217, 250, 0.05) 0%, transparent 50%);
  z-index: -1;
  pointer-events: none;
}

#app {
  min-height: 100vh;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Common styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
  position: relative;
}

.section-title::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  border-radius: 2px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 4px;
  border-radius: 2px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(75, 196, 226, 0.3);
}

.btn-outline {
  background: transparent;
  border: 2px solid #4bc4e2;
  color: #4bc4e2;
}

.btn-outline:hover {
  background: #4bc4e2;
  color: white;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
