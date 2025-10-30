<template>
  <section  class="section projects">
    <div class="container">
      <h2 class="section-title fade-in-up">International Conference & Project Experience</h2>
      <p class="section-subtitle fade-in-up">
        Global conferences and significant projects that demonstrate my commitment to international collaboration and
        community development
      </p>

      <div class="projects-grid">
        <div class="project-card fade-in-up" v-for="(project, index) in projects" :key="index">
          <div class="project-image">
            <div class="project-placeholder" :style="{ background: project.color }">
              <span class="project-icon">{{ project.icon }}</span>
            </div>
            <div class="project-overlay">
              <div class="project-links">
                <a href="#" class="project-link" @click.prevent="openModal(project)">View Details</a>
                <a href="#" class="project-link">Case Study</a>
              </div>
            </div>
          </div>

          <div class="project-content">
            <div class="project-meta">
              <span class="project-category">{{ project.category }}</span>
              <span class="project-date">{{ project.date }}</span>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-impact">
              <div class="impact-item" v-for="impact in project.impact" :key="impact.label">
                <strong>{{ impact.value }}</strong>
                <span>{{ impact.label }}</span>
              </div>
            </div>

            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <div class="modal-title-section">
            <div class="modal-project-icon" :style="{ background: selectedProject.color }">
              <span>{{ selectedProject.icon }}</span>
            </div>
            <div>
              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              <div class="modal-meta">
                <span class="modal-category">{{ selectedProject.category }}</span>
                <span class="modal-date">{{ selectedProject.date }}</span>
              </div>
            </div>
          </div>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>

        <div class="modal-body">
          <div class="modal-content-grid">
            <div class="modal-main">
              <div class="modal-section">
                <h3>Project Overview</h3>
                <p class="modal-description">{{ selectedProject.description }}</p>
              </div>

              <div class="modal-section">
                <h3>Key Achievements</h3>
                <div class="modal-achievements">
                  <div class="achievement-item" v-for="achievement in getProjectAchievements(selectedProject)"
                    :key="achievement">
                    <div class="achievement-icon">✓</div>
                    <span>{{ achievement }}</span>
                  </div>
                </div>
              </div>

              <div class="modal-section">
                <h3>Activity Gallery</h3>
                <div class="modal-gallery">
                  <div class="gallery-grid">
                    <div class="gallery-item" v-for="(photo, index) in getProjectPhotos(selectedProject)" :key="index"
                      @click="openPhotoModal(photo, index)">
                      <div class="photo-placeholder" :style="{ background: photo.gradient }">
                        <div class="photo-icon">{{ photo.icon }}</div>
                      </div>
                      <div class="photo-overlay">
                        <span class="photo-title">{{ photo.title }}</span>
                        <span class="photo-date">{{ photo.date }}</span>
                      </div>
                    </div>
                  </div>
                  <p class="gallery-note">Click on any image to view details</p>
                </div>
              </div>

              <div class="modal-section">
                <h3>Project Timeline</h3>
                <div class="modal-timeline">
                  <div class="timeline-item" v-for="phase in getProjectTimeline(selectedProject)" :key="phase.phase">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>{{ phase.phase }}</h4>
                      <p>{{ phase.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-section">
                <h3>Technologies & Methods</h3>
                <div class="modal-tags">
                  <span v-for="tag in selectedProject.tags" :key="tag" class="modal-tag">{{ tag }}</span>
                </div>
              </div>
            </div>

            <div class="modal-sidebar">
              <div class="modal-impact-card">
                <h3>Project Impact</h3>
                <div class="modal-impact-stats">
                  <div class="impact-stat" v-for="impact in selectedProject.impact" :key="impact.label">
                    <div class="impact-value">{{ impact.value }}</div>
                    <div class="impact-label">{{ impact.label }}</div>
                  </div>
                </div>
              </div>

              <div class="modal-info-card">
                <h3>Project Details</h3>
                <div class="info-item">
                  <strong>Duration:</strong>
                  <span>{{ getProjectDuration(selectedProject) }}</span>
                </div>
                <div class="info-item">
                  <strong>Team Size:</strong>
                  <span>{{ getTeamSize(selectedProject) }}</span>
                </div>
                <div class="info-item">
                  <strong>Budget:</strong>
                  <span>{{ getProjectBudget(selectedProject) }}</span>
                </div>
                <div class="info-item">
                  <strong>Status:</strong>
                  <span class="status-active">Completed</span>
                </div>
              </div>

              <div class="modal-action-card">
                <h3>Interested?</h3>
                <p>Want to know more about this project or discuss similar initiatives?</p>
                <a href="#contact" class="btn btn-small" @click="closeModal">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Photo Modal -->
    <div v-if="selectedPhoto" class="photo-modal-overlay" @click="closePhotoModal">
      <div class="photo-modal" @click.stop>
        <div class="photo-modal-header">
          <h3>{{ selectedPhoto.title }}</h3>
          <button class="photo-modal-close" @click="closePhotoModal">&times;</button>
        </div>
        <div class="photo-modal-content">
          <div class="photo-modal-image">
            <div class="photo-large-placeholder" :style="{ background: selectedPhoto.gradient }">
              <div class="photo-large-icon">{{ selectedPhoto.icon }}</div>
            </div>
          </div>
          <div class="photo-modal-info">
            <div class="photo-meta">
              <span class="photo-date">{{ selectedPhoto.date }}</span>
              <span class="photo-location">{{ selectedPhoto.location }}</span>
            </div>
            <p class="photo-description">{{ selectedPhoto.description }}</p>
            <div class="photo-stats" v-if="selectedPhoto.stats">
              <div class="photo-stat" v-for="stat in selectedPhoto.stats" :key="stat.label">
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="photo-navigation">
          <button class="nav-btn prev" @click="prevPhoto" :disabled="currentPhotoIndex === 0">
            ← Previous
          </button>
          <span class="photo-counter">
            {{ currentPhotoIndex + 1 }} / {{ getCurrentProjectPhotos().length }}
          </span>
          <button class="nav-btn next" @click="nextPhoto"
            :disabled="currentPhotoIndex === getCurrentProjectPhotos().length - 1">
            Next →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      selectedProject: null,
      selectedPhoto: null,
      currentPhotoIndex: 0,
      projects: [
        {
          title: 'Global Platform for Disaster Risk Reduction (GPDRR)',
          category: 'International Conference',
          date: '2022',
          description: 'Participated in the prestigious Global Platform for Disaster Risk Reduction conference in Bali, contributing to international discussions on disaster risk management and community resilience strategies.',
          impact: [
            { value: '500+', label: 'Global Participants' },
            { value: '50+', label: 'Countries Represented' },
            { value: '3 Days', label: 'Conference Duration' }
          ],
          tags: ['Disaster Risk Management', 'International Relations', 'Community Resilience', 'Policy Development'],
          icon: '🌍',
          color: 'linear-gradient(135deg, #4bc4e2 0%, #007cad 100%)'
        },
        {
          title: 'Youth for Education in Emergency Training',
          category: 'Emergency Education',
          date: '2022',
          description: 'Comprehensive training program in Yogyakarta focused on education delivery during emergency situations, developing skills to maintain learning continuity in crisis scenarios.',
          impact: [
            { value: '40+', label: 'Training Hours' },
            { value: '25+', label: 'Participants' },
            { value: '95%', label: 'Completion Rate' }
          ],
          tags: ['Emergency Education', 'Crisis Management', 'Youth Development', 'Capacity Building'],
          icon: '�',
          color: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)'
        },
        {
          title: 'Rebranding WVI Volunteer Program',
          category: 'Strategic Development',
          date: '2023',
          description: 'Led the comprehensive rebranding initiative for Wahana Visi Indonesia volunteer program, developing new visual identity, messaging strategy, and engagement framework.',
          impact: [
            { value: '100%', label: 'Brand Refresh' },
            { value: '6 Months', label: 'Project Duration' },
            { value: '3,000+', label: 'Volunteers Impacted' }
          ],
          tags: ['Brand Strategy', 'Visual Identity', 'Program Development', 'Stakeholder Engagement'],
          icon: '�',
          color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          title: 'Hyundai JUMP School Indonesia',
          category: 'Educational Partnership',
          date: '2024 - Present',
          description: 'Ongoing educational partnership project between Hyundai and Indonesian communities, focusing on skills development and educational access in Jakarta and Bogor regions.',
          impact: [
            { value: '2+', label: 'Cities Covered' },
            { value: '200+', label: 'Students Reached' },
            { value: '12+', label: 'Months Active' }
          ],
          tags: ['Corporate Partnership', 'Education Access', 'Skills Development', 'Community Impact'],
          icon: '🚀',
          color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
        },
        {
          title: 'Buku Cerita Anak Papua',
          category: 'Cultural Project',
          date: '2024',
          description: 'Children book project focusing on Papuan culture and stories, bridging cultural understanding between Jakarta and Papua through literature and storytelling.',
          impact: [
            { value: '2', label: 'Regions Connected' },
            { value: '1,000+', label: 'Books Distributed' },
            { value: '50+', label: 'Schools Reached' }
          ],
          tags: ['Cultural Preservation', 'Literature', 'Children Development', 'Cross-Regional Collaboration'],
          icon: '📖',
          color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
      ]
    }
  },
  methods: {
    openModal(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    
    closeModal() {
      this.selectedProject = null
      document.body.style.overflow = 'auto'
    },
    
    openPhotoModal(photo, index) {
      this.selectedPhoto = photo
      this.currentPhotoIndex = index
      document.body.style.overflow = 'hidden'
    },
    
    closePhotoModal() {
      this.selectedPhoto = null
      this.currentPhotoIndex = 0
      document.body.style.overflow = 'auto'
    },
    
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--
        this.selectedPhoto = this.getCurrentProjectPhotos()[this.currentPhotoIndex]
      }
    },
    
    nextPhoto() {
      const photos = this.getCurrentProjectPhotos()
      if (this.currentPhotoIndex < photos.length - 1) {
        this.currentPhotoIndex++
        this.selectedPhoto = photos[this.currentPhotoIndex]
      }
    },
    
    getCurrentProjectPhotos() {
      return this.selectedProject ? this.getProjectPhotos(this.selectedProject) : []
    },
    
    getProjectPhotos(project) {
      const photos = {
        'Global Platform for Disaster Risk Reduction (GPDRR)': [
          {
            title: 'Conference Opening Ceremony',
            date: 'May 2022',
            location: 'Bali International Convention Centre',
            description: 'Opening ceremony of the Global Platform for Disaster Risk Reduction with international delegates and key speakers.',
            gradient: 'linear-gradient(135deg, #4bc4e2 0%, #007cad 100%)',
            icon: '🌍',
            stats: [
              { value: '500+', label: 'Delegates' },
              { value: '50+', label: 'Countries' }
            ]
          },
          {
            title: 'Panel Discussion Session',
            date: 'May 2022',
            location: 'Main Conference Hall',
            description: 'Participating in high-level panel discussions on disaster risk reduction strategies and community resilience.',
            gradient: 'linear-gradient(135deg, #2ab0d5 0%, #1a8cbc 100%)',
            icon: '🎯',
            stats: [
              { value: '8', label: 'Panel Sessions' },
              { value: '150', label: 'Participants' }
            ]
          },
          {
            title: 'Networking Reception',
            date: 'May 2022',
            location: 'Bali Conference Center',
            description: 'International networking session connecting disaster risk reduction practitioners and policymakers.',
            gradient: 'linear-gradient(135deg, #80d9fa 0%, #4bc4e2 100%)',
            icon: '🤝',
            stats: [
              { value: '300+', label: 'Connections' },
              { value: '3 Days', label: 'Event Duration' }
            ]
          }
        ],
        'Youth for Education in Emergency Training': [
          {
            title: 'Emergency Education Workshop',
            date: 'August 2022',
            location: 'Training Center Yogyakarta',
            description: 'Intensive training on maintaining education continuity during emergency situations.',
            gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
            icon: '�',
            stats: [
              { value: '40', label: 'Training Hours' },
              { value: '25', label: 'Participants' }
            ]
          },
          {
            title: 'Crisis Simulation Exercise',
            date: 'August 2022',
            location: 'Yogyakarta Training Facility',
            description: 'Practical simulation exercises for emergency education response scenarios.',
            gradient: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)',
            icon: '🚨',
            stats: [
              { value: '5', label: 'Scenarios' },
              { value: '95%', label: 'Success Rate' }
            ]
          }
        ],
        'Rebranding WVI Volunteer Program': [
          {
            title: 'Brand Strategy Workshop',
            date: 'March 2023',
            location: 'WVI National Office Jakarta',
            description: 'Strategic workshop developing new brand identity and messaging for the volunteer program.',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            icon: '🎨',
            stats: [
              { value: '6', label: 'Months Project' },
              { value: '3,000+', label: 'Volunteers' }
            ]
          },
          {
            title: 'Brand Launch Event',
            date: 'September 2023',
            location: 'Jakarta Convention Center',
            description: 'Official launch of the rebranded volunteer program with stakeholders and volunteers.',
            gradient: 'linear-gradient(135deg, #ff85a2 0%, #f093fb 100%)',
            icon: '🚀',
            stats: [
              { value: '200', label: 'Launch Attendees' },
              { value: '100%', label: 'Brand Refresh' }
            ]
          }
        ],
        'Hyundai JUMP School Indonesia': [
          {
            title: 'Partnership Signing Ceremony',
            date: 'January 2024',
            location: 'Hyundai Office Jakarta',
            description: 'Official partnership agreement signing between Hyundai and educational institutions.',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            icon: '🤝',
            stats: [
              { value: '2', label: 'Cities' },
              { value: '12+', label: 'Months Active' }
            ]
          },
          {
            title: 'Student Skills Workshop',
            date: 'March 2024',
            location: 'Various Schools Jakarta & Bogor',
            description: 'Skills development workshops conducted across schools in Jakarta and Bogor regions.',
            gradient: 'linear-gradient(135deg, #ffa940 0%, #ff7a45 100%)',
            icon: '⚙️',
            stats: [
              { value: '200+', label: 'Students' },
              { value: '15', label: 'Schools' }
            ]
          }
        ],
        'Buku Cerita Anak Papua': [
          {
            title: 'Story Collection Workshop',
            date: 'June 2024',
            location: 'Papua Cultural Center',
            description: 'Cultural workshop collecting traditional Papuan stories for children book publication.',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            icon: '�',
            stats: [
              { value: '20', label: 'Stories Collected' },
              { value: '50', label: 'Cultural Elders' }
            ]
          },
          {
            title: 'Book Launch & Distribution',
            date: 'October 2024',
            location: 'Jakarta & Papua Schools',
            description: 'Official book launch and distribution to schools across Jakarta and Papua regions.',
            gradient: 'linear-gradient(135deg, #fed6e3 0%, #d6e7ff 100%)',
            icon: '🎉',
            stats: [
              { value: '1,000+', label: 'Books' },
              { value: '50+', label: 'Schools' }
            ]
          }
        ]
      }
      return photos[project.title] || []
    },
    
    getProjectAchievements(project) {
      const achievements = {
        'Global Platform for Disaster Risk Reduction (GPDRR)': [
          'Participated in high-level international discussions',
          'Networked with 500+ global disaster risk professionals',
          'Contributed to policy development frameworks',
          'Gained expertise in international disaster management',
          'Established connections across 50+ countries'
        ],
        'Youth for Education in Emergency Training': [
          'Completed 40+ hours of intensive emergency education training',
          'Achieved 95% training completion rate',
          'Developed crisis response skills for educational settings',
          'Created emergency education protocols',
          'Trained alongside 25+ professionals from across Indonesia'
        ],
        'Rebranding WVI Volunteer Program': [
          'Led comprehensive brand strategy development',
          'Created new visual identity and messaging framework',
          'Impacted 3,000+ volunteers with new brand experience',
          'Developed stakeholder engagement strategy',
          'Successfully launched rebranded program within 6 months'
        ],
        'Hyundai JUMP School Indonesia': [
          'Established educational partnerships across 2 major cities',
          'Reached 200+ students with skills development programs',
          'Developed sustainable corporate-education collaboration model',
          'Created scalable program framework for expansion',
          'Maintained active program for 12+ months'
        ],
        'Buku Cerita Anak Papua': [
          'Collected and preserved 20+ traditional Papuan stories',
          'Distributed 1,000+ books across Jakarta and Papua',
          'Reached 50+ schools with cultural education materials',
          'Created bridge between Jakarta and Papua communities',
          'Promoted cultural understanding through children literature'
        ]
      }
      return achievements[project.title] || []
    },
    
    getProjectTimeline(project) {
      const timelines = {
        'Global Platform for Disaster Risk Reduction (GPDRR)': [
          { phase: 'Pre-Conference Preparation', description: 'Research and preparation for international participation' },
          { phase: 'Conference Participation', description: 'Active participation in panels and networking sessions' },
          { phase: 'Knowledge Integration', description: 'Applying learnings to local disaster risk reduction initiatives' },
          { phase: 'Follow-up Collaboration', description: 'Maintaining international connections and partnerships' }
        ],
        'Youth for Education in Emergency Training': [
          { phase: 'Training Registration', description: 'Application and selection for emergency education program' },
          { phase: 'Intensive Training', description: '40+ hours of comprehensive emergency education training' },
          { phase: 'Practical Application', description: 'Simulation exercises and real-world scenario practice' },
          { phase: 'Certification & Implementation', description: 'Program completion and skill application' }
        ],
        'Rebranding WVI Volunteer Program': [
          { phase: 'Brand Assessment', description: 'Analysis of current brand positioning and challenges' },
          { phase: 'Strategy Development', description: 'Creating new brand identity and messaging framework' },
          { phase: 'Design & Implementation', description: 'Visual identity creation and rollout planning' },
          { phase: 'Launch & Monitoring', description: 'Brand launch and impact assessment' }
        ],
        'Hyundai JUMP School Indonesia': [
          { phase: 'Partnership Development', description: 'Establishing collaboration framework with Hyundai' },
          { phase: 'Program Design', description: 'Creating educational curriculum and delivery methods' },
          { phase: 'Implementation', description: 'Rolling out programs across Jakarta and Bogor' },
          { phase: 'Evaluation & Expansion', description: 'Assessing impact and planning for scale-up' }
        ],
        'Buku Cerita Anak Papua': [
          { phase: 'Cultural Research', description: 'Collecting traditional Papuan stories and cultural elements' },
          { phase: 'Content Development', description: 'Writing and illustrating children-friendly story books' },
          { phase: 'Production & Publishing', description: 'Book production and quality assurance' },
          { phase: 'Distribution & Impact', description: 'School distribution and community engagement' }
        ]
      }
      return timelines[project.title] || [
        { phase: 'Planning', description: 'Project initiation and planning' },
        { phase: 'Implementation', description: 'Executing project activities' },
        { phase: 'Evaluation', description: 'Assessing project outcomes' }
      ]
    },
    
    getProjectDuration(project) {
      const durations = {
        'Global Platform for Disaster Risk Reduction (GPDRR)': '3 days + follow-up',
        'Youth for Education in Emergency Training': '2 weeks intensive',
        'Rebranding WVI Volunteer Program': '6 months',
        'Hyundai JUMP School Indonesia': '12+ months (ongoing)',
        'Buku Cerita Anak Papua': '8 months'
      }
      return durations[project.title] || '6 months'
    },
    
    getTeamSize(project) {
      const teamSizes = {
        'Global Platform for Disaster Risk Reduction (GPDRR)': 'Individual participation',
        'Youth for Education in Emergency Training': '25 participants',
        'Rebranding WVI Volunteer Program': '8-12 team members',
        'Hyundai JUMP School Indonesia': '15-20 staff across regions',
        'Buku Cerita Anak Papua': '10-15 collaborators'
      }
      return teamSizes[project.title] || '5-10 members'
    },
    
    getProjectBudget(project) {
      const budgets = {
        'Global Platform for Disaster Risk Reduction (GPDRR)': 'Conference participation',
        'Youth for Education in Emergency Training': 'Training program',
        'Rebranding WVI Volunteer Program': '$25,000',
        'Hyundai JUMP School Indonesia': '$45,000+',
        'Buku Cerita Anak Papua': '$15,000'
      }
      return budgets[project.title] || '$20,000+'
    }
  },
  
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.projects {
  background: linear-gradient(135deg, #e8f6fd 0%, #f8fdff 50%, #ffffff 100%);
  position: relative;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(42, 176, 213, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(75, 196, 226, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 50% 20%, rgba(128, 217, 250, 0.04) 0%, transparent 30%);
  z-index: 0;
}

.projects .container {
  position: relative;
  z-index: 1;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: -2rem auto 4rem;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 8px rgba(75, 196, 226, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.4s ease;
  border: 1px solid rgba(75, 196, 226, 0.1);
}

.project-card:hover {
  transform: translateY(-15px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 5px 20px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border-color: rgba(75, 196, 226, 0.2);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-icon {
  font-size: 3rem;
  opacity: 0.9;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  background: white;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.2s ease;
}

.project-link:hover {
  transform: scale(1.05);
}

.project-content {
  padding: 2rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-category {
  background: #1800ad;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-date {
  color: #888;
  font-size: 0.9rem;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.project-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-impact {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  background: linear-gradient(135deg, #f8fdff 0%, #e8f6fd 100%);
  border-radius: 15px;
  border: 1px solid rgba(75, 196, 226, 0.1);
  box-shadow: inset 0 1px 3px rgba(75, 196, 226, 0.1);
}

.impact-item {
  text-align: center;
}

.impact-item strong {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1800ad;
}

.impact-item span {
  font-size: 0.8rem;
  color: #666;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #e8f6fd;
  color: #1800ad;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.projects-cta {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.projects-cta h3 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.projects-cta p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .project-impact {
    flex-direction: column;
    gap: 1rem;
  }
  
  .projects-cta {
    padding: 2rem;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: modalFadeIn 0.3s ease;
}

.modal-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 5px 20px rgba(75, 196, 226, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: modalSlideUp 0.4s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem 1rem;
  border-bottom: 1px solid rgba(75, 196, 226, 0.1);
}

.modal-title-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.modal-project-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.modal-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.modal-category {
  background: #1800ad;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.modal-date {
  color: #666;
  font-size: 0.9rem;
}

.modal-close {
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(75, 196, 226, 0.1);
  color: #1800ad;
}

.modal-body {
  padding: 0 2.5rem 2.5rem;
}

.modal-content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.modal-section {
  margin-bottom: 2.5rem;
}

.modal-section h3 {
  font-size: 1.3rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4bc4e2;
}

.modal-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

.modal-achievements {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background: rgba(75, 196, 226, 0.05);
  border-radius: 10px;
  border-left: 3px solid #4bc4e2;
}

.achievement-icon {
  background: #4bc4e2;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  flex-shrink: 0;
}

.modal-timeline {
  position: relative;
}

.modal-timeline::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #4bc4e2;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: #4bc4e2;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #4bc4e2;
  flex-shrink: 0;
}

.timeline-content h4 {
  color: #1a1a1a;
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.timeline-content p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-tag {
  background: #e8f6fd;
  color: #1800ad;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.modal-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-impact-card,
.modal-info-card,
.modal-action-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(75, 196, 226, 0.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.modal-impact-card h3,
.modal-info-card h3,
.modal-action-card h3 {
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.modal-impact-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.impact-stat {
  text-align: center;
  padding: 1rem;
  background: linear-gradient(135deg, #f8fdff 0%, #e8f6fd 100%);
  border-radius: 15px;
}

.impact-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1800ad;
  margin-bottom: 0.3rem;
}

.impact-label {
  font-size: 0.8rem;
  color: #666;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(75, 196, 226, 0.1);
}

.info-item:last-child {
  border-bottom: none;
}

.info-item strong {
  color: #1a1a1a;
  font-size: 0.9rem;
}

.info-item span {
  color: #666;
  font-size: 0.9rem;
}

.status-active {
  color: #4bc4e2 !important;
  font-weight: 500 !important;
}

.modal-action-card p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.btn-small {
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Gallery Styles */
.modal-gallery {
  margin-top: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  aspect-ratio: 4/3;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
}

.photo-icon {
  font-size: 2rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .photo-overlay {
  transform: translateY(0);
}

.photo-title {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.photo-date {
  font-size: 0.8rem;
  opacity: 0.9;
}

.gallery-note {
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 1rem;
}

/* Photo Modal Styles */
.photo-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: modalFadeIn 0.3s ease;
}

.photo-modal {
  background: white;
  border-radius: 20px;
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideUp 0.3s ease;
}

.photo-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  color: white;
}

.photo-modal-header h3 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.photo-modal-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.photo-modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.photo-modal-content {
  display: flex;
  flex: 1;
  min-height: 400px;
}

.photo-modal-image {
  flex: 1;
  min-height: 400px;
  position: relative;
}

.photo-large-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
}

.photo-large-icon {
  font-size: 4rem;
  color: white;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.photo-modal-info {
  width: 300px;
  padding: 2rem;
  background: rgba(248, 253, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
}

.photo-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(75, 196, 226, 0.2);
}

.photo-modal-info .photo-date {
  color: #1800ad;
  font-weight: 600;
  font-size: 0.9rem;
}

.photo-location {
  color: #666;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.photo-location::before {
  content: '📍';
}

.photo-description {
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.photo-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: auto;
}

.photo-stat {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(75, 196, 226, 0.1);
}

.photo-stat strong {
  display: block;
  font-size: 1.2rem;
  color: #1800ad;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.photo-stat span {
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.photo-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: rgba(248, 253, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(75, 196, 226, 0.1);
}

.nav-btn {
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.nav-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(75, 196, 226, 0.4);
}

.nav-btn:disabled {
  background: #e0e0e0;
  color: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.photo-counter {
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;
}

.btn.btn-small {
  padding: 0.6rem 1.2rem;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }
  
  .modal-container {
    border-radius: 20px;
    max-height: 95vh;
  }
  
  .modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }
  
  .modal-title-section {
    gap: 1rem;
  }
  
  .modal-project-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .modal-title {
    font-size: 1.4rem;
  }
  
  .modal-body {
    padding: 0 1.5rem 1.5rem;
  }
  
  .modal-content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .modal-impact-stats {
    grid-template-columns: 1fr;
  }
  
  .achievement-item {
    padding: 0.6rem 0.8rem;
  }
  
  /* Gallery Mobile Styles */
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.75rem;
  }
  
  .photo-modal {
    width: 95vw;
    height: 95vh;
  }
  
  .photo-modal-content {
    flex-direction: column;
  }
  
  .photo-modal-image {
    min-height: 250px;
  }
  
  .photo-modal-info {
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    padding: 1.5rem;
  }
  
  .photo-stats {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
  
  .photo-navigation {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem;
  }
  
  .nav-btn {
    width: 120px;
  }
  
  .photo-modal-header {
    padding: 1rem;
  }
  
  .photo-modal-header h3 {
    font-size: 1.1rem;
  }
}
</style>
