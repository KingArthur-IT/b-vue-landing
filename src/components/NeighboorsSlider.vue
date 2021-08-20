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
      <div class="slider-controls-wrapper__progress">
        <div class="progress-bg"></div>
        <div class="progress-active"
          :style="{width: progressWidth, left: leftPos}"        
        ></div>
      </div>
      <div class="slider-controls-wrapper__btns">
        <span 
          class="icon-icn_arrow_left slider-controls-wrapper__btn" 
          @click="showPrev"
          @mouseover="hoverLeft"
          @mouseleave="hoverLeft"
          v-bind:class="{'icon-icn_arrow_left_hover': isHoverLeft, 'icon-icn_arrow_left': !isHoverLeft}"
        ></span>
        <div class="slider-controls-wrapper__text">
            <span class="slider-controls-wrapper__current">{{slideNumber}}</span> of 3
        </div>
        <span 
          class="icon-icn_arrow_right slider-controls-wrapper__btn" 
          @click="showNext"
          @mouseover="hoverRight"
          @mouseleave="hoverRight"
          v-bind:class="{'icon-icn_arrow_right_hover': isHoverRight, 'icon-icn_arrow_right': !isHoverRight}"
        ></span>
      </div>
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
          slideCount: 3,
          isHoverLeft: false,
          isHoverRight: false,
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
      hoverLeft() {
        this.isHoverLeft = !this.isHoverLeft;       
      },
      hoverRight() {
        this.isHoverRight = !this.isHoverRight;       
      }
    },
    computed: {
      progressWidth: function(){
        let w = window.innerWidth * 0.88 * 0.5 / this.slideCount;
        return w + 'px'
      },
      leftPos: function(){
        let w = window.innerWidth * 0.88 * 0.5 / this.slideCount;
        return w * (this.slideNumber - 1) + 'px'
      }
    }
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
}
.slide-wrapper{
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
    padding: 11px 0px;
    width: 88%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;        
    font-family: "Helvetica Neue Medium"; 
}
.slider-controls-wrapper__progress{
  flex-basis: 50%;
  position: relative;
}
.progress-bg{
  background-color: var(--text-color);
  opacity: 0.2;
  width: 100%;
  height: 2px;
}
.progress-active{
  background-color: var(--text-color);
  width: 10%;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  transition: left 0.5s linear;
}
.slider-controls-wrapper__btns{
    width: 140px;
    color: var(--text-color);
    display: flex;
    justify-content: space-around;
    align-items: center;        
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
.icon-icn_arrow_left:before {
  content: "\e900";
  color: #1B2023;
  font-size: 11px;
  display: block;
}
.icon-icn_arrow_left_hover:before {
  content: "\e900";
  color: var(--secondary-color);
  font-size: 11px;
  display: block;
}

.icon-icn_arrow_right:before {
  content: "\e901";
  display: block;
  font-size: 11px;
  color: #1B2023;
}
.icon-icn_arrow_right_hover:before {
  content: "\e901";
  color: var(--secondary-color);
  font-size: 11px;
  display: block;
}
</style>