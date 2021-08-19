<template>
  <div class="slider-wrapper">
    <VueSlickCarousel 
        ref="carousel" 
        v-if="items.length"
        class="slider"
    >
        <img src="@/assets/Apartments/256_Third of Brookfield_MU_2Bdr_D4_cam5.jpg" alt="" class="slide">
        <img src="@/assets/Apartments/256_Third of Brookfield_MU_2Bdr_D4_cam6.jpg" alt="" class="slide">
        <img src="@/assets/Apartments/256_Third of Brookfield_MU_1bdr_D4_cam1.jpg" alt="" class="slide">
        <img src="@/assets/Apartments/256_Third of Brookfield_MU_1bdr_D4_cam2.jpg" alt="" class="slide">
        <img src="@/assets/Apartments/256_Third of Brookfield_MU_1bdr_D4_cam3.jpg" alt="" class="slide">
        <img src="@/assets/Apartments/256_Third of Brookfield_MU_2Bdr_D4_cam4.jpg" alt="" class="slide">
    </VueSlickCarousel>
    <div class="slider-controls-wrapper">
        <img src="@/assets/brookfield_web/icn_arrow_left.svg" alt="" @click="showPrev" class="slider-controls-wrapper__btn">
        <div class="slider-controls-wrapper__text">
            <span class="slider-controls-wrapper__current">{{slideNumber}}</span> of 15
        </div>
        <img src="@/assets/brookfield_web/icn_arrow_right.svg" alt="" @click="showNext" class="slider-controls-wrapper__btn">
    </div>    
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
          slideNumber: 1,
      }
    },
    methods: {
      showPrev() {
        this.$refs.carousel.prev();
        this.slideNumber--;
      },
      showNext() {
        this.$refs.carousel.next()
        this.slideNumber++;
      },
    },
  }
</script> 

<style scoped>
.slider-wrapper{
    position: relative;
}
.slider{
    overflow: hidden;
    height: 800px;
    object-fit: cover;
}
.slide{
    height: 800px;
    object-fit: cover;
}
.slider-controls-wrapper{
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: #1B2023;
    border-radius: 24px;
    padding: 11px 5px;
    width: 140px;
    display: flex;
    justify-content: space-around;
    align-items: center;    
}
.slider-controls-wrapper__btn{
    cursor: pointer;
}
.slider-controls-wrapper__text{
    display: flex;
    color: rgba(255,255,255,0.4);
    font-size: 15px;
}
.slider-controls-wrapper__current{
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
}
</style>