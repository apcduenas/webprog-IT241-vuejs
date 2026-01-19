<template>
  <div class="ghost-rider-theme">
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

    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>I am a second-year Information Technology student at Asia Pacific College. I am interested in web development and continuously improving my technical skills.</p>
      </section>

      <section id="education">
        <h2>Education / Achievements</h2>
        <p>Asia Pacific College<br>Bachelor of Science in Information Technology<br>Second Year Student</p>
      </section>

      <section id="experience">
        <h2>IT Experience</h2>
        <p>I have basic knowledge of HTML and CSS and I am still learning more about JavaScript and modern web technologies.</p>
      </section>

      <section id="hobbies">
        <h2>Hobbies & Interests</h2>
        <ul>
          <li>Playing basketball</li>
          <li>Listening to music</li>
        </ul>
      </section>

      <section id="goals">
        <h2>Goals in Life / Dream</h2>
        <p>My goal is to finish my studies and reach my dreams so I can repay my parents for their sacrifices.</p>
        <button @click="motivate">Click for Motivation</button>
      </section>

      <section id="gallery">
        <h2>Picture Gallery</h2>
        <div class="gallery-grid">
          <div class="thumb" v-for="(img, idx) in images" :key="idx">
            <img :src="img.src" :alt="img.alt" @click="open(idx)">
          </div>
        </div>

        <div class="modal" v-if="selected !== null" @click.self="close">
          <button class="nav prev" @click.stop="prev">◀</button>
          <img :src="images[selected].src" :alt="images[selected].alt" class="modal-img">
          <button class="nav next" @click.stop="next">▶</button>
          <button class="close" @click="close">✕</button>
        </div>
      </section>

      <section id="guestbook">
        <h2>Visitor Guestbook</h2>
        <form @submit.prevent="addEntry">
          <p>Your Name: <input type="text" required v-model="visitorName"></p>
          <p>Your Feedback: <textarea required v-model="visitorComment"></textarea></p>
          <div class="public-check-row">
            <label>Mark as Public?</label>
            <input type="checkbox" v-model="isPublic">
            <span class="public-check-value">{{ isPublic }}</span>
          </div>
          <button type="submit">Post Comment</button>
        </form>

        <div class="comment-lists">
          <p><strong>Recent Comments:</strong></p>
          <ul>
            <li v-for="entry in guestbookEntries" 
                :key="entry.name"
                :class="{ impClass: entry.public }"
                v-show="!entry.liked"
                @click="entry.liked = true">
              <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
            </li>
          </ul>

          <p><strong>Liked Comments:</strong></p>
          <ul id="ulFound">
            <li v-for="entry in guestbookEntries" 
                :key="'liked-'+entry.name"
                v-show="entry.liked"
                @click="entry.liked = false">
              ❤️ <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
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
        { src: 'https://via.placeholder.com/300x420/e62117/ffffff?text=Gallery+1', alt: 'Image 1' },
        { src: 'https://via.placeholder.com/300x420/ff6a00/ffffff?text=Gallery+2', alt: 'Image 2' },
        { src: 'https://via.placeholder.com/300x420/ffcc00/000000?text=Gallery+3', alt: 'Image 3' }
      ],
      guestbookEntries: []
    }
  },
  methods: {
    motivate() { alert("Keep moving forward, Anthony! The fire never dies."); },
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
:root {
  --fire-red: #e62117;
  --fire-orange: #ff6a00;
  --fire-yellow: #ffcc00;
  --charcoal: #0a0a0a;
  --smoke: #1a1a1a;
  --text-white: #ffffff;
}

.ghost-rider-theme {
  background-color: var(--charcoal);
  color: var(--text-white);
  font-family: 'Arial Black', Gadget, sans-serif;
  min-height: 100vh;
}

/* HERO SECTION */
header {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://via.placeholder.com/1920x1080/000000/ff4500?text=Ghost+Rider+Background');
  background-size: cover;
  border-bottom: 4px solid var(--fire-red);
}

.hero-sub { color: var(--fire-orange); letter-spacing: 5px; margin-bottom: 20px; }
.hero-name-solid { font-size: 5rem; letter-spacing: 10px; line-height: 1; }
.hero-name-outline { 
  font-size: 5rem; 
  color: transparent; 
  -webkit-text-stroke: 2px var(--fire-orange); 
  margin-bottom: 40px; 
}

/* NAVIGATION */
nav {
  background: rgba(0, 0, 0, 0.95);
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid var(--fire-orange);
  position: sticky;
  top: 0;
  z-index: 100;
}
nav a { color: var(--fire-orange); text-decoration: none; margin: 0 15px; font-size: 0.8rem; }

/* SECTIONS */
section {
  max-width: 900px;
  margin: 40px auto;
  padding: 40px;
  background: var(--smoke);
  border-left: 4px solid var(--fire-red);
}

.gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; }
.thumb img { width: 100%; border: 3px solid var(--fire-red); cursor: pointer; filter: grayscale(100%); transition: 0.3s; }
.thumb img:hover { filter: grayscale(0%); transform: scale(1.05); }

.modal { position: fixed; inset: 0; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 200; }
.modal-img { max-width: 80%; border: 5px solid var(--fire-yellow); }

.public-check-row { display: flex; align-items: center; gap: 10px; margin: 15px 0; }
.impClass { border-left: 4px solid var(--fire-yellow) !important; background: #2a2a2a !important; }

button {
  background: var(--fire-red);
  color: white;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}
button:hover { background: var(--fire-yellow); color: black; }

footer { padding: 50px; text-align: center; color: #666; font-size: 0.8rem; }
</style>