<template>
    <header class="header" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="container"> 
            <div class="menu">
                <img src="@/assets/brookfield_web/logo.svg" class="menu__logo">
                <nav class="nav"> 
                <a 
                    v-for="navItem in navItems" 
                    v-bind:key="navItem"
                    :href="`#${navItem}`" 
                    class="nav__item"
                    >{{navItem}}</a>
                </nav>
                <button class="btn menu__btn">Sign Up</button>
            </div>
        <div class="header__hero">
            <h1 class="header__title">Luxury Mott Haven Apartments</h1>
            <h2 class="header__subtitle">
            Sign up for a chance to win a discounted apartment at Bankside
            </h2>
            <button class="btn header__btn">Sign Up</button>
        </div>
        </div>
    </header>
</template>

<script>
import bgImage from "@/assets/brookfield_web/Main_bg.jpg"

export default {
    data () {
      return {
        bgImage,
        navItems: [
            'Building',
            'Apartments',
            'Neighbornhood',
            'Amenities',
            'Availability',
            'FAQ'
        ]
      }
    },
}
</script>

<style scoped>
.header{
    background-size: cover;
    min-height: 100vh;
    width: 100%;
}

.menu{  
    padding: 16px 0px 23px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    font-family: 'Helvetica Neue Medium';
    border-bottom: 1px solid rgba(255,255,255,0.4)
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
    color: var(--secondary-color);
}
.menu__btn{
    width: 136px;
    font-size: 15px;
}
.header__hero{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20%;
}
.header__title{
    font-family: 'Helvetica Neue Bold';
    color: var(--secondary-color);;
    font-size: 56px;
    margin-bottom: 24px;
}
.header__subtitle{
    font-family: 'Helvetica Neue Regular';
    font-weight: normal;
    color: rgba(255,255,255,0.8); 
    font-size: 20px;
    margin-bottom: 36px;
}
.header__btn{
    width: 200px;
    color: #1B2023;
}

</style>