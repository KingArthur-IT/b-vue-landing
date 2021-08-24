<template>
    <div>
        <modal 
            name="SignUpModal" 
            :adaptive="true" 
            :width="getModalWidth()" 
            :height="getModalHeight()"
            >
        <!-- Main sign up block-->
        <form class="modal" v-if="isSuccess == false">
            <button class="modal__close" @click="hideModal">
              <span 
                class="icon-icn_menu_close1" 
                @mouseover="hoverClose"
                @mouseleave="hoverClose"
                v-bind:class="{'icon-icn_menu_close1_hover': isHoverClose, 'icon-icn_menu_close1': !isHoverClose}"
              ></span>
            </button>
            <div class="modal__hero">
            <h3 class="modal__title">Sign Up</h3>
            <div class="modal__inputs">
                <div class="input-wrapper">
                <div class="inputInfo inputName" :class="{inputFullSize: inputFocused.firstName}">First Name</div>
                <input type="text" name="FirstName" :placeholder="inputFocused.firstName ? '' : 'First Name'" 
                v-model="firstName" 
                :class="{error: validation.hasError('firstName')}"
                @focus="inputFocused.firstName = true" @blur="inputFocused.firstName = false"
                >
                <div class="inputInfo validateMessage">{{ validation.firstError('firstName') }}</div>
                </div>
                <div class="input-wrapper">
                <div class="inputInfo inputName" :class="{inputFullSize: inputFocused.lastName}">Last Name</div>
                <input type="text" name="LastName" :placeholder="inputFocused.lastName ? '' : 'Last Name'" 
                v-model="lastName" :class="{error: validation.hasError('lastName')}"
                @focus="inputFocused.lastName = true" @blur="inputFocused.lastName = false">
                <div class="inputInfo validateMessage">{{ validation.firstError('lastName') }}</div>
                </div>
                <div class="input-wrapper">
                <div class="inputInfo inputName" :class="{inputFullSize: inputFocused.email}">Email</div>
                <input type="email" name="Email" :placeholder="inputFocused.email ? '' : 'Email'" 
                v-model="email" :class="{error: validation.hasError('email')}"
                @focus="inputFocused.email = true" @blur="inputFocused.email = false">
                <div class="inputInfo validateMessage">{{ validation.firstError('email') }}</div>
                </div>
                <div class="input-wrapper">
                <div class="inputInfo inputName" :class="{inputFullSize: inputFocused.phone}">Phone</div>
                <input type="tel" name="Phone" :placeholder="inputFocused.phone ? '' : 'Contact Phone'"
                v-model="phone" :class="{error: validation.hasError('phone')}"
                @focus="inputFocused.phone = true" @blur="inputFocused.phone = false">
                <div class="inputInfo validateMessage">{{ validation.firstError('phone') }}</div>
                </div>                   
            </div>
            <div class="modal__budget">
                <h4 class="modal__budget-text">
                Your household income
                </h4>
                <div class="modal__radio-group">
                <div class="modal__radio-group-item">
                        <input type="button" id="IncomeRadio1"
                        :style="{ backgroundImage: `url(${getModalRadio(1)})` }"
                        @mouseover="setHover(1)"
                        @mouseleave="delHover()"
                        @click="changeToggle(1)"
                        >
                        <label for="IncomeRadio1">Under $100k</label>
                </div>
                <div class="modal__radio-group-item">
                        <input type="button" id="IncomeRadio2"
                        :style="{ backgroundImage: `url(${getModalRadio(2)})` }"
                        @mouseover="setHover(2)"
                        @mouseleave="delHover()"
                        @click="changeToggle(2)"
                        >
                        <label for="IncomeRadio2">About $100k</label>
                </div>             
                <div class="modal__radio-group-item">
                        <input type="button" id="IncomeRadio3"
                        :style="{ backgroundImage: `url(${getModalRadio(3)})` }"
                        @mouseover="setHover(3)"
                        @mouseleave="delHover()"
                        @click="changeToggle(3)"
                        >
                        <label for="IncomeRadio3">Above $100k</label>
                </div>
                </div>
            </div>
            </div>
            <button class="modal__signUp" @click="signUp" href="#">Sign Up</button>
        </form>
        <!-- Success text block-->
        <div class="modal" v-if="isSuccess == true">
             <button class="modal__close" @click="hideModal">
                <span 
                  class="icon-icn_menu_close1" 
                  @mouseover="hoverClose"
                  @mouseleave="hoverClose"
                  v-bind:class="{'icon-icn_menu_close1_hover': isHoverClose, 'icon-icn_menu_close1': !isHoverClose}"
                ></span>
            </button>
            <div class="modal__hero">
                <h3 class="modal__title">Success</h3>
                <p class="modal__paragraf">
                    Your application is accepted. Thank for taking part.
                    Our experts will contact you shortly.
                </p>
            </div>        
        </div>
        <!-- Error block-->
        <div class="modal" v-if="isSuccess == undefined">
             <button class="modal__close" @click="hideModal">
                <span 
                  class="icon-icn_menu_close1" 
                  @mouseover="hoverClose"
                  @mouseleave="hoverClose"
                  v-bind:class="{'icon-icn_menu_close1_hover': isHoverClose, 'icon-icn_menu_close1': !isHoverClose}"
                ></span>
            </button>
            <div class="modal__hero">
                <h3 class="modal__title">Oppps</h3>
                <p class="modal__paragraf">
                    It looks like somethink went wrong.
                    Please, try again later.
                </p>                
            </div>     
            <button class="modal__signUp" @click="backToSignUp">Sign Up</button>   
        </div>
        </modal>
    </div>
