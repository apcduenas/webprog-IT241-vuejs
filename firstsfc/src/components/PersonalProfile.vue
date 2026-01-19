<template>
  <div class="ghost-rider-body">
    <nav>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#goals">Goals</a>
      <a href="#gallery">Gallery</a>
    </nav>

    <header>
      <div class="hero-sub">WELCOME TO MY PERSONAL WEBSITE</div>
      <div class="hero-name-solid">ANTHONY</div>
      <div class="hero-name-outline">DUENAS</div>
      <div class="hero-action">
        <a href="#about" class="explore-btn">EXPLORE PROFILE</a>
      </div>
    </header>

    <main class="content-container">
      <section id="about" class="fire-box">
        <h2>About Me</h2>
        <p>I am a second-year Information Technology student at Asia Pacific College. I am interested in web development and continuously improving my technical skills.</p>
      </section>

      <section id="education" class="fire-box">
        <h2>Education / Achievements</h2>
        <p>Asia Pacific College<br>Bachelor of Science in Information Technology<br>Second Year Student</p>
      </section>

      <section id="experience" class="fire-box">
        <h2>IT Experience</h2>
        <p>I have basic knowledge of HTML and CSS and I am still learning more about JavaScript and modern web technologies.</p>
      </section>

      <section id="hobbies" class="fire-box">
        <h2>Hobbies & Interests</h2>
        <ul>
          <li>Playing basketball</li>
          <li>Listening to music</li>
        </ul>
      </section>

      <section id="goals" class="fire-box">
        <h2>Goals in Life / Dream</h2>
        <p>My goal is to finish my studies and reach my dreams so I can repay my parents for their sacrifices.</p>
        <button id="motivateBtn" @click="motivate">Click for Motivation</button>
      </section>

      <section id="gallery" class="fire-box">
        <h2>Picture Gallery</h2>
        <div class="gallery-grid">
          <div class="thumb" v-for="(img, idx) in images" :key="idx">
            <img :src="img.src" :alt="img.alt" @click="open(idx)">
          </div>
        </div>

        <div class="modal" v-if="selected !== null" @click.self="close">
          <button class="nav-btn prev" @click.stop="prev">◀</button>
          <img :src="images[selected].src" :alt="images[selected].alt" class="modal-img">
          <button class="nav-btn next" @click.stop="next">▶</button>
          <button class="close-x" @click="close">✕</button>
        </div>
      </section>

      <section id="guestbook" class="fire-box">
        <h2>Visitor Guestbook</h2>
        <p>Leave a comment and mark your favorites!</p>

        <form @submit.prevent="addEntry">
          <p>Your Name:<br>
            <input type="text" required placeholder="Name.." v-model="visitorName">
          </p>
          <p>Your Feedback:<br>
            <textarea required placeholder="Write something.." v-model="visitorComment"></textarea>
          </p>
          <div class="public-check-row">
            <label>Mark as Public?</label>
            <input type="checkbox" v-model="isPublic">
            <span class="public-check-value">{{ isPublic }}</span>
          </div>
          <button type="submit" class="post-btn">Post Comment</button>
        </form>

        <div class="comments-area">
          <p><strong>Recent Comments:</strong></p>
          <ul>
            <li v-for="entry in guestbookEntries" 
                :class="{ impClass: entry.public }"
                v-show="!entry.liked"
                @click="entry.liked = !entry.liked">
              <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
            </li>
          </ul>

          <p><strong>Liked Comments:</strong></p>
          <ul>
            <li v-for="entry in guestbookEntries" 
                v-show="entry.liked"
                @click="entry.liked = !entry.liked">
              🔥 <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2026 ANTHONY DUENAS | WEBPROG IT-241</p>
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
      isPublic: false,
      images: [
        { src: 'https://via.placeholder.com/150/ff4d00', alt: 'Profile 1' },
        { src: 'https://via.placeholder.com/150/ff0000', alt: 'Profile 2' }
      ],
      guestbookEntries: []
    }
  },
  methods: {
    motivate() { alert("Look into my eyes! Your future is yours to forge."); },
    open(idx) { this.selected = idx; },
    close() { this.selected = null; },
    next() { this.selected = (this.selected + 1) % this.images.length; },
    prev() { this.selected = (this.selected - 1 + this.images.length) % this.images.length; },
    addEntry() {
      this.guestbookEntries.push({
        name: this.visitorName,
        comment: this.visitorComment,
        public: this.isPublic,
        liked: false
      });
      this.visitorName = ''; this.visitorComment = '';
    }
  }
}
</script>

<style scoped>
/* GHOST RIDER THEME CSS */
.ghost-rider-body {
  background-color: #0a0a0a;
  color: #eee;
  font-family: 'Arial Black', Gadget, sans-serif;
  min-height: 100vh;
}

nav {
  background: #000;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #ff4d00;
}

nav a {
  color: #ff4d00;
  text-decoration: none;
  margin: 0 15px;
  text-transform: uppercase;
  font-size: 0.8rem;
}

header {
  padding: 100px 20px;
  text-align: center;
  background: radial-gradient(circle, #220000 0%, #0a0a0a 100%);
}

.hero-sub { color: #ff4d00; letter-spacing: 3px; font-size: 0.7rem; }
.hero-name-solid { font-size: 5rem; font-weight: 900; line-height: 1; }
.hero-name-outline { 
  font-size: 5rem; 
  color: transparent; 
  -webkit-text-stroke: 1px #ff4d00; 
  text-shadow: 0 0 15px #ff4d00;
}

.fire-box {
  background: #111;
  border: 1px solid #330000;
  border-left: 4px solid #ff4d00;
  margin: 20px auto;
  padding: 30px;
  max-width: 800px;
}

h2 { color: #ff4d00; text-transform: uppercase; border-bottom: 1px solid #330000; padding-bottom: 10px; }

input, textarea {
  background: #222;
  border: 1px solid #ff4d00;
  color: #fff;
  padding: 10px;
  width: 100%;
  margin-top: 5px;
}

button {
  background: #ff4d00;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 10px;
}

button:hover { background: #fff; box-shadow: 0 0 20px #ff4d00; }

.impClass { color: #ff4d00; font-weight: bold; }

/* Modal / Gallery */
.gallery-grid { display: flex; gap: 15px; }
.thumb img { width: 100px; cursor: pointer; border: 1px solid #444; }
.modal {
  position: fixed; top:0; left:0; width:100%; height:100%;
  background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center;
}
.modal-img { max-width: 80%; border: 2px solid #ff4d00; }

footer { text-align: center; padding: 40px; color: #444; border-top: 1px solid #222; }
</style>