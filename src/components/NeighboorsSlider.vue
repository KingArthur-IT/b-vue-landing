<template>
  <div class="slider-wrapper">
    <div
      class="slider"
      :style="{
        transform:
          'translateX(' + -getSlideTransform() * (slideNumber - 1) + '%)',
      }"
    >
      <div
        class="slide-wrapper"
        v-for="item in sliderContent"
        v-bind:key="item.id"
        v-touch:swipe.left="showNext"
        v-touch:swipe.right="showPrev"
      >
        <div
          class="slide"
          :style="{ background: item.bgColor, color: item.textColor }"
        >
          <img :src="item.src" :alt="item.alt" class="slide__img"
            :style="{height: slideHeight + 'px'}"
          />
          <h3 class="slide__description">{{ item.description }}</h3>
        </div>
      </div>
    </div>
    <div class="slider-controls-wrapper">
      <div class="slider-controls-wrapper__progress">
        <div class="progress-bg"></div>
        <div
          class="progress-active"
          :style="{
            width: getProgressWidth() + 'px',
            left: getLeftPos() + 'px',
          }"
        ></div>
      </div>
      <div class="slider-controls-wrapper__btns">
        <span
          class="icon-icn_arrow_left slider-controls-wrapper__btn"
          @click="showPrev"
          @mouseover="hoverLeft"
          @mouseleave="hoverLeft"
          v-bind:class="{
            'icon-icn_arrow_left_hover': isHoverLeft,
            'icon-icn_arrow_left': !isHoverLeft,
          }"
        ></span>
        <div class="slider-controls-wrapper__text">
          <span class="slider-controls-wrapper__current">{{
            slideNumber
          }}</span>
          of {{ sliderContent.length }}
        </div>
        <span
          class="icon-icn_arrow_right slider-controls-wrapper__btn"
          @click="showNext"
          @mouseover="hoverRight"
          @mouseleave="hoverRight"
          v-bind:class="{
            'icon-icn_arrow_right_hover': isHoverRight,
            'icon-icn_arrow_right': !isHoverRight,
          }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import slidePic1 from "@/assets/Neighboors/1-min.jpg";
import slidePic2 from "@/assets/Neighboors/2-min.jpg";
import slidePic3 from "@/assets/Neighboors/3-min.jpg";
import slidePic4 from "@/assets/Neighboors/4-min.jpg";
import slidePic5 from "@/assets/Neighboors/5-min.jpg";
import slidePic6 from "@/assets/Neighboors/6-min.jpg";
import slidePic7 from "@/assets/Neighboors/7-min.jpg";
import slidePic8 from "@/assets/Neighboors/8-min.jpg";
import slidePic9 from "@/assets/Neighboors/9-min.jpg";
import slidePic11 from "@/assets/Neighboors/11-min.jpg";
import slidePic12 from "@/assets/Neighboors/12-min.jpg";
import slidePic13 from "@/assets/Neighboors/13-min.jpg";
import slidePic14 from "@/assets/Neighboors/14-min.jpg";
import slidePic16 from "@/assets/Neighboors/16-min.jpg";
import slidePic17 from "@/assets/Neighboors/17-min.jpg";
import slidePic20 from "@/assets/Neighboors/20-min.jpg";
import slidePic21 from "@/assets/Neighboors/21-min.jpg";

