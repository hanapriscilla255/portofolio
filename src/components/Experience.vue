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
          position: 'Senior Voluntree Engagement Executive',
          company: 'Voluntree Global',
          period: '2022 - Present',
          description: 'Leading volunteer engagement strategies across multiple programs, managing a portfolio of 15+ community partnerships and overseeing volunteer lifecycle management.',
          achievements: [
            'Increased volunteer retention rate by 45% through innovative engagement programs',
            'Launched "Impact Connect" program, engaging 200+ new volunteers in 6 months',
            'Developed volunteer matching algorithm improving placement success by 60%',
            'Managed annual volunteer appreciation event for 500+ attendees'
          ],
          skills: ['Program Management', 'Data Analysis', 'Community Outreach', 'Event Planning']
        },
        {
          position: 'Volunteer Coordination Specialist',
          company: 'Community Impact Hub',
          period: '2021 - 2022',
          description: 'Coordinated volunteer activities for environmental and social justice initiatives, focusing on youth engagement and skill-based volunteering.',
          achievements: [
            'Coordinated 25+ community clean-up events with 1,000+ participants',
            'Established university partnership program engaging 150+ student volunteers',
            'Created volunteer onboarding system reducing drop-out rate by 30%',
            'Led cross-functional team of 8 coordinators across different programs'
          ],
          skills: ['Project Coordination', 'Youth Engagement', 'Partnership Development', 'Training Design']
        },
        {
          position: 'Community Outreach Assistant',
          company: 'Local Heroes Foundation',
          period: '2020 - 2021',
          description: 'Supported community outreach initiatives and volunteer recruitment for local nonprofit organizations serving underserved communities.',
          achievements: [
            'Recruited and onboarded 100+ volunteers through innovative outreach campaigns',
            'Organized monthly volunteer training workshops with 95% satisfaction rate',
            'Developed social media strategy increasing volunteer applications by 80%',
            'Created volunteer resource toolkit adopted by 5+ partner organizations'
          ],
          skills: ['Social Media Marketing', 'Volunteer Recruitment', 'Workshop Facilitation', 'Content Creation']
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
}
</style>
