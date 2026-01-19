<template>
  <div class="ghost-rider-body">
    <nav>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#goals">Goals</a>
      <a href="#gallery">Gallery</a>
      <a href="#resources">Resources</a>
    </nav>

    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <span class="hero-sub">WELCOME TO MY PERSONAL WEBSITE</span>
        <h1 class="hero-name-solid">ANTHONY</h1>
        <h1 class="hero-name-outline">DUENAS</h1>
        <a href="#about" class="explore-btn">EXPLORE PROFILE</a>
      </div>
    </header>

    <main class="content">
      <section id="about" class="fire-box">
        <h2>About Me</h2>
        <p>I am a second-year Information Technology student at Asia Pacific College. I am interested in web development and continuously improving my technical skills.</p>
      </section>

      </main>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile'
}
</script>

<style scoped>
.ghost-rider-body {
  background-color: #000;
  color: #fff;
  font-family: 'Arial Black', Gadget, sans-serif;
}

.hero {
  position: relative;
  height: 100vh;
  /* REPLACE THIS URL WITH YOUR ACTUAL IMAGE PATH */
  background: url('https://images.alphacoders.com/514/514150.jpg') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Makes the text readable over the fire */
}

.hero-content { position: relative; z-index: 10; }

.hero-sub { color: #ff4d00; letter-spacing: 5px; font-size: 0.9rem; display: block; margin-bottom: 20px; }

.hero-name-solid { font-size: 6rem; font-weight: 900; letter-spacing: 10px; margin: 0; }

.hero-name-outline { 
  font-size: 6rem; 
  color: transparent; 
  -webkit-text-stroke: 2px #ff4d00; 
  letter-spacing: 10px;
  margin: 0 0 40px 0;
}

.explore-btn {
  padding: 15px 40px;
  border: 1px solid #ff4d00;
  color: #ff4d00;
  text-decoration: none;
  transition: 0.3s;
}

.explore-btn:hover { background: #ff4d00; color: #000; box-shadow: 0 0 20px #ff4d00; }

.fire-box {
  background: #111;
  border-left: 5px solid #ff4d00;
  margin: 40px auto;
  padding: 40px;
  max-width: 900px;
}
</style>