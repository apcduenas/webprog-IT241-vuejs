<template>
  <div class="profile-body">
    <section class="hero-section text-center">
      <div class="hero-text">
        <span class="hero-subtitle">WELCOME TO MY PERSONAL WEBSITE // INFORMATION TECHNOLOGY</span>
        <h1 class="main-name">ANTHONY<br><span class="outline">DUENAS</span></h1>
        <div class="mt-4">
          <a href="#content" class="btn-custom">EXPLORE PROFILE</a>
        </div>
      </div>
    </section>

    <section id="content" class="content-grid">
      <div class="bento-item about">
        <span class="label">01 // Biography</span>
        <h2>About Me</h2>
        <p>I am a second-year Information Technology student at Asia Pacific College. I am interested in web development and continuously improving my technical skills.</p>
      </div>

      <div class="bento-item degree">
        <span class="label">02 // Degree</span>
        <h2>Course</h2>
        <p>BS in Information Technology<br><strong>Asia Pacific College</strong></p>
      </div>

      <div class="bento-item goals">
        <span class="label">03 // Vision</span>
        <h2>Goals In Life & Dreams</h2>
        <p>My goal is to finish my studies and reach my dreams so I can repay my parents for their sacrifices.</p>
        <button class="btn-custom mt-2" @click="motivate">Click for Motivation</button>
      </div>

      <div class="bento-item academic">
        <span class="label">04 // Academic</span>
        <h2>Education & Achievements</h2>
        <ul class="list-unstyled">
          <li>• Asia Pacific College (Current)</li>
          <li>• 2nd Year, BSIT Student</li>
          <li>• Specialized in Web Programming</li>
        </ul>
      </div>

      <div class="bento-item expertise">
        <span class="label">05 // Expertise</span>
        <h2>IT Experience</h2>
        <ul class="list-unstyled">
          <li>• Basic HTML & CSS</li>
          <li>• Learning JavaScript</li>
          <li>• Modern Web Technologies</li>
        </ul>
      </div>

      <div class="bento-item hobbies">
        <span class="label">06 // Interests</span>
        <h2>Hobbies</h2>
        <ul class="list-unstyled">
          <li>• Playing basketball</li>
          <li>• Listening to music</li>
        </ul>
      </div>

      <div class="bento-item gallery">
        <span class="label">07 // Media</span>
        <h2>Picture Gallery</h2>
        <div class="gallery-mini-grid">
          <div class="thumb" v-for="(img, idx) in images" :key="idx">
            <img :src="img.src" :alt="img.alt" @click="open(idx)" class="img-fluid rounded">
          </div>
        </div>
      </div>

      <div class="bento-item guestbook">
        <span class="label">08 // Interaction</span>
        <h2>Visitor Guestbook</h2>
        <form @submit.prevent="addEntry">
          <input type="text" v-model="visitorName" placeholder="Your Name" class="form-input">
          <textarea v-model="visitorComment" placeholder="Leave a comment" class="form-input"></textarea>
          <button type="submit" class="btn-custom">Post Comment</button>
        </form>
        
        <div class="comments-scroll">
          <p v-for="entry in guestbookEntries" :key="entry.name" @click="entry.liked = !entry.liked">
            <span v-if="entry.liked">❤️</span> {{ entry.name }}: "{{ entry.comment }}"
          </p>
        </div>
      </div>
    </section>

    <div class="modal-overlay" v-if="selected !== null" @click.self="close">
      <div class="modal-content">
        <img :src="images[selected].src" class="img-large">
        <button class="close-btn" @click="close">✕</button>
      </div>
    </div>

    <footer class="text-center mt-5">
      <p>© 2026 ANTHONY DUENAS | Asia Pacific College</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile',
  data() {
    return {
      selected: null,
      visitorName: '',
      visitorComment: '',
      images: [
        { src: 'https://via.placeholder.com/150', alt: 'Profile 1' },
        { src: 'https://via.placeholder.com/150', alt: 'Profile 2' }
      ],
      guestbookEntries: []
    }
  },
  methods: {
    motivate() {
      alert("Keep pushing! Success is a journey, not a destination.");
    },
    open(idx) { this.selected = idx; },
    close() { this.selected = null; },
    addEntry() {
      if(this.visitorName && this.visitorComment) {
        this.guestbookEntries.push({
          name: this.visitorName,
          comment: this.visitorComment,
          liked: false
        });
        this.visitorName = '';
        this.visitorComment = '';
      }
    }
  }
}
</script>

<style scoped>
/* Main Background */
.profile-body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding-bottom: 50px;
}

/* Hero Section */
.hero-section { padding: 100px 20px; }
.hero-subtitle { color: #00e5ff; font-size: 0.8rem; letter-spacing: 2px; font-weight: bold; }
.main-name { font-size: 5rem; font-weight: 900; line-height: 1; margin-top: 20px; }
.outline { color: transparent; -webkit-text-stroke: 1px #00e5ff; }

/* Buttons & Inputs */
.btn-custom { border: 1px solid #00e5ff; color: #00e5ff; padding: 10px 25px; text-decoration: none; font-size: 0.7rem; transition: 0.3s; background: transparent; cursor: pointer; }
.btn-custom:hover { background: #00e5ff; color: black; }
.form-input { width: 100%; background: #222; border: 1px solid #333; color: white; padding: 10px; margin-bottom: 10px; border-radius: 5px; }

/* Bento Grid */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.bento-item { background: #111111; border-radius: 10px; padding: 30px; border: 1px solid #222; }
.label { color: #00e5ff; font-size: 0.7rem; font-weight: bold; display: block; margin-bottom: 10px; }
.list-unstyled { list-style: none; padding: 0; }
h2 { font-weight: 800; margin-bottom: 15px; color: #fff; }
p, li { color: #cccccc; font-size: 0.9rem; line-height: 1.6; }

/* Gallery & Modal */
.gallery-mini-grid { display: flex; gap: 10px; }
.thumb img { width: 80px; height: 80px; object-fit: cover; cursor: pointer; }
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.img-large { max-width: 80%; max-height: 80%; }
.close-btn { position: absolute; top: 20px; right: 20px; font-size: 2rem; color: white; background: none; border: none; cursor: pointer; }
</style>