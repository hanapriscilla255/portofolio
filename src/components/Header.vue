<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-wrapper">
        <div class="logo">
          <h2>Portofolio</h2>
        </div>
        
        <nav class="nav" :class="{ 'mobile-open': isMobileMenuOpen }">
          <ul>
            <li><a href="#home" @click="closeMenu">Home</a></li>
            <li><a href="#about" @click="closeMenu">About</a></li>
            <li><a href="#experience" @click="closeMenu">Experience</a></li>
            <li><a href="#contact" @click="closeMenu">Contact</a></li>
          </ul>
        </nav>
        
        <div class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h2 {
  color: #4bc4e2;
  font-weight: 700;
  font-size: 1.8rem;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav a:hover {
  color: #4bc4e2;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4bc4e2;
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav ul {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }
  
  .nav a {
    display: block;
    padding: 0.5rem 0;
  }
}
</style>
