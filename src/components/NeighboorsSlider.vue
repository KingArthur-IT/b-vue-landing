<template>
    <div class="slider-wrapper">
      <div class="slider"
        :style="{transform: 'translateX(' + -getSlideTransform()*(slideNumber - 1) + '%)'}"
      >
        <div class="slide-wrapper"
          v-for="item in sliderContent" v-bind:key="item.id"  
        >
            <div class="slide"
              :style="{background: item.bgColor, color: item.textColor}"
            >
                <img :src="item.src" :alt="item.alt">
                <h3 class="slide__description">{{item.description}}</h3>
            </div>
        </div>
      </div>
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
            <span class="slider-controls-wrapper__current">{{slideNumber}}</span> of {{sliderContent.length}}
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
  import slidePic1 from "@/assets/Neighboors/Galore.jpg";
  import slidePic2 from "@/assets/Neighboors/Bar.jpg";
  import slidePic3 from "@/assets/Neighboors/Fitness.jpg";
 
  export default {
    name: 'Slider',
    components: {  },
    data () {
      return {
          slideNumber: 1,
          isHoverLeft: false,
          isHoverRight: false,
          sliderContent: [
            {id: 1, description: 'Enterteiment Galore', src: slidePic1, 
            bgColor: '#3B8589', textColor: '#FFC869', alt: 'Enterteiment Galore'},
            {id: 2, description: 'Bar & Grill', src: slidePic2, 
            bgColor: '#FFC869', textColor: '#3B8589', alt: 'Bar & Grill'},
            {id: 3, description: 'Fitness', src: slidePic3, 
            bgColor: '#E86F52', textColor: '#1B2023', alt: 'Fitness'},
            {id: 4, description: 'Enterteiment Galore', src: slidePic1, 
            bgColor: '#3B8589', textColor: '#FFC869', alt: 'Enterteiment Galore'},
          ],
      }
    },
    methods: {
      showPrev() {
        if (this.slideNumber == 1)
          this.slideNumber = this.sliderContent.length;
        else
          this.slideNumber--;
      },
      showNext() {
        if (this.slideNumber == this.sliderContent.length)
          this.slideNumber = 1;
        else 
          this.slideNumber++;
      },
      hoverLeft() {
        this.isHoverLeft = !this.isHoverLeft;       
      },
      hoverRight() {
        this.isHoverRight = !this.isHoverRight;       
      },
      getSlideTransform(){
        if (window.innerWidth < 1000)
          return 6;
        else
          return 4;
      }
    },
    computed: {
      progressWidth: function(){
        let w = window.innerWidth * 0.78 * 0.5 / this.sliderContent.length;
        return w + 'px'
      },
      leftPos: function(){
        let w = window.innerWidth * 0.78 * 0.5 / this.sliderContent.length;
        return w * (this.slideNumber - 1) + 'px'
      },
    }
  }
</script> 

<style scoped>
.slider-wrapper{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.slider{
    width: 1000%;
    background-color: #fff;   
    display: flex; 
    transform: translateX(0%);
    transition: transform 0.5s linear;                                                    
}
.slide-wrapper{
    background-color: #fff;  
    width: 4%;
}
.slide-wrapper:first-child{
    margin-left: 100px;
}
.slide{
    padding: 24px;
    padding-bottom: 144px;
    display: flex;  
    flex-direction: column;
    margin-left: 24px;
}

.slider-controls-wrapper{
    padding: 24px 0px;
    width: 79%;
    margin-left: 124px;
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
    width: 20px;
}
.slider-controls-wrapper__text{
    display: flex;
    font-size: 15px;
    color: rgba(27, 32, 35, 0.4);
}
.slider-controls-wrapper__current{
    font-weight: bold;
    margin-right: 5px;
    color: var(--text-color);
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

@media screen and (max-width: 1000px) {
  .slide__description{
    font-size: 29px;
  }
  .slide-wrapper{
    width: 6%;
  }
  .slide-wrapper:first-child{
      margin-left: 0px;
  }
  .slider-controls-wrapper{
      margin-left: 24px;
  }
  .slider-controls-wrapper{
      width: 95%;
  }
  .slide{
      padding-bottom: 64px;
  }
}
</style>