</template>

<script>
//validator
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
//custom images for radio button
import RadioDefauilt from "@/assets/brookfield_web/icn_radio_default.svg"
import RadioCheched from "@/assets/brookfield_web/icn_radio_checked.svg"
import RadioHover from "@/assets/brookfield_web/icn_radio_hover.svg"

export default {
  name: 'MainModalForm',
  data () {
      return {
        //validator data
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        //data for custom radio btns in modal form
        RadioDefauilt, RadioCheched, RadioHover,
        modelRadioBtns: {
          hover: -1,
          checked: 2
        },
        inputFocused: {
          firstName: false,
          lastName: false,
          email: false,
          phone: false
        },
        //is form is success
        isSuccess: false,
        isHoverClose: false,
      }
    },
    props: {
        isShow: Boolean, //show/hide the modal form
    },
    watch: {
        isShow: function(){
          if (this.isShow){
              this.$modal.show('SignUpModal');
          }
          else
              this.$modal.hide('SignUpModal');
        }
    },
  methods: {
    showModal () {
      this.$modal.show('SignUpModal');
    },
    hideModal (e) {
      this.$emit('closeModal');
      this.isSuccess = false;
      e.preventDefault(); 
    },
    //sign up btn evnt
    signUp(e){
      //rezult of validation
      let rezValue = this.$validate()
        .then(function (success) {
          if (success) {    
              e.preventDefault(); 
              return true;                
          }
        });
      rezValue
      .then(result => this.isSuccess = result);

      //show success or error block 
      if (this.success == true)
          document.getElementsByClassName('vm--modal')[0].style.height = '270px';
      if (this.success == undefined)
          document.getElementsByClassName('vm--modal')[0].style.height = '310px';
        
    },
    //method to back to sign up block
    backToSignUp(){
        this.isSuccess = false;
        document.getElementsByClassName('vm--modal')[0].style.height = this.getModalHeight() + 'px';
    },
    //calculate width/height of modal win    
    getModalWidth(){
      if (window.innerWidth < 650)
        400;
      if (window.innerWidth < 800)
        return 600;
      return 700; //default
    },
    getModalHeight(){
        if (window.innerWidth < 600)
        return 520;
      if (window.innerWidth < 650)
        return 400;
      if (window.innerWidth < 800)
        return 475;
      return 580; //default
    },
    //methods for custom radio btns in modal form
    getModalRadio(el){
      if (this.modelRadioBtns.checked == el )
        return RadioCheched;
      if (this.modelRadioBtns.hover == el)
        return RadioHover;
      return RadioDefauilt;
    },
    setHover(el){
      this.modelRadioBtns.hover = el;
    },
    delHover(){
      this.modelRadioBtns.hover = -1;
    },
    changeToggle(el){
      this.modelRadioBtns.checked = el;
    },
    hoverClose() {
        this.isHoverClose = !this.isHoverClose;       
      },
  },
  validators: {
      email: function (value) {
        return Validator.value(value).required().email();
      },
      firstName: function(value) {
        return Validator.value(value).required().regex('^[A-Za-z]*$', 'Must only contain latin alphabetic characters.');
      },
      lastName: function(value) {
        return Validator.value(value).required().regex('^[A-Za-z]*$', 'Must only contain latin alphabetic characters.');
      },
      phone: function(value) {
        return Validator.value(value).required().digit().length(10);
      },
    }
}
</script>

