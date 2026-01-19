<template>
  <div class="ghost-rider-body">
    <nav>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#goals">Goals</a>
      <a href="#gallery">Gallery</a>
      <a href="#guestbook">Guestbook</a>
    </nav>

    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <span class="hero-sub">WELCOME TO MY PERSONAL WEBSITE</span>
        <h1 class="hero-name-solid">ANTHONY</h1>
        <h1 class="hero-name-outline">DUENAS</h1>
        <div class="hero-action">
          <a href="#about" class="explore-btn">EXPLORE PROFILE</a>
        </div>
      </div>
    </header>

    <main class="content">
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
          <button class="nav prev" @click.stop="prev">◀</button>
          <img :src="images[selected].src" :alt="images[selected].alt" class="modal-img">
          <button class="nav next" @click.stop="next">▶</button>
          <button class="close" @click="close">✕</button>
        </div>
      </section>

      <section id="guestbook" class="fire-box">
        <h2>Visitor Guestbook</h2>
        <p>Leave a comment and mark your favorites!</p>

        <form @submit.prevent="addEntry">
          <p>
            Your Name: <br>
            <input type="text" required placeholder="Name.." v-model="visitorName">
          </p>
          <p>
            Your Feedback/Comment: <br>
            <textarea required placeholder="Write something.." v-model="visitorComment"></textarea>
          </p>
          <div class="public-check-row">
            <label for="isPublicCheck">Mark as Public?</label>
            <input id="isPublicCheck" type="checkbox" v-model="isPublic">
            <span class="public-check-value">{{ isPublic }}</span>
          </div>
          <button type="submit">Post Comment</button>
        </form>

        <hr>

        <div class="comments-display">
          <p><strong>Recent Comments:</strong></p>
          <ul id="ulToFind">
            <li v-for="entry in guestbookEntries" 
                v-show="!entry.liked"
                :class="{ impClass: entry.public }"
                @click="entry.liked = !entry.liked">
                <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
            </li>
          </ul>

          <p><strong>Liked Comments:</strong></p>
          <ul id="ulFound">
            <li v-for="entry in guestbookEntries" 
                v-show="entry.liked"
                :class="{ impClass: entry.public }"
                @click="entry.liked = !entry.liked">
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
        { src: 'https://via.placeholder.com/300x420/e62117/ffffff?text=Image+1', alt: 'Gallery 1' },
        { src: 'https://via.placeholder.com/300x420/ff6a00/ffffff?text=Image+2', alt: 'Gallery 2' }
      ],
      guestbookEntries: []
    }
  },
  methods: {
    motivate() {
      alert("Look into my eyes! Your future is what you make of it.");
    },
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
      this.visitorName = '';
      this.visitorComment = '';
      this.isPublic = false;
    }
  }
}
</script>

<style scoped>
/* Root variables for the Ghost Rider Colors */
.ghost-rider-body {
  --fire-red: #e62117;
  --fire-orange: #ff6a00;
  --fire-yellow: #ffcc00;
  background-color: #000;
  color: #fff;
  font-family: 'Arial Black', Gadget, sans-serif;
  min-height: 100vh;
}

/* Navigation Styling */
nav {
  background: rgba(0, 0, 0, 0.95);
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid var(--fire-orange);
  position: sticky;
  top: 0;
  z-index: 100;
}
nav a {
  color: var(--fire-orange);
  text-decoration: none;
  margin: 0 15px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
nav a:hover { color: #fff; text-shadow: 0 0 10px var(--fire-orange); }

/* Hero Header with Ghost Rider Background */
.hero {
  position: relative;
  height: 100vh;
  background: url('https://images.alphacoders.com/514/514150.jpg') center center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.hero-content { position: relative; z-index: 10; }
.hero-sub { color: var(--fire-orange); letter-spacing: 5px; font-size: 0.9rem; display: block; margin-bottom: 20px; }
.hero-name-solid { font-size: 6rem; font-weight: 900; letter-spacing: 10px; line-height: 1; margin: 0; }
.hero-name-outline { 
  font-size: 6rem; 
  color: transparent; 
  -webkit-text-stroke: 2px var(--fire-orange); 
  letter-spacing: 10px;
  margin: 0 0 40px 0;
  text-shadow: 0 0 15px var(--fire-orange);
}
.explore-btn {
  padding: 15px 40px;
  border: 1px solid var(--fire-orange);
  color: var(--fire-orange);
  text-decoration: none;
  font-size: 0.8rem;
  transition: 0.3s;
}
.explore-btn:hover { background: var(--fire-orange); color: #000; box-shadow: 0 0 20px var(--fire-orange); }

/* Sections and Boxes */
.fire-box {
  background: #1a1a1a;
  border-left: 5px solid var(--fire-red);
  margin: 60px auto;
  padding: 40px;
  max-width: 900px;
}
h2 { color: var(--fire-yellow); text-transform: uppercase; letter-spacing: 3px; }

/* Guestbook Inputs */
input, textarea {
  width: 100%;
  padding: 10px;
  background: #000;
  border: 1px solid var(--fire-orange);
  color: white;
  margin-bottom: 15px;
}
button {
  background: var(--fire-red);
  color: white;
  border: none;
  padding: 15px 30px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
}
button:hover { background: var(--fire-yellow); color: #000; }

/* Gallery and Modal */
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; }
.thumb img { width: 100%; border: 4px solid var(--fire-red); cursor: pointer; filter: grayscale(100%); transition: 0.5s; }
.thumb img:hover { filter: grayscale(0%); box-shadow: 0 0 30px var(--fire-red); }

.modal { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.85); z-index: 999; }
.modal-img { max-width: 70%; border: 6px solid var(--fire-yellow); }
.modal .nav, .modal .close { background: none; color: var(--fire-yellow); font-size: 2rem; border: none; cursor: pointer; }

footer { text-align: center; padding: 50px; color: #444; }
.impClass { border-left-color: var(--fire-yellow) !important; }
</style>