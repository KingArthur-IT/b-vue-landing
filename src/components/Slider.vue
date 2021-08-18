<template>
  <div>
    <VueSlickCarousel ref="carousel" v-if="items.length">
        <div v-for="item in items" :key="item">
            <img :src="item.src" alt="">
        </div>
    </VueSlickCarousel>
    <button @click="showNext">show me the next</button>
    <VueSlickCarousel 
        :arrows="true" 
        :dots="false"
    >        
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'Slider',
    components: { VueSlickCarousel },
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
    },
  }
</script> 