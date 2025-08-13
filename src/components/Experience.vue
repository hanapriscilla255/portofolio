<template>
  <section id="experience" class="section experience">
    <div class="container">
      <h2 class="section-title fade-in-up">Professional Experience</h2>
      
      <div class="timeline">
        <div class="timeline-item fade-in-up" v-for="(item, index) in experiences" :key="index">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3>{{ item.position }}</h3>
              <span class="timeline-date">{{ item.period }}</span>
            </div>
            <h4 class="company">{{ item.company }}</h4>
            <p class="description">{{ item.description }}</p>
            <ul class="achievements">
              <li v-for="achievement in item.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
            <div class="skills-used">
              <span v-for="skill in item.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="certifications fade-in-up">
        <h3>Certifications & Training</h3>
        <div class="cert-grid">
          <div class="cert-item" v-for="cert in certifications" :key="cert.name">
            <div class="cert-icon">🏆</div>
            <h4>{{ cert.name }}</h4>
            <p>{{ cert.issuer }} • {{ cert.year }}</p>
          </div>
        </div>
      </div>
      
      <div class="skills-section fade-in-up">
        <h3>Key Skills</h3>
        <div class="skills-grid">
          <div class="skill-item fade-in-up">
            <div class="skill-icon">💼</div>
            <h4>Office Suite Software</h4>
          </div>
          <div class="skill-item fade-in-up">
            <div class="skill-icon">⌨️</div>
            <h4>Data Entry</h4>
          </div>
          <div class="skill-item fade-in-up">
            <div class="skill-icon">📋</div>
            <h4>Project Management</h4>
          </div>
          <div class="skill-item fade-in-up">
            <div class="skill-icon">📊</div>
            <h4>Project Monitoring & Evaluation</h4>
          </div>
          <div class="skill-item fade-in-up">
            <div class="skill-icon">🧩</div>
            <h4>Problem Solving</h4>
          </div>
          <div class="skill-item fade-in-up">
            <div class="skill-icon">💬</div>
            <h4>Communications</h4>
          </div>
          <div class="skill-item fade-in-up">
            <div class="skill-icon">📝</div>
            <h4>Report Writing</h4>
          </div>
          <div class="skill-item fade-in-up">
            <div class="skill-icon">🎤</div>
            <h4>Public Speaking</h4>
          </div>
        </div>
      </div>
      
      <div class="volunteer-experience fade-in-up">
        <h3>Volunteer Experience</h3>
        <div class="volunteer-grid">
          <div class="volunteer-item fade-in-up">
            <div class="volunteer-icon">🎭</div>
            <div class="volunteer-content">
              <div class="volunteer-title">Pesparawi</div>
              <div class="volunteer-description">Cultural & Arts Festival</div>
              <div class="volunteer-year">2015</div>
            </div>
          </div>
          <div class="volunteer-item fade-in-up">
            <div class="volunteer-icon">📚</div>
            <div class="volunteer-content">
              <div class="volunteer-title">Asean Literary Festival</div>
              <div class="volunteer-description">Literature & Cultural Exchange</div>
              <div class="volunteer-year">2017</div>
            </div>
          </div>
          <div class="volunteer-item fade-in-up">
            <div class="volunteer-icon">🎨</div>
            <div class="volunteer-content">
              <div class="volunteer-title">COLORFUN</div>
              <div class="volunteer-description">Community Art Event</div>
              <div class="volunteer-year">2018</div>
            </div>
          </div>
          <div class="volunteer-item fade-in-up">
            <div class="volunteer-icon">⛪</div>
            <div class="volunteer-content">
              <div class="volunteer-title">Komisi Pemuda Remaja GKI Kwitang</div>
              <div class="volunteer-description">Youth & Community Leadership</div>
              <div class="volunteer-year">2017 - 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          position: 'Volunteer Engagement Executive',
          company: 'National Office Wahana Visi Indonesia',
          period: 'Jan 2023 - Present',
          description: 'Manage all aspects of volunteering initiatives, overseeing the process from promotion and engagement to recruitment and completion.',
          achievements: [
            'Maintain and update a comprehensive database of over 3000 volunteers, ensuring accurate records and effective communication',
            'Coordinate and manage over 60 volunteer programs and activities per year',
            'Engage with external partners (schools, universities, corporations, local and international donors) to develop and enhance volunteer programs',
            'Design and implement volunteer programs at field, national, and regional levels for maximizing community impact',
            'Develop content plans and production strategies to effectively promote volunteer opportunities and engage potential volunteers'
          ],
          skills: ['Volunteer Management', 'Stakeholder Engagement', 'Program Design', 'Content Strategy', 'Database Management']
        },
        {
          position: 'Monitoring & Evaluation Coordinator',
          company: 'SINERGI Phase II - Urban Jakarta Wahana Visi Indonesia',
          period: 'Sep 2021 - Dec 2022',
          description: 'Responsible for managing Disaster Preparedness projects funded by USAID within the scope of program monitoring and evaluation.',
          achievements: [
            'Report all necessary information to Manager level and work closely with them to achieve and maintain goals',
            'Responsible for recording and processing more than 10,000 beneficiary databases and reporting to Manager Level',
            'Conduct capacity assessments of existing monitoring and evaluation systems, explain indicators and monitoring strategies',
            'Facilitate increasing internal capacity and working partners as part of monitoring and evaluating program activities',
            'Engage with the youth in child-led research and advocacy across national and global levels'
          ],
          skills: ['Monitoring & Evaluation', 'Data Management', 'Capacity Building', 'Reporting', 'Youth Engagement']
        }
      ],
      certifications: [
        {
          name: 'Certified Volunteer Program Manager',
          issuer: 'Council for Certification in Volunteer Administration',
          year: '2023'
        },
        {
          name: 'Nonprofit Leadership Certificate',
          issuer: 'Stanford University',
          year: '2022'
        },
        {
          name: 'Community Engagement Specialist',
          issuer: 'International Association for Community Development',
          year: '2021'
        },
        {
          name: 'Project Management Professional (PMP)',
          issuer: 'Project Management Institute',
          year: '2021'
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience {
  background: linear-gradient(135deg, #f8fdff 0%, #ffffff 100%);
  position: relative;
}

.experience::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 25%, rgba(75, 196, 226, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(128, 217, 250, 0.05) 0%, transparent 50%);
  z-index: 0;
}

.experience .container {
  position: relative;
  z-index: 1;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #4bc4e2, #007cad);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
}

.timeline-marker {
  position: absolute;
  left: 18px;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4bc4e2, #007cad);
  border: 4px solid white;
  box-shadow: 0 0 0 4px rgba(75, 196, 226, 0.2);
}

.timeline-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.08),
    0 3px 12px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.15);
  border-left: 4px solid #4bc4e2;
  position: relative;
  transition: all 0.3s ease;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.01) 0%, rgba(128, 217, 250, 0.02) 100%);
  border-radius: 20px;
  z-index: -1;
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.12),
    0 5px 15px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.timeline-header h3 {
  color: #1a1a1a;
  font-size: 1.4rem;
  font-weight: 600;
}

