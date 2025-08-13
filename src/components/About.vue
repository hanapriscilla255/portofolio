<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title fade-in-up">About Me</h2>
      <p class="section-subtitle fade-in-up">
        Passionate about creating meaningful change through strategic volunteer engagement and community empowerment
      </p>
      
      <div class="about-content">
        <!-- Professional Overview -->
        <div class="professional-overview fade-in-up">
          <div class="overview-card">
            <div class="overview-header">
              <div class="profile-highlight">
                <div class="profile-icon">🌟</div>
                <div class="profile-info">
                  <h3>Professional Summary</h3>
                  <p class="title-highlight">Volunteer Engagement Executive</p>
                </div>
              </div>
            </div>
            
            <div class="overview-content">
              <p class="lead">
                A results-driven professional with 3+ years of experience in project management and volunteer engagement.
              </p>
              <p>
                Proven expertise in collaborating with diverse stakeholders, including local and international donors, 
                as well as national and global universities. Strong strategic planning, communication, and organizational 
                skills enable me to drive impactful initiatives and streamline operations.
              </p>
              <p>
                Passionate about creating social change and empowering communities, I am eager to take on new challenges 
                to further develop my skills and contribute to meaningful, sustainable impact.
              </p>
            </div>
          </div>
        </div>

        <!-- Core Competencies -->
        <div class="competencies-section fade-in-up">
          <h3 class="section-heading">Core Competencies</h3>
          <div class="skills-grid">
            <div class="skill-card">
              <div class="skill-header">
                <div class="skill-icon">🤝</div>
                <h4>Community Engagement</h4>
              </div>
              <p>Building strong relationships with diverse communities and stakeholders across multiple regions</p>
              <div class="skill-level">
                <div class="level-bar" style="width: 95%"></div>
              </div>
            </div>
            
            <div class="skill-card">
              <div class="skill-header">
                <div class="skill-icon">📊</div>
                <h4>Program Management</h4>
              </div>
              <p>Strategic planning and execution of volunteer engagement programs with measurable outcomes</p>
              <div class="skill-level">
                <div class="level-bar" style="width: 90%"></div>
              </div>
            </div>
            
            <div class="skill-card">
              <div class="skill-header">
                <div class="skill-icon">💡</div>
                <h4>Strategic Innovation</h4>
              </div>
              <p>Developing creative solutions for volunteer recruitment, retention, and program optimization</p>
              <div class="skill-level">
                <div class="level-bar" style="width: 88%"></div>
              </div>
            </div>
            
            <div class="skill-card">
              <div class="skill-header">
                <div class="skill-icon">🎯</div>
                <h4>Impact Measurement</h4>
              </div>
              <p>Tracking and analyzing program effectiveness with data-driven insights and reporting</p>
              <div class="skill-level">
                <div class="level-bar" style="width: 92%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mission & Values -->
        <div class="values-section fade-in-up">
          <div class="values-grid">
            <div class="value-card primary">
              <div class="value-icon">🎯</div>
              <h3>Mission</h3>
              <p>
                To create sustainable volunteer engagement programs that empower individuals 
                and transform communities through meaningful action and lasting partnerships.
              </p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">⭐</div>
              <h3>Core Values</h3>
              <ul class="values-list">
                <li>
                  <span class="value-point">Empowerment</span>
                  <span class="value-desc">Enabling volunteers to reach their full potential</span>
                </li>
                <li>
                  <span class="value-point">Impact</span>
                  <span class="value-desc">Focusing on measurable, positive community outcomes</span>
                </li>
                <li>
                  <span class="value-point">Inclusivity</span>
                  <span class="value-desc">Welcoming diverse perspectives and backgrounds</span>
                </li>
                <li>
                  <span class="value-point">Innovation</span>
                  <span class="value-desc">Embracing new approaches to engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Personal Touch -->
        <div class="personal-section fade-in-up">
          <div class="personal-card">
            <div class="personal-header">
              <div class="personal-icon">💫</div>
              <h3>Beyond Work</h3>
            </div>
            <p>
              When I'm not coordinating volunteer programs, you can find me exploring local 
              community initiatives, attending nonprofit networking events, or mentoring young professionals 
              in the social impact space. I'm passionate about sustainable development, continuous learning, 
              and building bridges between communities across Indonesia and internationally.
            </p>
            <div class="interests">
              <span class="interest-tag">Community Development</span>
              <span class="interest-tag">Sustainable Living</span>
              <span class="interest-tag">Cultural Exchange</span>
              <span class="interest-tag">Youth Mentoring</span>
            </div>
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
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: 10%;
  left: -5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(128, 217, 250, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.about::after {
  content: '';
  position: absolute;
  bottom: 15%;
  right: -5%;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(42, 176, 213, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.about .container {
  position: relative;
  z-index: 1;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: -2rem auto 4rem;
  line-height: 1.6;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Professional Overview */
.professional-overview {
  margin-bottom: 2rem;
}

.overview-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 3rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.15);
  position: relative;
}

.overview-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.02) 0%, rgba(128, 217, 250, 0.03) 100%);
  border-radius: 25px;
  z-index: -1;
}

