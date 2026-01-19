<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Personal Profile | ANTHONY DUENAS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div id="app">

  <nav>
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#experience">Experience</a>
    <a href="#hobbies">Hobbies</a>
    <a href="#goals">Goals</a>
    <a href="#gallery">Gallery</a>
    <a href="resources.html">Resources</a>
  </nav>

  <header>
    <div class="hero-sub">WELCOME TO MY PERSONAL WEBSITE</div>
    <div class="hero-name-solid">ANTHONY</div>
    <div class="hero-name-outline">DUENAS</div>
    <div class="hero-action">
      <a href="#about" class="explore-btn">EXPLORE PROFILE</a>
    </div>
  </header>

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
  <p>Leave a comment and mark your favorites!</p>

  <form v-on:submit.prevent="addEntry">
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

  <div>
    <p><strong>Recent Comments (Click to "Like"):</strong></p>
    <ul id="ulToFind">
      <li 
        v-for="entry in guestbookEntries" 
        v-bind:class="{ impClass: entry.public }"
        v-on:click="entry.liked=!entry.liked"
        v-show="!entry.liked">
          <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
      </li>
    </ul>

    <p><strong>Liked Comments:</strong></p>
    <ul id="ulFound">
      <li 
        v-for="entry in guestbookEntries" 
        v-bind:class="{ impClass: entry.public }"
        v-on:click="entry.liked=!entry.liked"
        v-show="entry.liked">
          ❤️ <strong>{{ entry.name }}</strong>: "{{ entry.comment }}"
      </li>
    </ul>
  </div>
</section>

  <footer>
    <p>© 2026 ANTHONY DUENAS | WEBPROG IT-241</p>

  </div>
</template>

<script>
export default {
  name: "PersonalProfile"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

nav {
  background: black;
  padding: 12px;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 90vh;
  padding: 40px;
  flex-wrap: wrap;
}

.hero img {
  width: 260px;        
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
}

.hero-content {
  max-width: 400px;
}

.hero-content h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 18px;
  color: #555;
}

.section {
  padding: 60px 20px;
}

.dark {
  background: #0b0b0b;
  color: white;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.gallery img {
  width: 100%;
}

footer {
  background: black;
  color: white;
  text-align: center;
  padding: 15px;
}
</style>