<style scoped>
.vm--overlay {
  background:rgba(2,21,22, 0.6) !important; 
}
.vm--modal{
  background: var(--primary-color) !important;
}
.modal{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.modal__close{
  background: transparent;
  border: none;
  cursor: pointer;
  -ms-flex-item-align: end;
      align-self: flex-end;
  padding: 16px 16px 0px;
}
.modal__hero{
  font-family: "Helvetica Neue Regular";
  font-weight: normal;
  padding: 0px 48px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.input-wrapper{
  position: relative;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus
{
  background-color: var(--primary-color) !important;
  border: none;
  border-bottom: 2px solid var(--secondary-hover-color);
  -webkit-text-fill-color: rgba(255,255,255,0.5);
  -webkit-box-shadow: 0 0 0px 0px #000 inset;
  -webkit-transition: background-color 1000s ease-in-out 0s;
  -o-transition: background-color 1000s ease-in-out 0s;
  transition: background-color 1000s ease-in-out 0s;
}
.inputInfo{
  position: absolute;
  font-size: 0px;
  opacity: 0.8;
  -webkit-transition: font-size 0.1s ease-in;
  -o-transition: font-size 0.1s ease-in;
  transition: font-size 0.1s ease-in;
}
.inputFullSize{
  font-size: 12px;
}
.inputName{  
  top: -20px;  
}
.validateMessage{
  bottom: 20px;
  font-size: 12px;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: normal;
}
#IncomeRadio1, #IncomeRadio2, #IncomeRadio3
{
    width: 20px;
    border: none;
    outline: none;
    height: 20px;
    background: transparent;
    margin-right: 12px;
    cursor: pointer;
    background-image: url(${RadioDefauilt});
}
.modal__radio-group-item{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.modal__radio-group label{
  margin-right: 40px;
}
.modal__signUp{
  position: absolute;
  bottom: 0;
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
.modal__paragraf{
    color: #FFFFFF;
    font-family: "Helvetica Neue Regular";
    font-size: 20px;
    line-height: 28px;
    margin-top: 48px;
    margin-bottom: 20px;
}
.icon-icn_menu_close1:before {
  content: "\e902";
  color: #fff;
  font-size: 20px;
}
.icon-icn_menu_close1_hover:before {
  content: "\e902";
  color: var(--secondary-color);
}
@media screen and (max-width: 800px) {
    .modal__hero{
        padding: 0px 36px;
    }
    .modal__title
    { 
        font-size: 36px;
        line-height: 48px;
    }
    .modal__inputs{
        padding: 36px 0px 28px;
    }
    .modal__inputs input{
        min-width: 100px;
        margin-bottom: 24px;
    }
    .modal__budget{
        font-size: 18px;
        line-height: 26px;
    }
    .modal__radio-group label{
        margin-right: 20px;
    }
    .validateMessage{
        bottom: 0px;
    }
}
@media screen and (max-width: 650px) {
    .modal__hero{
        padding: 0px 48px;
    }
    .modal__inputs{
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .modal__title{ 
      font-size: 32px;
      line-height: 29px;
    }
    .modal__inputs input{
      min-height: auto;
      font-size: 16px;
    }
    .modal__inputs input::placeholder{
      font-size: 16px;
      line-height: 18px;
    }
    .modal__budget{
      font-size: 16px;
    }
    .modal__signUp{
      min-height: 60px;
    }
}
@media screen and (max-width: 600px) {
    .modal__hero{
        padding: 0px 48px;
    }
    .modal__inputs{
        padding: 20px 0px 10px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .modal__inputs input{
        min-width: 100px;
        margin-bottom: 26px;
    }
    .inputName{  
        top: -12px;  
    }
    .modal__radio-group{
        display: block;
    }
    .modal__budget-text{
        margin-bottom: 10px;
    }
    .modal__radio-group-item{
        margin-bottom: 5px;
    }
    .modal__signUp{
        margin-top: 20px;
    }
}
@media screen and (max-width: 350px) {
    .modal__hero{
        padding: 0px 36px;
    }
}
@media screen and (max-width: 375px) {
    .modal__paragraf{
        margin-top: 28px;
        margin-bottom: 20px;
    }
}
</style>