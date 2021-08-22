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
          :style="{width: getProgressWidth() + 'px', left: getLeftPos() + 'px'}"        
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
        //width of slide in %
        let rez = 4; 
        if (window.innerWidth < 1000)
          rez = 6;
        if (window.innerWidth < 600)
          rez = 9.75;
        if (window.innerWidth < 350)
          rez = 9.6;
        return rez;
      },
      getProgressWidth(){
        //0.79 - .slider-controls-wrapper width: 79%;
        //0.5 - .slider-controls-wrapper__progress flex-basis: 50%;
        let sliderWrapperWidth = 0.79;
        let progressActiveWidth = 0.5;
        if (window.innerWidth < 1000){
          sliderWrapperWidth = 0.95;
        }        
        if (window.innerWidth < 600){
          progressActiveWidth = 0.7;
        }
        
        let w = window.innerWidth * sliderWrapperWidth * progressActiveWidth / this.sliderContent.length;
        return w
      },
      getLeftPos(){
        //0.79 - .slider-controls-wrapper width: 79%;
        //0.5 - .slider-controls-wrapper__progress flex-basis: 50%;
        let sliderWrapperWidth = 0.79;
        let progressActiveWidth = 0.5;
        if (window.innerWidth < 1000){
          sliderWrapperWidth = 0.95;
        }
        if (window.innerWidth < 600){
          progressActiveWidth = 0.7;
        }
        let w = window.innerWidth * sliderWrapperWidth * progressActiveWidth / this.sliderContent.length;
        return w * (this.slideNumber - 1)
      },
      resizeEvent(){
        this.slideNumber = 1;
      }
    },
    computed: {
      progressWidth: function(){
        //0.79 - .slider-controls-wrapper width: 79%;
        //0.5 - .slider-controls-wrapper__progress flex-basis: 50%;
        let sliderWrapperWidth = 0.79;
        let progressActiveWidth = 0.5;
        if (window.innerWidth < 1000){
          sliderWrapperWidth = 0.95;
        }
        if (window.innerWidth < 1000){
          progressActiveWidth = 0.7;
        }
        
        let w = window.innerWidth * sliderWrapperWidth * progressActiveWidth / this.sliderContent.length;
        return w + 'px'
      },
      leftPos: function(){
        //0.79 - .slider-controls-wrapper width: 79%;
        //0.5 - .slider-controls-wrapper__progress flex-basis: 50%;
        let sliderWrapperWidth = 0.79;
        let progressActiveWidth = 0.5;
        if (window.innerWidth < 1000){
          sliderWrapperWidth = 0.95;
        }
        if (window.innerWidth < 1000){
          progressActiveWidth = 0.7;
        }
        let w = window.innerWidth * sliderWrapperWidth * progressActiveWidth / this.sliderContent.length;
        return w * (this.slideNumber - 1) + 'px'
      },
    },
    created() {
      window.addEventListener("resize", this.resizeEvent);
    },
    destroyed() {
      window.removeEventListener("resize", this.resizeEvent);
    },
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
    display: -webkit-box;   
    display: -ms-flexbox;   
    display: flex; 
    -webkit-transform: translateX(0%); 
    -ms-transform: translateX(0%); 
    transform: translateX(0%);
    -webkit-transition: -webkit-transform 0.5s linear;
    transition: -webkit-transform 0.5s linear;
    -o-transition: transform 0.5s linear;
    transition: transform 0.5s linear;
    transition: transform 0.5s linear, -webkit-transform 0.5s linear;                                                    
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;  
    -webkit-box-orient: vertical;  
    -webkit-box-direction: normal;  
    -ms-flex-direction: column;  
    flex-direction: column;
    margin-left: 24px;
}

.slider-controls-wrapper{
    padding: 24px 0px;
    width: 79%;
    margin-left: 124px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;        
    font-family: "Helvetica Neue Medium";  
}
.slider-controls-wrapper__progress{
  -ms-flex-preferred-size: 50%;
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
  -webkit-transition: left 0.5s linear;
  -o-transition: left 0.5s linear;
  transition: left 0.5s linear;
}
.slider-controls-wrapper__btns{
    width: 140px;
    color: var(--text-color);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;  
}
.slider-controls-wrapper__btn{
    cursor: pointer;
    width: 20px;
}
.slider-controls-wrapper__text{
    display: -webkit-box;
    display: -ms-flexbox;
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

@media screen and (max-width: 600px) {
  .slide__description{
    font-size: 24px;
  }
  .slide-wrapper{
    width: 9.75%;
  }
  .slide{
    margin-left: 16px;
  }
  .slider-controls-wrapper__progress{
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
  }
}

@media screen and (max-width: 350px) {
  .slide__description{
    font-size: 21px;
  }
  .slide{
      padding-bottom: 51px;
  }
  .slide-wrapper{
    width: 9.6%;
  }
}
</style>