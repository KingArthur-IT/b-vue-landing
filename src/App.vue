<template>
  <div id="app">
    <Header />
    <Building />
    <Slider />
    <TextDescription 
      v-bind:firstText="`Be the first one to live in our beautiful apartment homes that 
            combine natural textures with modern touches.`"
      v-bind:secondText="`Enjoy spectacular views, spacious interiors, and eye-pleasing 
            decor. Floor to ceiling windows will brighten your apartment 
            and your mood. Stainless steel appliances and granite 
            countertops provide a wonderful backdrop to create your ideal 
            kitchen. In-unit washer/dryer and dishwasher provide additional 
            convenience in these smartly designed, elegantly finished residences.`"
      v-bind:underlinedText="`Every apartment in our workforce housing lottery is offered at 
            a steep discount and will be rent-stabilized for 35 years!`"
    />
    <NeighboorsSlider />
    <TextDescription 
      v-bind:firstText="`Live in a unique neighborhood where industrial heritage meets 
            creative spark. Going for a night out? Look to Mottley Kitchenette, 
            Hudson Smokehouse, and Brick & Hops for delicious local cuisine. 
            Local culture is plentiful with bars, open art studios, and 
            independent bookstores right in your community.`"
      v-bind:secondText="`For a breath of fresh air, walk along the waterfront or head over to 
            St.Mary’s Park (the largest park in the South Bronx). Travel quickly 
            and easily to wherever you need to go with an on-site parking garage, 
            local 4-5-6 trains, and citibike outside your door.`"
      v-bind:underlinedText="`Bankside reflects the unique, energetic feel of the local neighborhood 
            that is unlike anywhere else.`"
    />
    <Slider />
    <TextDescription 
      v-bind:firstText="`Relaxation and convenience is an elevator ride away with 
            Bankside’s wonderful package of amenities. Be welcomed home 
            by a 24/7 doorman in our sparkling, spacious lobby. Looking for 
            fun? Head for the gameroom for a (game of darts/golf simulator?), 
            go for a dip in the pool, or grab a grill at the outdoor barbeque deck.`"
      v-bind:secondText="`Feeling in the mood to be productive? Get through your to-do list 
            at our coworking lounge or stay in shape in style at our on-site 
            double height fitness center.`"
      v-bind:underlinedText="`Bankside is more than just a place to live, it’s a place for living.`"
    />
    <PackageIncludes />
    <CallToAction />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Building from '@/components/Building.vue'
import Slider from './components/Slider.vue'
import TextDescription from './components/TextDescription.vue'
import NeighboorsSlider from './components/NeighboorsSlider.vue'
import PackageIncludes from './components/PackageIncludes.vue'
import CallToAction from './components/CallToAction.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Building, Slider, TextDescription, NeighboorsSlider, 
    PackageIncludes, CallToAction, Footer
  }
}
</script>

<style>
@font-face {
    font-family: 'Helvetica Neue Regular';
    src: url('~@/fonts/Helvetica Neue Roman.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
@font-face {
    font-family: 'Helvetica Neue Bold';
    src: url('~@/fonts/Helvetica Neue Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
@font-face {
    font-family: 'Helvetica Neue Medium';
    src: url('~@/fonts/Helvetica Neue Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
*{

  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.btn{
  background-color: #FFC869;
  border-radius: 24px;
  border: none;
  font-weight: bold;
  padding: 10px auto;
  text-align: center;
  min-height: 48px;
  font-family: 'Helvetica Neue Regular';
}
.container{
  max-width: 1200px;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
