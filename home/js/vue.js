
  const app = Vue.createApp({
  data() {
    return {
      visitorName: '',
      visitorComment: '',
      isPublic: false,
      guestbookEntries: [
        { name: 'Sample Visitor', comment: 'Great site!', public: true, liked: false }
      ],
      images: [
        { src: './images/landscape1.jpg', alt: 'Landscape 1' },
        { src: './images/landscape2.jpg', alt: 'Landscape 2' },
        { src: './images/Picture1.jpg', alt: 'Me 1' },
        { src: './images/Picture2.jpg', alt: 'Me 2' }
      ],
      selected: null
    }
  }, 
  methods: {
    addEntry() {
      this.guestbookEntries.unshift({
        name: this.visitorName,
        comment: this.visitorComment,
        public: this.isPublic,
        liked: false
      })
      this.visitorName = ''
      this.visitorComment = ''
      this.isPublic = false
    },
    open(index) {
      this.selected = index
    },
    close() {
      this.selected = null
    },
    next() {
      if (this.selected === null) return
      this.selected = (this.selected + 1) % this.images.length
    },

    prev() {
      if (this.selected === null) return
      this.selected = (this.selected - 1 + this.images.length) % this.images.length
    },
    motivate() {
      alert('Keep pushing forward and never give up on your dreams!');
    }
  }
})

app.mount('#app')
