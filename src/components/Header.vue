<template>
    <header class="header" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="mobileMenu"
            :style="{transform: menuTranslate}"      
        >
            <div class="mobileMenu__wrapper"> 
                <a class="mobileMenu__item"
                v-for="navItem in this.navItems" v-bind:key="navItem"
                :href="`#${navItem}`" 
                @click="closeMobileMenu"
                >{{navItem}}</a>
            </div>
        </div>
        <div class="container"> 
            <div class="menu">
                <img src="@/assets/brookfield_web/logo.svg" class="menu__logo">
                <nav class="nav"
                    v-if="windowWidth > BurgerShowBrakepoint"
                > 
                <a 
                    v-for="navItem in this.navItems" 
                    v-bind:key="navItem"
                    :href="`#${navItem}`" 
                    class="nav__item"
                    >{{navItem}}</a>
                </nav>
                <button class="btn menu__btn" 
                    v-if="windowWidth > BurgerShowBrakepoint"
                    @click="$emit('showModalEvent')"
                >
                Sign Up
                </button>
                <div 
                    class="burger"
                    @mouseover="hover"
                    @mouseleave="hover"
                    v-if="windowWidth < BurgerShowBrakepoint"
                    @click="burgerClick"                    
                >
                    <VueCoolBurger                         
                        :color=burgerColor
                        :cross-color=burgerColor
                        id="vueBurger"
                    />
                </div>
            </div>
            <div class="header__hero">
                <h1 class="header__title">{{title}}</h1>
                <h2 class="header__subtitle">{{subtitle}}</h2>
                <button class="btn header__btn" 
                @click="$emit('showModalEvent')"
                >Sign Up</button>
            </div>
        </div>
    </header>
</template>

<script>
//bg image for header
import bgImage from "@/assets/brookfield_web/Main_bg.jpg"
//burger
import VueCoolBurger from "vue-cool-burger";

export default {
    data () {
      return {
        bgImage, //background image
        isBurgerHover: false, 
        windowWidth: window.innerWidth,
        BurgerShowBrakepoint: 900,
        isMobileMenuOpened: false,
        menuTranslate: 'translateY(-100%)',
        burgerClickCounter: 0, //one click on burger send two events,
      }
    },    
    props: {
        title: String,
        subtitle: String,
        navItems: Array
    },
    components: {
        VueCoolBurger
    },
    methods: {
        hover() {
            this.isBurgerHover = !this.isBurgerHover;
        },
        resizeEvent(){
            this.windowWidth = window.innerWidth;
        },
        burgerClick(){
            this.burgerClickCounter++;
            if (this.burgerClickCounter == 2){
                this.burgerClickCounter = 0;
                if (this.menuTranslate == 'translateY(-100%)')
                    this.menuTranslate = 'translateY(0)';
                else
                    this.menuTranslate = 'translateY(-100%)';
            //to aviod overflow of menu if it is longer than header
            let headerH = document.getElementsByClassName('header')[0].getBoundingClientRect().height;
            let mobileMenuH = document.getElementsByClassName('mobileMenu')[0].getBoundingClientRect().height;
            if (headerH > mobileMenuH){
                document.getElementsByClassName('mobileMenu')[0].style.bottom = '0';
            }
            else 
                document.getElementsByClassName('mobileMenu')[0].style.bottom = 'auto';
            }        
        },
        closeMobileMenu(){
            document.getElementById('vueBurger').click();
            this.burgerClick();
        },
    },
    computed: {
        burgerColor: function(){
            if (this.isBurgerHover)
                return '#FFC869';
            else
                return '#ffffff'
        }
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
.burger{
    height: 35px;
    width: 35px;
}
.vue-cool-burger{
    cursor: pointer;
}
.header{
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    position: relative;
}
.menu{  
    padding: 16px 0px 23px; 
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex; 
    -webkit-box-pack: justify; 
    -ms-flex-pack: justify; 
    justify-content: space-between; 
    -webkit-box-align: center; 
    -ms-flex-align: center; 
    align-items: center;
    font-family: 'Helvetica Neue Medium';
    border-bottom: 1px solid rgba(255,255,255,0.4);
    z-index: 10;
    position: relative;
}
.menu__logo{ 
    height: 100%;
}
.nav__item{ 
    color: rgba(255,255,255,0.9); 
    text-decoration: none;
    margin-left: 35px;
    font-size: 15px;
}
.nav__item:hover{
    color: var(--secondary-hover-color);
}
.menu__btn{
    width: 136px;
    font-size: 15px;
}
.header__hero{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    margin: auto;
    margin-top: 22%;    
    width: 90%;
}
.header__title{
    font-family: 'Helvetica Neue Bold';
    color: var(--secondary-color);
    font-size: 56px;
    margin-bottom: 24px;
}
.header__subtitle{
    font-family: 'Helvetica Neue Regular';
    font-weight: normal;
    color: rgba(255,255,255,0.8); 
    font-size: 20px;
    margin-bottom: 36px;
    line-height: 28px;
}
.header__btn{
    width: 200px;
    color: var(--text-color);
}
.mobileMenu{
    position: absolute;
    background-color: var(--primary-color);
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    z-index: 2;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: -webkit-transform 0.5s ease-in;
    transition: -webkit-transform 0.5s ease-in;
    -o-transition: transform 0.5s ease-in;
    transition: transform 0.5s ease-in;
    transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;
}
.mobileMenu__wrapper{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 20%;
}
.mobileMenu__item{
    font-family: 'Helvetica Neue Bold';
    color: var(--secondary-color);
    font-size: 56px;
    font-weight: bold;
    line-height: 69px;   
    text-decoration: none;
    margin-bottom: 48px;
}
@media screen and (max-width: 600px) {
    .header__title{
        font-size: 50px;
        margin-bottom: 20px;
    }
    .header__subtitle{
        font-size: 18px;
        margin-bottom: 24px;
        line-height: 26px;
    } 
    .burger{
        height: 24px;
        width: 24px;
    }
    .header__hero{  
        margin-top: 25%;    
        width: 75%;
    }
    .header{
        background-position: 33%;
    }
    .header__subtitle{
        width: 110%;
    }
    .mobileMenu__item{
        font-size: 48px;
        line-height: 58px;   
        margin-bottom: 40px;
    }
    .mobileMenu__wrapper{
        margin-top: 35%;
    }
}
@media screen and (max-width: 360px) {
    .header__title{
        font-size: 44px;
        margin-bottom: 16px;
    }
    .header__subtitle{
        font-size: 16px;
        line-height: 22px;
    } 
    .header__hero{  
        margin-top: 20%;    
        width: 80%;
    }
    .mobileMenu__item{
        font-size: 36px;
        line-height: 52px;   
        margin-bottom: 16px;
    }
}
</style>