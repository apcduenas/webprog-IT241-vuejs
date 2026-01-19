<template>
  <div class="ghost-rider-body">
    <section class="hero-section text-center">
      <div class="hero-text">
        <span class="hero-subtitle">BORN FROM THE FLAMES // IT-241</span>
        <h1 class="main-name">ANTHONY<br><span class="flame-outline">DUENAS</span></h1>
        <div class="mt-4">
          <a href="#content" class="btn-hellfire">UNLEASH PROFILE</a>
        </div>
      </div>
    </section>

    <section id="content" class="content-grid">
      <div class="bento-item biography">
        <span class="hell-label">01 // The Origin</span>
        <h2>About Me</h2>
        <p>I am a second-year Information Technology student at Asia Pacific College, specializing in web technologies and forging new digital paths.</p>
      </div>

      <div class="bento-item degree">
        <span class="hell-label">02 // The Pact</span>
        <h2>Course</h2>
        <p>BS in Information Technology<br><strong>Asia Pacific College</strong></p>
      </div>

      <div class="bento-item goals">
        <span class="hell-label">03 // The Mission</span>
        <h2>Goals In Life</h2>
        <p>My goal is to conquer my studies and secure a future for my family through technical excellence.</p>
        <button class="btn-hellfire mt-2" @click="motivate">HEAR THE SPIRIT</button>
      </div>

      <div class="bento-item expert">
        <span class="hell-label">04 // Firepower</span>
        <h2>IT Experience</h2>
        <ul class="hell-list">
          <li>• HTML & CSS Mastery</li>
          <li>• JavaScript Sorcery</li>
          <li>• Modern Web Systems</li>
        </ul>
      </div>

      <div class="bento-item guestbook">
        <span class="hell-label">05 // The Ledger</span>
        <h2>Spirit Guestbook</h2>
        <form @submit.prevent="addEntry">
          <input type="text" v-model="visitorName" placeholder="Spirit Name" class="hell-input">
          <textarea v-model="visitorComment" placeholder="Leave your mark..." class="hell-input"></textarea>
          <button type="submit" class="btn-hellfire w-100">POST TO THE FLAMES</button>
        </form>
        
        <div class="comments-scroll mt-3">
          <p v-for="entry in guestbookEntries" :key="entry.name" class="hell-comment">
            🔥 <strong>{{ entry.name }}</strong>: {{ entry.comment }}
          </p>
        </div>
      </div>
    </section>

    <footer class="hell-footer">
      <p>© 2026 ANTHONY DUENAS | THE SPIRIT OF VENGEANCE</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile',
  data() {
    return {
      visitorName: '',
      visitorComment: '',
      guestbookEntries: []
    }
  },
  methods: {
    motivate() {
      alert("Look into my eyes! Your future is what you make of it.");
    },
    addEntry() {
      if(this.visitorName && this.visitorComment) {
        this.guestbookEntries.push({ name: this.visitorName, comment: this.visitorComment });
        this.visitorName = ''; this.visitorComment = '';
      }
    }
  }
}
</script>

<style scoped>
/* Core Ghost Rider Theme */
.ghost-rider-body {
  background-color: #050505;
  color: #ffffff;
  font-family: 'Oswald', sans-serif; /* Recommended: Import Oswald from Google Fonts */
  min-height: 100vh;
  padding-bottom: 50px;
  background-image: radial-gradient(circle at center, #1a0500 0%, #050505 100%);
}

/* Hero & Flaming Text */
.hero-section { padding: 120px 20px; }
.hero-subtitle { color: #ff4d00; font-size: 0.9rem; letter-spacing: 4px; text-shadow: 0 0 10px #ff0000; }
.main-name { font-size: 6rem; font-weight: 900; line-height: 0.9; margin-top: 20px; }
.flame-outline { 
  color: transparent; 
  -webkit-text-stroke: 1.5px #ff4d00;
  filter: drop-shadow(0 0 15px #ff4d00);
}

/* Hellfire Buttons & Inputs */
.btn-hellfire { 
  background: transparent;
  border: 2px solid #ff4d00;
  color: #ff4d00;
  padding: 12px 30px;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 77, 0, 0.2);
}
.btn-hellfire:hover { 
  background: #ff4d00; 
  color: #000; 
  box-shadow: 0 0 30px #ff4d00; 
}

.hell-input { 
  width: 100%; 
  background: #111; 
  border: 1px solid #330000; 
  color: #ff9900; 
  padding: 12px; 
  margin-bottom: 15px; 
  border-radius: 4px;
}

/* Bento Grid */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  padding: 0 40px;
  max-width: 1300px;
  margin: 0 auto;
}

.bento-item { 
  background: rgba(15, 15, 15, 0.8); 
  border-radius: 0px; /* Sharp edges for a tougher look */
  padding: 35px; 
  border-left: 5px solid #ff4d00;
  transition: transform 0.3s ease;
}
.bento-item:hover { transform: translateY(-5px); }

.hell-label { color: #ff0000; font-size: 0.75rem; font-weight: bold; letter-spacing: 1px; }
.hell-list { list-style: none; padding: 0; color: #cc6600; }
.hell-comment { border-bottom: 1px solid #220000; padding: 10px 0; font-style: italic; color: #ffaa80; }

.hell-footer { text-align: center; margin-top: 80px; color: #444; letter-spacing: 5px; font-size: 0.7rem; }
</style>