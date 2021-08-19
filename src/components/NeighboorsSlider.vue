<template>
    <div class="slider-wrapper">
    <VueSlickCarousel 
        ref="carousel" 
        class="slider"
        :centerMode=true
        :slidesToShow=2
        :draggable=false
    >
        <div class="slide-wrapper">
            <div class="slide slide-second">
                <img src="@/assets/Neighboors/Bar.jpg" alt="" class="">
                <h3 class="slide__description h3-second">Bar & Grill</h3>
            </div>
        </div>
        <div class="slide-wrapper">
            <div class="slide slide-third">
                <img src="@/assets/Neighboors/Fitness.jpg" alt="" class="">
                <h3 class="slide__description h3-third">Fitness</h3>
            </div>
        </div>
        <div class="slide-wrapper">
            <div class="slide slide-first">
                <img src="@/assets/Neighboors/Galore.jpg" alt="" class="">
                <h3 class="slide__description h3-first">Enterteiment Galore</h3>
            </div>
        </div>
    </VueSlickCarousel>
    <div class="slider-controls-wrapper">
        <img src="@/assets/brookfield_web/icn_arrow_left_bl.svg" alt="" @click="showPrev" class="slider-controls-wrapper__btn">
        <div class="slider-controls-wrapper__text">
            <span class="slider-controls-wrapper__current">{{slideNumber}}</span> of 3
        </div>
        <img src="@/assets/brookfield_web/icn_arrow_right_bl.svg" alt="" @click="showNext" class="slider-controls-wrapper__btn">
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
        if (this.slideNumber == 1)
          this.slideNumber = 3;
        else
          this.slideNumber--;
      },
      showNext() {
        this.$refs.carousel.next()
        if (this.slideNumber == 3)
          this.slideNumber = 1;
        else 
          this.slideNumber++;
      },
    },
  }
</script> 

<style scoped>
.slider-wrapper{
    position: relative;
    margin-top: 100px;
}
.slider{
    overflow: hidden;
    background-color: #fff;  
    /*transform: translateX(-10%)     */                                                         
}
.slide-wrapper{
    /*min-height: 800px;*/
    background-color: #fff;  
}
.slide{
    padding: 24px;
    padding-bottom: 144px;
    display: flex;  
    flex-direction: column;
    width: 90%;
    margin-left: 24px;
}
.slide-first{
  background-color: #3B8589;
}
.slide-second{
  background-color: #FFC869;
}
.slide-third{
  background-color: #E86F52;
}
.h3-first{
  color: #FFC869;
}
.h3-second{
  color: #3B8589;
}
.h3-third{
  color: #1B2023;
}
.slide img{
    margin: 0;
}
.slider-controls-wrapper{
    position: absolute;
    bottom: -5%;
    right: 8%;
    border-radius: 24px;
    padding: 11px 5px;
    width: 140px;
    display: flex;
    justify-content: space-around;
    align-items: center;    
    color: #1B2023;
}
.slider-controls-wrapper__btn{
    cursor: pointer;
    color: #1B2023;
    width: 20px;
}
.slider-controls-wrapper__text{
    display: flex;
    font-size: 15px;
}
.slider-controls-wrapper__current{
    font-weight: bold;
    margin-right: 5px;
}
.slide__description{
  margin-top: 16px;
  font-family: "Helvetica Neue Medium";
  font-size: 34px;
  font-weight: 500;
  line-height: 46px;
}
</style>