export default {
  name: "Slider",
  components: {},
  data() {
    return {
      slideNumber: 1,
      isHoverLeft: false,
      isHoverRight: false,
      sliderContent: [
        {
          id: 1,
          description: "Enterteiment Galore",
          src: slidePic1,
          bgColor: "#3B8589",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 2,
          description: "Bar & Grill",
          src: slidePic2,
          bgColor: "#FFC869",
          textColor: "#3B8589",
          alt: "Bar & Grill",
        },
        {
          id: 3,
          description: "Fitness",
          src: slidePic3,
          bgColor: "#E86F52",
          textColor: "#1B2023",
          alt: "Fitness",
        },
        {
          id: 4,
          description: "Enterteiment Galore",
          src: slidePic4,
          bgColor: "#3B8589",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 5,
          description: "Enterteiment Galore",
          src: slidePic5,
          bgColor: "#FFC869",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 6,
          description: "Enterteiment Galore",
          src: slidePic6,
          bgColor: "#E86F52",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 7,
          description: "Enterteiment Galore",
          src: slidePic7,
          bgColor: "#3B8589",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 8,
          description: "Enterteiment Galore",
          src: slidePic8,
          bgColor: "#FFC869",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 9,
          description: "Enterteiment Galore",
          src: slidePic9,
          bgColor: "#E86F52",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 10,
          description: "Enterteiment Galore",
          src: slidePic11,
          bgColor: "#3B8589",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 11,
          description: "Enterteiment Galore",
          src: slidePic12,
          bgColor: "#FFC869",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 12,
          description: "Enterteiment Galore",
          src: slidePic13,
          bgColor: "#E86F52",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 13,
          description: "Enterteiment Galore",
          src: slidePic14,
          bgColor: "#3B8589",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 14,
          description: "Enterteiment Galore",
          src: slidePic16,
          bgColor: "#FFC869",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 15,
          description: "Enterteiment Galore",
          src: slidePic17,
          bgColor: "#E86F52",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 16,
          description: "Enterteiment Galore",
          src: slidePic20,
          bgColor: "#3B8589",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
        {
          id: 17,
          description: "Enterteiment Galore",
          src: slidePic21,
          bgColor: "#FFC869",
          textColor: "#FFC869",
          alt: "Enterteiment Galore",
        },
      ],
      slideHeight: 0,
      windowWidth: 0,
      windowHeight: 0
    };
  },
  methods: {
    showPrev() {
      if (this.slideNumber == 1) this.slideNumber = this.sliderContent.length;
      else this.slideNumber--;
    },
    showNext() {
      if (this.slideNumber == this.sliderContent.length) this.slideNumber = 1;
      else this.slideNumber++;
    },
    hoverLeft() {
      this.isHoverLeft = !this.isHoverLeft;
    },
    hoverRight() {
      this.isHoverRight = !this.isHoverRight;
    },
    getSlideTransform() {
      //width of slide in %
      let rez = 4;
      if (window.innerWidth < 1000) rez = 6;
      if (window.innerWidth < 600) rez = 9.75;
      if (window.innerWidth < 350) rez = 9.6;
      return rez;
    },
    getProgressWidth() {
      //0.79 - .slider-controls-wrapper width: 79%;
      //0.5 - .slider-controls-wrapper__progress flex-basis: 50%;
      let sliderWrapperWidth = 0.79;
      let progressActiveWidth = 0.5;
      if (window.innerWidth < 1000) {
        sliderWrapperWidth = 0.94;
      }
      if (window.innerWidth < 600) {
        progressActiveWidth = 0.7;
      }
      if (window.innerWidth < 500) {
        progressActiveWidth = 0.6;
      }
      if (window.innerWidth < 370) {
        progressActiveWidth = 0.55;
      }

      let w =
        (window.innerWidth * sliderWrapperWidth * progressActiveWidth) /
        this.sliderContent.length;
      return w;
    },
    getLeftPos() {
      //0.79 - .slider-controls-wrapper width: 79%;
      //0.5 - .slider-controls-wrapper__progress flex-basis: 50%;
      let sliderWrapperWidth = 0.79;
      let progressActiveWidth = 0.5;
      if (window.innerWidth < 1000) {
        sliderWrapperWidth = 0.94;
      }
      if (window.innerWidth < 600) {
        progressActiveWidth = 0.7;
        sliderWrapperWidth = 0.92;
      }
      if (window.innerWidth < 500) {
        progressActiveWidth = 0.6;
      }
      if (window.innerWidth < 370) {
        progressActiveWidth = 0.55;
      }
      let w =
        (window.innerWidth * sliderWrapperWidth * progressActiveWidth) /
        this.sliderContent.length;
      return w * (this.slideNumber - 1);
    },
    resizeEvent() {
      if (this.windowWidth != window.innerWidth)
      {
        this.windowWidth = window.innerWidth;
        this.slideNumber = 1;
        const slideAspectRatio = 1.5;
        let imgSlideWidth = document.getElementsByClassName('slide__img')[0].getBoundingClientRect().width;
        this.slideHeight = imgSlideWidth / slideAspectRatio;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.resizeEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  },
  mounted(){
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    const slideAspectRatio = 1.5;
    //let imgSlideWidth = window.innerWidth * 10.0 / this.getSlideTransform();
    let imgSlideWidth = document.getElementsByClassName('slide__img')[0].getBoundingClientRect().width;
    this.slideHeight = imgSlideWidth / slideAspectRatio;
    if ( window.innerWidth < 500)
      this.slideHeight *= 1.95;
  }
};
</script>

<style scoped>
.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.slider {
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
.slide-wrapper {
  background-color: #fff;
  width: 4%;
}
.slide-wrapper:first-child {
  margin-left: 100px;
}
.slide {
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
.slid__img {
  /*aspect-ratio: 1.5;*/
}

.slider-controls-wrapper {
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
.slider-controls-wrapper__progress {
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  position: relative;
}
.progress-bg {
  background-color: var(--text-color);
  opacity: 0.2;
  width: 100%;
  height: 2px;
}
.progress-active {
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
.slider-controls-wrapper__btns {
  width: 140px;
  color: var(--text-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.slider-controls-wrapper__btn {
  cursor: pointer;
  width: 20px;
}
.slider-controls-wrapper__text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 15px;
  color: rgba(27, 32, 35, 0.4);
}
.slider-controls-wrapper__current {
  font-weight: bold;
  margin-right: 5px;
  color: var(--text-color);
}
.slide__description {
  margin-top: 16px;
  font-family: "Helvetica Neue Medium";
  font-size: 34px;
  font-weight: 500;
  line-height: 46px;
}
.icon-icn_arrow_left:before {
  content: "\e900";
  color: #1b2023;
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
  color: #1b2023;
}
.icon-icn_arrow_right_hover:before {
  content: "\e901";
  color: var(--secondary-color);
  font-size: 11px;
  display: block;
}

@media screen and (max-width: 1000px) {
  .slide__description {
    font-size: 29px;
  }
  .slide-wrapper {
    width: 6%;
  }
  .slide-wrapper:first-child {
    margin-left: 0px;
  }
  .slider-controls-wrapper {
    margin-left: 24px;
    width: 94%;
  }
  .slide {
    padding-bottom: 64px;
  }
}

@media screen and (max-width: 600px) {
  .slide__description {
    font-size: 24px;
  }
  .slide-wrapper {
    width: 9.75%;
  }
  .slide {
    margin-left: 16px;
  }
  .slider-controls-wrapper {
    margin-left: 16px;
  }
  .slider-controls-wrapper__progress {
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
  }
}
@media screen and (max-width: 500px) {
  .slider-controls-wrapper__progress {
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
  }
}
@media screen and (max-width: 370px) {
  .slider-controls-wrapper__progress {
    -ms-flex-preferred-size: 55%;
    flex-basis: 55%;
  }
}
@media screen and (max-width: 350px) {
  .slide__description {
    font-size: 21px;
  }
  .slide {
    padding-bottom: 51px;
  }
  .slide-wrapper {
    width: 9.6%;
  }
}
</style>
