<template>
  <div id="app">
    <Header />
    <Building />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Building from '@/components/Building.vue'
//import Slider from './components/Slider.vue'

export default {
  name: 'App',
  components: {
    Header, Building//Slider
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
  font-family: 'Helvetica Neue Medium';
}
.container{
  max-width: 1200px;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