.overview-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(75, 196, 226, 0.2);
}

.profile-highlight {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.profile-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.profile-info h3 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.title-highlight {
  font-size: 1.1rem;
  color: #2ab0d5;
  font-weight: 500;
  margin: 0;
}

.overview-content {
  font-size: 1.1rem;
  line-height: 1.8;
}

.lead {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2ab0d5;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.overview-content p {
  margin-bottom: 1.5rem;
  color: #555;
}

/* Core Competencies */
.competencies-section {
  margin-bottom: 2rem;
}

.section-heading {
  text-align: center;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 3rem;
  position: relative;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 3px 12px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(75, 196, 226, 0.08), transparent);
  transition: left 0.6s ease;
}

.skill-card:hover::before {
  left: 100%;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.12),
    0 8px 25px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  border-color: rgba(75, 196, 226, 0.25);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.1) 0%, rgba(128, 217, 250, 0.1) 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.skill-header h4 {
  font-size: 1.2rem;
  color: #1a1a1a;
  font-weight: 600;
  margin: 0;
}

.skill-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.skill-level {
  width: 100%;
  height: 6px;
  background: rgba(75, 196, 226, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.level-bar {
  height: 100%;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  border-radius: 3px;
  transition: width 1s ease;
  position: relative;
}

.level-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Values Section */
.values-section {
  margin-bottom: 2rem;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 3px 12px rgba(75, 196, 226, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.15);
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
  position: relative;
}

.value-card.primary {
  border-left-color: #4bc4e2;
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.02) 0%, rgba(255, 255, 255, 0.9) 100%);
}

.value-card:not(.primary) {
  border-left-color: #80d9fa;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.12),
    0 8px 25px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

.value-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.value-card h3 {
  font-size: 1.4rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 600;
}

.value-card p {
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.values-list li {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(75, 196, 226, 0.1);
}

.values-list li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.value-point {
  font-weight: 600;
  color: #2ab0d5;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.value-desc {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Personal Section */
.personal-section {
  margin-bottom: 1rem;
}

.personal-card {
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.03) 0%, rgba(255, 255, 255, 0.95) 100%);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 3rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.2);
  text-align: center;
  position: relative;
}

.personal-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.personal-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
}

.personal-header h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 0;
  font-weight: 600;
}

.personal-card p {
  color: #555;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.interests {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.interest-tag {
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(75, 196, 226, 0.3);
  transition: all 0.3s ease;
}

.interest-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(75, 196, 226, 0.4);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .section-subtitle {
    font-size: 1rem;
    margin: -1rem auto 3rem;
  }
  
  .about-content {
    gap: 3rem;
  }
  
  .overview-card,
  .personal-card {
    padding: 2rem;
  }
  
  .profile-highlight {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .skill-card {
    padding: 2rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .value-card {
    padding: 2rem;
  }
  
  .interests {
    gap: 0.5rem;
  }
  
  .interest-tag {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .overview-card,
  .personal-card,
  .value-card,
  .skill-card {
    padding: 1.5rem;
  }
  
  .profile-icon,
  .value-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .personal-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
