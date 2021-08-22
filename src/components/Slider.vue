<template>
  <div class="slider-wrapper" v-if="img.length > 0">
    <VueSlickCarousel 
        ref="carousel" 
        class="slider"
        :draggable=false
    >
        <img v-for="image in img" v-bind:key="image" :src="image" alt="" class="slide">
    </VueSlickCarousel>
    <div class="slider-controls-wrapper">
        <span 
          class="icon-icn_arrow_left slider-controls-wrapper__btn" 
          @click="showPrev"
          @mouseover="hoverLeft"
          @mouseleave="hoverLeft"
          v-bind:class="{'icon-icn_arrow_left_hover': isHoverLeft, 'icon-icn_arrow_left': !isHoverLeft}"
        ></span>
        <div class="slider-controls-wrapper__text">
            <span class="slider-controls-wrapper__current">{{slideNumber}}</span> of {{img.length}}
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
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
   
  export default {
    name: 'Slider',
    components: { VueSlickCarousel },
    data () {
      return {
          slideNumber: 1,
          isHoverLeft: false,
          isHoverRight: false,
      }
    },
    methods: {
      showPrev() {
        this.$refs.carousel.prev();
        if (this.slideNumber == 1)
          this.slideNumber = this.img.length;
        else 
          this.slideNumber--;
      },
      showNext() {
        this.$refs.carousel.next()
        if (this.slideNumber == this.img.length)
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
    props: {
      img: {
        type: Array
      }
    },
  }
</script> 

<style scoped>
.slider-wrapper{
    position: relative;
}
.slider{
    overflow: hidden;
    object-fit: cover;
    -o-object-fit: cover;
}
.slide{
    height: 800px;
    object-fit: cover;
    -o-object-fit: cover;
}
.slider-controls-wrapper{
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: var(--text-color);
    border-radius: 24px;
    padding: 11px 5px;
    width: 140px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;   
    font-family: "Helvetica Neue Medium"; 
}
.slider-controls-wrapper__btn{
    cursor: pointer;
}
.slider-controls-wrapper__text{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: rgba(255,255,255,0.4);
    font-size: 15px;
}
.slider-controls-wrapper__current{
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
}
.icon-icn_arrow_left:before {
  content: "\e900";
  color: rgba(255,255,255,0.4);
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
  color: rgba(255,255,255,0.4);
}
.icon-icn_arrow_right_hover:before {
  content: "\e901";
  color: var(--secondary-color);
  font-size: 11px;
  display: block;
}
@media screen and (max-width: 1200px) {
  .slide{
    height: 700px;
  }
}
@media screen and (max-width: 1000px) {
  .slide{
    height: 600px;
  }
}
@media screen and (max-width: 800px) {
  .slide{
    height: 500px;
  }
}
@media screen and (max-width: 600px) {
  .slider-controls-wrapper{
    right: 37%;
  }
}
@media screen and (max-width: 500px) {
  .slider-controls-wrapper{
    right: 35%;
  }
}
@media screen and (max-width: 400px) {
  .slider-controls-wrapper{
    right: 32%;
  }
}
@media screen and (max-width: 360px) {
  .slider-controls-wrapper{
    right: 28%;
  }
  .slide{
    height: 440px;
  }
}
</style>