.timeline-date {
  background: linear-gradient(135deg, #4bc4e2, #007cad);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.company {
  color: #2ab0d5;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievements {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.achievements li {
  color: #333;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4bc4e2;
  font-weight: bold;
}

.skills-used {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #e8f6fd;
  color: #2ab0d5;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.certifications {
  margin-top: 4rem;
  text-align: center;
}

.certifications h3 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.cert-item {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(75, 196, 226, 0.1);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(75, 196, 226, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.cert-item:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.12),
    0 5px 15px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  border-color: rgba(75, 196, 226, 0.2);
}

.cert-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cert-item h4 {
  color: #1a1a1a;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.cert-item p {
  color: #666;
  font-size: 0.9rem;
}

.skills-section {
  margin-top: 4rem;
  text-align: center;
}

.skills-section h3 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.skill-item {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem 1rem;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 3px 12px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.15);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.02) 0%, rgba(128, 217, 250, 0.02) 100%);
  z-index: -1;
}

.skill-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(75, 196, 226, 0.1), transparent);
  transition: left 0.6s ease;
}

.skill-item:hover::after {
  left: 100%;
}

.skill-item:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.12),
    0 5px 20px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  border-color: rgba(75, 196, 226, 0.25);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(75, 196, 226, 0.3));
}

.skill-item h4 {
  color: #1a1a1a;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
}

.volunteer-experience {
  margin-top: 4rem;
  text-align: center;
}

.volunteer-experience h3 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.volunteer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.volunteer-item {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 3px 12px rgba(75, 196, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(75, 196, 226, 0.15);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.volunteer-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(75, 196, 226, 0.02) 0%, rgba(128, 217, 250, 0.02) 100%);
  z-index: -1;
}

.volunteer-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(75, 196, 226, 0.1), transparent);
  transition: left 0.6s ease;
}

.volunteer-item:hover::after {
  left: 100%;
}

.volunteer-item:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.12),
    0 5px 20px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  border-color: rgba(75, 196, 226, 0.25);
}

.volunteer-icon {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(75, 196, 226, 0.3));
  flex-shrink: 0;
}

.volunteer-content {
  flex: 1;
}

.volunteer-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.3rem;
  line-height: 1.3;
}

.volunteer-description {
  font-size: 0.9rem;
  color: #2ab0d5;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.volunteer-year {
  font-size: 0.85rem;
  color: #666;
  background: rgba(75, 196, 226, 0.1);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  display: inline-block;
  font-weight: 500;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 60px;
  }
  
  .timeline-marker {
    left: 8px;
  }
  
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .timeline-content {
    padding: 1.5rem;
  }
  
  .cert-grid {
    grid-template-columns: 1fr;
  }
  
  .volunteer-grid {
    grid-template-columns: 1fr;
  }
  
  .volunteer-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>
