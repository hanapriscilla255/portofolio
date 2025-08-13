<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title fade-in-up">Let's Connect</h2>
      <p class="section-subtitle fade-in-up">
        Ready to create meaningful volunteer engagement programs together?
        I'd love to discuss how we can make a lasting impact in your community.
      </p>

      <div class="contact-content">
        <div class="contact-info fade-in-up">
          <div class="contact-card">
            <h3>Get In Touch</h3>
            <p>
              I'm always excited to connect with fellow changemakers, organizations looking to enhance their volunteer
              programs,
              and anyone passionate about community impact.
            </p>

            <div class="contact-methods">
              <div class="contact-method left-align">
                <div class="method-icon"><i class="bi bi-at"></i></div>
                <div class="method-info">
                  <h4>Email</h4>
                  <p>hanapriscilla255@gmail.com</p>
                </div>
              </div>
              <div class="contact-method left-align">
                <div class="method-icon"><i class="bi bi-phone"></i></div>
                <div class="method-info">
                  <h4>Phone / Whatsapp</h4>
                  <p>0813 1406 0586</p>
                </div>
              </div>
              <div class="contact-method left-align">
                <div class="method-icon"><i class="bi bi-house"></i></div>
                <div class="method-info">
                  <h4>Location</h4>
                  <p>Jl. Swadaya II, Sukamaju Baru, Kec. Tapos, Kota Depok, Jawa Barat 16455</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h4>Follow My Work</h4>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/hana-priscilla-849067172/" class="social-link">
                  <i class="bi bi-linkedin"></i> LinkedIn
                </a>
                <a href="https://www.instagram.com/hanapriscilla_?igsh=MWticnE3c2Z1ZGNudQ==" class="social-link">
                  <i class="bi bi-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form fade-in-up">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Enter your full name">
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required placeholder="your.email@example.com">
            </div>

            <div class="form-group">
              <label for="organization">Organization (Optional)</label>
              <input type="text" id="organization" v-model="form.organization"
                placeholder="Your organization or company">
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">Select a topic</option>
                <option value="collaboration">Partnership Opportunity</option>
                <option value="consultation">Volunteer Program Consultation</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="job">Job Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" required rows="5"
                placeholder="Tell me about your project, organization, or how I can help..."></textarea>
            </div>

            <button type="submit" class="btn submit-btn" :disabled="isSubmitting">
              <span v-if="!isSubmitting" class="btn-content">
                <i class="bi bi-envelope-arrow-up"></i>
                Open Email Client
              </span>
              <span v-else class="btn-content">
                <i class="bi bi-hourglass-split"></i>
                Opening...
              </span>
            </button>

            <p class="form-note">
              <i class="bi bi-info-circle"></i>
              This will open your default email client with the message pre-filled.
              I'll get back to you within 24 hours!
            </p>
          </form>
        </div>
      </div>

      <div class="availability-notice fade-in-up">
        <div class="notice-content">
          <h3>🚀 Currently Available</h3>
          <p>
            I'm actively seeking new opportunities to create impactful volunteer engagement programs.
            Whether you're a nonprofit, social enterprise, or corporation looking to enhance your community impact,
            let's explore how we can work together.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true

      try {
        // Validate form
        if (!this.validateForm()) {
          this.isSubmitting = false
          return
        }

        // Create mailto URL
        const subject = encodeURIComponent(`Portfolio Contact: ${this.form.subject}`)
        const body = encodeURIComponent(`
          Hi Hana,

          My name is ${this.form.name} and I'm reaching out regarding ${this.form.subject}.

          ${this.form.organization ? `Organization: ${this.form.organization}\n` : ''}
          Email: ${this.form.email}

          Message:
          ${this.form.message}

          ---
                  `.trim())

        const mailtoUrl = `mailto:hanapriscilla255@gmail.com?subject=${subject}&body=${body}`

        // Open email client
        window.location.href = mailtoUrl

        // Show success message after a brief delay
        setTimeout(() => {
          alert('✅ Your email client should have opened! If not, please contact me directly at hanapriscilla255@gmail.com')
          this.resetForm()
        }, 500)

      } catch (error) {
        console.error('Mailto failed:', error)
        alert('❌ Unable to open email client. Please contact me directly at hanapriscilla255@gmail.com')
      } finally {
        setTimeout(() => {
          this.isSubmitting = false
        }, 1000)
      }
    },

    validateForm() {
      if (!this.form.name.trim()) {
        alert('Please enter your name')
        return false
      }
      if (!this.form.email.trim() || !this.isValidEmail(this.form.email)) {
        alert('Please enter a valid email address')
        return false
      }
      if (!this.form.subject) {
        alert('Please select a subject')
        return false
      }
      if (!this.form.message.trim()) {
        alert('Please enter your message')
        return false
      }
      return true
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },

    resetForm() {
      this.form = {
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact {
  background: linear-gradient(135deg, #4bc4e2 0%, #2ab0d5 50%, #007cad 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(128, 217, 250, 0.1) 0%, transparent 60%);
  z-index: 0;
}

.contact::after {
  content: '';
  position: absolute;
  top: 10%;
  left: -10%;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
  z-index: 0;
}

.contact .container {
  position: relative;
  z-index: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.section-title,
.section-subtitle {
  color: white;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  max-width: 600px;
  margin: -2rem auto 4rem;
  opacity: 0.9;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 25px;
  z-index: -1;
}

.contact-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
}

.contact-card p {
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-methods {
  margin-bottom: 2.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  justify-content: flex-start;
  gap: 1.5rem;
}

.contact-method.left-align {
  text-align: left;
  justify-content: flex-start;
  gap: 1.5rem;
}

.contact-method.left-align .method-icon {
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
}

.contact-method.left-align .method-info {
  text-align: left;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.contact-method.left-align {
  text-align: left;
  justify-content: flex-start;
}

.contact-method.left-align .method-info {
  text-align: left;
  align-items: flex-start;
}

.method-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  width: 40px;
  text-align: center;
}

.method-info h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.method-info p {
  opacity: 0.8;
  margin: 0;
}

.social-links h4 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.contact-form {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 3rem;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 5px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 25px;
  z-index: -1;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #333;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4bc4e2;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #4bc4e2 0%, #007cad 100%);
  border: none;
  font-size: 1.1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(75, 196, 226, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  font-weight: 500;
}

.btn-content i {
  font-size: 1rem;
}

.form-note {
  color: #666;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.form-note i {
  color: #4bc4e2;
}

.availability-notice {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.notice-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.notice-content p {
  opacity: 0.9;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-card,
  .contact-form {
    padding: 2rem;
  }

  .social-icons {
    flex-direction: column;
  }

  .availability-notice {
    padding: 1.5rem;
  }
}
</style>
