<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title fade-in-up">About Me</h2>
      <div class="about-content">
        <div class="about-text fade-in-up">
          <p class="lead">
            As a dedicated Voluntree Engagement Executive, I specialize in building bridges between passionate volunteers and meaningful community initiatives.
          </p>
          <p>
            With over 3 years of experience in volunteer coordination and community engagement, 
            I've had the privilege of orchestrating impactful programs that have touched hundreds of lives. 
            My approach combines strategic thinking with genuine care for both volunteers and the communities they serve.
          </p>
          <p>
            I believe that every person has unique talents to contribute to society, and my role is to 
            create the perfect ecosystem where these talents can flourish and create lasting positive change.
          </p>
          
          <div class="skills">
            <h3>Core Competencies</h3>
            <div class="skills-grid">
              <div class="skill-item">
                <div class="skill-icon">🤝</div>
                <h4>Community Engagement</h4>
                <p>Building strong relationships with diverse communities and stakeholders</p>
              </div>
              <div class="skill-item">
                <div class="skill-icon">📊</div>
                <h4>Program Management</h4>
                <p>Strategic planning and execution of volunteer engagement programs</p>
              </div>
              <div class="skill-item">
                <div class="skill-icon">💡</div>
                <h4>Innovation</h4>
                <p>Developing creative solutions for volunteer recruitment and retention</p>
              </div>
              <div class="skill-item">
                <div class="skill-icon">🎯</div>
                <h4>Impact Measurement</h4>
                <p>Tracking and analyzing program effectiveness and community outcomes</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-highlights fade-in-up">
          <div class="highlight-card">
            <h3>My Mission</h3>
            <p>
              To create sustainable volunteer engagement programs that empower individuals 
              and transform communities through meaningful action and lasting partnerships.
            </p>
          </div>
          
          <div class="highlight-card">
            <h3>Core Values</h3>
            <ul>
              <li><strong>Empowerment:</strong> Enabling volunteers to reach their full potential</li>
              <li><strong>Impact:</strong> Focusing on measurable, positive community outcomes</li>
              <li><strong>Inclusivity:</strong> Welcoming diverse perspectives and backgrounds</li>
              <li><strong>Innovation:</strong> Embracing new approaches to engagement</li>
            </ul>
          </div>
          
          <div class="highlight-card">
            <h3>Personal Touch</h3>
            <p>
              When I'm not coordinating volunteer programs, you can find me exploring local 
              community gardens, attending nonprofit events, or mentoring young professionals 
              in the social impact space. I'm passionate about sustainable living and 
              continuous learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  background: linear-gradient(135deg, #ffffff 0%, #f8fdff 50%, #e8f6fd 100%);
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 10%;
  left: -5%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(128, 217, 250, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.about::after {
  content: '';
  position: absolute;
  bottom: 15%;
  right: -3%;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(42, 176, 213, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.about .container {
  position: relative;
  z-index: 1;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.lead {
  font-size: 1.3rem;
  font-weight: 500;
  color: #2ab0d5;
  margin-bottom: 2rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  color: #555;
}

.skills {
  margin-top: 3rem;
}

.skills h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.skill-item {
  text-align: center;
  padding: 1.8rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(75, 196, 226, 0.1), transparent);
  transition: left 0.6s ease;
}

.skill-item:hover::before {
  left: 100%;
}

.skill-item:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.15),
    0 5px 15px rgba(75, 196, 226, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  border-color: rgba(75, 196, 226, 0.3);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.skill-item h4 {
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.skill-item p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  padding: 2.2rem;
  border-radius: 25px;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.1),
    0 3px 10px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.2);
  border-left: 4px solid #4bc4e2;
  position: relative;
  transition: all 0.3s ease;
}

.highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.02) 0%, rgba(128, 217, 250, 0.02) 100%);
  border-radius: 25px;
  z-index: -1;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 5px 15px rgba(75, 196, 226, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

.highlight-card h3 {
  color: #1a1a1a;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.highlight-card p {
  color: #555;
  line-height: 1.7;
}

.highlight-card ul {
  list-style: none;
  padding: 0;
}

.highlight-card li {
  margin-bottom: 0.8rem;
  color: #555;
  line-height: 1.6;
}

.highlight-card strong {
  color: #2ab0d5;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-item {
    padding: 1rem;
  }
  
  .highlight-card {
    padding: 1.5rem;
  }
}
</style>
