<template>
  <template>
  <div class="container">
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
        <button id="motivateBtn" @click="motivate">Click for Motivation</button>
      </section>

      <section id="gallery">
        <h2>Picture Gallery</h2>
        <div class="gallery-grid">
          <div class="thumb" v-for="(img, idx) in images" :key="idx">
            <img :src="img.src" :alt="img.alt" @click="openModal(idx)">
          </div>
        </div>

        <div class="modal" v-if="selected !== null" @click.self="closeModal">
          <button class="nav prev" @click.stop="prevImage">◀</button>
          <img :src="images[selected].src" :alt="images[selected].alt" class="modal-img">
          <button class="nav next" @click.stop="nextImage">▶</button>
          <button class="close" @click="closeModal">✕</button>
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
          </div>
          <button type="submit">Post Comment</button>
        </form>

        <hr>
        <p><strong>Recent Comments (Click to "Like"):</strong></p>
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
        <ul>
          <li v-for="entry in guestbookEntries" 
              :key="entry.name"
              v-show="entry.liked"
              @click="entry.liked = false">
            ❤️ <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
          </li>
        </ul>
      </section>
    </main>

    <footer>
      <p>© 2026 ANTHONY DUENAS | Asia Pacific College</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Gallery Data
      selected: null,
      images: [
        { src: 'path-to-your-image1.jpg', alt: 'Profile 1' },
        { src: 'path-to-your-image2.jpg', alt: 'Profile 2' }
      ],
      // Guestbook Data
      visitorName: '',
      visitorComment: '',
      isPublic: false,
      guestbookEntries: []
    }
  },
  methods: {
    motivate() {
      alert("Keep pushing forward! Your hard work will pay off.");
    },
    openModal(idx) {
      this.selected = idx;
    },
    closeModal() {
      this.selected = null;
    },
    nextImage() {
      this.selected = (this.selected + 1) % this.images.length;
    },
    prevImage() {
      this.selected = (this.selected - 1 + this.images.length) % this.images.length;
    },
    addEntry() {
      this.guestbookEntries.push({
        name: this.visitorName,
        comment: this.visitorComment,
        public: this.isPublic,
        liked: false
      });
      this.visitorName = '';
      this.visitorComment = '';
    }
  }
};
</script>

<style scoped>
/* You can paste your style.css content here or keep the external link */
@import "./css/personalprofile.css";

.impClass {
  font-weight: bold;
  color: gold;
}
.gallery-grid {
  display: flex;
  gap: 10px;
}
.thumb img {
  width: 100px;
  cursor: pointer;
}
.modal {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex; align-items: center; justify-content: center;
}
</style>
</style>

