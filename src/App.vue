<template>
  <div id="app">
    <Header 
      v-bind:title="`Luxury Mott Haven Apartments`"
      v-bind:subtitle="`Sign up for a chance to win a discounted apartment at Bankside`"
      v-bind:navItems="navItems"
      @showModalEvent="showModal"
    />
    <main>
      <Building :id="navItems[0]"
      />
    <Slider id="Apartments"
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
    <NeighboorsSlider id="Neighbornhood" />
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
    <Slider id="Amenities" 
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
    />
    <Availibility id="Availability"/>
    <CallToAction 
      v-bind:title="`Join our growing inquiry list!`"
      v-bind:description="`Sign up for a chance to win a rent-stabilized discounted apartment.`"
    />
    <FAQ id="FAQ"/>
    </main>
    <Footer />
    <modal name="SignUpModal" :adaptive="true" width="700" height="580">
      <form class="modal" autocomplete="off">
        <button class="modal__close" @click="hideModal">
          <img src="@/assets/brookfield_web/icn_menu_close.svg" alt="X">
        </button>
        <div class="modal__hero">
          <h3 class="modal__title">Sign Up</h3>
          <div class="modal__inputs">
            <div class="input-wrapper">
              <div class="inputInfo inputName">First Name</div>
              <input type="text" name="FirstName" placeholder="First Name" 
              v-model="firstName" :class="{error: validation.hasError('firstName')}">
              <div class="inputInfo validateMessage">{{ validation.firstError('firstName') }}</div>
            </div>
            <div class="input-wrapper">
              <div class="inputInfo inputName">Last Name</div>
              <input type="text" name="LastName" placeholder="Last Name" 
              v-model="lastName" :class="{error: validation.hasError('lastName')}">
              <div class="inputInfo validateMessage">{{ validation.firstError('lastName') }}</div>
            </div>
            <div class="input-wrapper">
              <div class="inputInfo inputName">Email</div>
              <input type="email" name="Email" placeholder="Email" 
              v-model="email" :class="{error: validation.hasError('email')}">
              <div class="inputInfo validateMessage">{{ validation.firstError('email') }}</div>
            </div>
            <div class="input-wrapper">
              <div class="inputInfo inputName">Phone</div>
              <input type="tel" name="Phone" placeholder="Contact Phone" 
              v-model="phone" :class="{error: validation.hasError('phone')}">
              <div class="inputInfo validateMessage">{{ validation.firstError('phone') }}</div>
            </div>                   
          </div>
          <div class="modal__budget">
            <h4 class="modal__budget-text">
              Your household income
            </h4>
            <div class="modal__radio-group">
              <input type="radio" name="Income" 
              value="Under $100k" id="IncomeRadio1"
              :style="{ background: `url(${RadioDefault})`}"
              >
              <label for="IncomeRadio1">Under $100k</label>
              
              <input type="radio" name="Income" 
              value="About $100k" id="IncomeRadio2" cheched>
              <label for="IncomeRadio2">About $100k</label>
              
              <input type="radio" name="Income" 
              value="Above $100k" id="IncomeRadio3">
              <label for="IncomeRadio3">Above $100k</label>
            </div>
          </div>
        </div>
        <button class="modal__signUp" @click="signUp">Sign Up</button>
      </form>
    </modal>
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
import '@/iconstyle.css'

//images from src need to be imported
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
//modal radio img
import RadioDefault from '@/assets/brookfield_web/icn_radio_default.svg'
//validator
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

export default {
  name: 'App',
  components: {
    Header, Building, Slider, TextDescription, NeighboorsSlider, 
    PackageIncludes, CallToAction, Availibility, FAQ, Footer,
  },
  data () {
      return {
          ApartmentsImages: [Apartments1, Apartments2, Apartments3, Apartments4, Apartments5, Apartments6],
          AmenitiesImages: [Amenities1, Amenities2, Amenities3, Amenities4, Amenities5,
          Amenities6, Amenities7, Amenities8, Amenities9, Amenities10],
          navItems: [
            'Building',
            'Apartments',
            'Neighbornhood',
            'Amenities',
            'Availability',
            'FAQ'
          ],
          RadioDefault,
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
      }
    },
  methods: {
    showModal () {
      this.$modal.show('SignUpModal');
    },
    hideModal () {
      this.$modal.hide('SignUpModal'); 
    },
    signUp(){
        this.$validate()
          .then(function (success) {
            if (success) {
              alert('Validation succeeded!');
            }
          });
    }
  },
  validators: {
      email: function (value) {
        return Validator.value(value).required().email();
      },
      firstName: function(value) {
        return Validator.value(value).required().regex('^[A-Za-z]*$', 'Must only contain alphabetic characters.');
      },
      lastName: function(value) {
        return Validator.value(value).required().regex('^[A-Za-z]*$', 'Must only contain alphabetic characters.');
      },
      phone: function(value) {
        return Validator.value(value).required().digit().length(10);
      },
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
@media screen and (max-width: 1300px) {
    .container {
      width: 94%;
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
.modal{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.modal__close{
  background: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  padding: 16px 16px 0px;
}
.modal__hero{
  font-family: "Helvetica Neue Regular";
  font-weight: normal;
  padding: 0px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.modal__title{
  color: var(--secondary-color);  
  font-size: 48px;
  line-height: 57px;
  font-weight: normal;
}
.modal__inputs{
  color: #FFFFFF;
  font-size: 20px;
  line-height: 28px;
  padding: 64px 0px 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.input-wrapper{
  position: relative;
}
.inputInfo{
  position: absolute;
  font-size: 12px;
  opacity: 0.8;
}
.inputName{  
  top: -20px;
  
}
.validateMessage{
  bottom: 20px;
}
.modal__inputs input{
  min-height: 42px;
  min-width: 275px;
  background: var(--primary-color);
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  margin-bottom: 48px;
  font-size: 20px;
}
.error{
  border-bottom: 2px solid #C75356 !important;
}
.modal__inputs input:active,
.modal__inputs input:focus{
  border-bottom: 2px solid var(--secondary-hover-color);
}
.modal__inputs input::placeholder{
  color: rgba(255,255,255,0.5);
  font-size: 20px;
  line-height: 28px;
}
.modal__budget{
  color: #FFFFFF;
  font-family: "Helvetica Neue Medium";
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}
.modal__budget-text{
  font-weight: 500;
  margin-bottom: 20px;
}
.modal__radio-group{
  font-family: "Helvetica Neue Regular";
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
}
.modal__radio-group input[type=radio]{
  margin-right: 12px;
}
.modal__radio-group label{
  margin-right: 40px;
}
.modal__signUp{
  background: var(--secondary-color);
  color: var(--text-color);
  font-family: "Helvetica Neue Medium";
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  padding: 25px auto;
  outline: none;
  border: none;
  min-height: 80px;
  width: 100%;
  margin-top: 40px;
  cursor: pointer;
}
.modal__signUp:hover{
  background: var(--secondary-hover-color);
}
</style>
