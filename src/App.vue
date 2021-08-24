<template>
  <div id="app">
    <Header id="Header"
      v-bind:navItems="navItems"
      v-bind:title="`Luxury Mott Haven Apartments`"
      v-bind:subtitle="`Sign up for a chance to win a discounted apartment at Bankside`"
      @showModalEvent="showModal"
    />
    <main>
      <Building :id="navItems[0]"
      />
    <Slider :id="navItems[1]"
      v-bind:img="ApartmentsImages"/>
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
    <NeighboorsSlider :id="navItems[2]" />
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
    <Slider :id="navItems[3]" 
      v-bind:img="AmenitiesImages"
    />
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
    <CallToAction 
      v-bind:title="`Discounted Rents`"
      v-bind:description="`In order to find out how to apply, you need to register.`"
      @showModalEvent="showModal"
    />
    <Availibility :id="navItems[4]"/>
    <CallToAction 
      v-bind:title="`Join our growing inquiry list!`"
      v-bind:description="`Sign up for a chance to win a rent-stabilized discounted apartment.`"
      @showModalEvent="showModal"
    />
    <FAQ :id="navItems[5]"/>
    </main>
    <Footer />
    <ModalForm 
      v-bind:isShow="isMainModalShow"
      @closeModal="closeModalEvent"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Building from '@/components/Building.vue'
import Slider from '@/components/Slider.vue'
import TextDescription from '@/components/TextDescription.vue'
import NeighboorsSlider from '@/components/NeighboorsSlider.vue'
import PackageIncludes from '@/components/PackageIncludes.vue'
import CallToAction from '@/components/CallToAction.vue'
import Availibility from '@/components/Availibility.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'
import ModalForm from '@/components/ModalForm.vue'
import '@/iconstyle.css'

//images from local src need to be imported
//Apartments
import Apartments1 from '@/assets/Apartments/256_Third of Brookfield_MU_2Bdr_D4_cam5.jpg'
import Apartments2 from '@/assets/Apartments/256_Third of Brookfield_MU_2Bdr_D4_cam6.jpg'
import Apartments3 from '@/assets/Apartments/256_Third of Brookfield_MU_1bdr_D4_cam1.jpg'
import Apartments4 from '@/assets/Apartments/256_Third of Brookfield_MU_1bdr_D4_cam2.jpg'
import Apartments5 from '@/assets/Apartments/256_Third of Brookfield_MU_1bdr_D4_cam3.jpg'
import Apartments6 from '@/assets/Apartments/256_Third of Brookfield_MU_2Bdr_D4_cam4.jpg'
//Amenities
import Amenities1 from '@/assets/Amenities/256_Third of Brookfield_Gym_D4_cam4.jpg'
import Amenities2 from '@/assets/Amenities/256_Third of Brookfield_Gym_D4_cam5.jpg'
import Amenities3 from '@/assets/Amenities/256_Third of Brookfield_Lobby_cam01_D4.jpg'
import Amenities4 from '@/assets/Amenities/256_Third of Brookfield_Lobby_cam02_D4.jpg'
import Amenities5 from '@/assets/Amenities/256_Third of Brookfield_Lobby_cam03_D4.jpg'
import Amenities6 from '@/assets/Amenities/256_Third of Brookfield_Lounge_D4_cam4.jpg'
import Amenities7 from '@/assets/Amenities/256_Third of Brookfield_Lounge_D4_cam5.jpg'
import Amenities8 from '@/assets/Amenities/256_Third of Brookfield_Pool_teracce_D2_cam1.jpg'
import Amenities9 from '@/assets/Amenities/256_Third of Brookfield_Pool_teracce_D2_cam2.jpg'
import Amenities10 from '@/assets/Amenities/256_Third of Brookfield_Pool_teracce_D2_cam3.jpg'

export default {
  name: 'App',
  components: {
    Header, Building, Slider, TextDescription, NeighboorsSlider, 
    PackageIncludes, CallToAction, Availibility, FAQ, Footer, ModalForm
  },
  data () {
      return {
          //images for sliders components
          ApartmentsImages: [Apartments1, Apartments2, Apartments3, Apartments4, Apartments5, Apartments6],
          AmenitiesImages: [Amenities1, Amenities2, Amenities3, Amenities4, Amenities5,
          Amenities6, Amenities7, Amenities8, Amenities9, Amenities10],
          //items for navigation
          navItems: [
            'Building',
            'Apartments',
            'Neighbornhood',
            'Amenities',
            'Availability',
            'FAQ'
          ],
          //to show modal form
          isMainModalShow: false
      }
    },
  methods: {
    showModal () {
      this.isMainModalShow = true;
    },
    closeModalEvent(){
      this.isMainModalShow = false;
    }
  },
}
</script>

<style>
@font-face {
    font-family: 'Helvetica Neue Regular';
    src: url('~@/fonts/Helvetica Neue Roman.ttf') format('truetype'),
    url('~@/fonts/Helvetica Neue Roman.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Helvetica Neue Bold';
    src: url('~@/fonts/Helvetica Neue Bold.ttf') format('truetype'), 
    url('~@/fonts/Helvetica Neue Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Helvetica Neue Medium';
    src: url('~@/fonts/Helvetica Neue Medium.ttf') format('truetype'),
    url('~@/fonts/Helvetica Neue Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Icon';
    src: url('~@/fonts/icomoon.eot');
    src: url('~@/fonts/icomoon.eot?#iefix') format('embedded-opentype'),
    url('~@/fonts/icomoon.woff') format('woff'),
    url('~@/fonts/icomoon.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

:root {
  --primary-color: #3B8589;
  --secondary-color: #FFC869;
  --text-color: #1B2023;
  --secondary-hover-color: #F4A010;
}

* {
  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: auto;
}

button{
  appearance: none;
}

.btn {
  font-family: 'Helvetica Neue Medium';
  font-weight: normal;
  text-align: center; 
  cursor: pointer;
  appearance: none;
  padding: 10px auto;
  min-height: 48px;
  background-color: var(--secondary-color);
  border-radius: 24px;
  border: none;  
}
.btn:hover{
    background-color: var(--secondary-hover-color);
}
@media screen and (max-width: 1300px) {
    .container {
      width: 94%;
      margin: auto;
    }
}
@media screen and (max-width: 600px) {
    .container {
      width: 92%;
      margin: auto;
    }
}

/*Modal window styles*/
.vm--overlay {
  background:rgba(2,21,22, 0.6) !important; 
}
.vm--modal{
  background: var(--primary-color) !important;
}
</style>
