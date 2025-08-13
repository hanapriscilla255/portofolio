<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2025 Hana Portfolio. Crafted with ❤️ for community impact.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 3rem 0 1rem;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(75, 196, 226, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(42, 176, 213, 0.03) 0%, transparent 50%);
  z-index: 0;
}

.footer .container {
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.8rem;
  color: #4bc4e2;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: white;
}

.footer-section p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #333;
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-icon:hover {
  background: #4bc4e2;
  transform: translateY(-2px);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #4bc4e2;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #999;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #4bc4e2;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-social {
    justify-content: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
  }
}
</style>
