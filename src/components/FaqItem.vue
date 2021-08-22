<template>
    <div class="faq-item">
        <div class="faq-item__head">
            <h4 class="faq-item__title">{{question}}</h4>
            <div @click="show = !show" class="faq-item__icon-wrapper">
                <img class="faq-item__icon" src="@/assets/brookfield_web/minus-solid.svg">
                <img class="faq-item__icon" v-bind:class="{rotate: !show}"
                src="@/assets/brookfield_web/minus-solid.svg">
            </div>            
        </div>                    
        <transition-expand>                    
            <div v-if="show" class="faq-item__text">
                {{answer}}
            </div>                    
        </transition-expand>
    </div>
</template>

<script>
import {TransitionExpand} from 'vue-transition-expand'
import 'vue-transition-expand/dist/vue-transition-expand.css'

export default {
    name: 'FaqItem',
    components: {
        TransitionExpand
    },
    data () {
        return {
            show: false,
        }
    },
    props: {
        question: {
            type: String
        },
        answer: {
            type: String
        }
    }
}
</script>

<style scoped>
.faq-item{
    border-top: 1px solid var(--text-color);
    padding: 26px 0px;
}
.faq-item__head{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.faq-item__title{
    font-family: "Helvetica Neue Medium";
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
}
.faq-item__icon-wrapper{
    cursor: pointer;
    width: 22px;
    height: 20px;
    position: relative;
}
.faq-item__icon{
    cursor: pointer;
    width: 22px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transition: -webkit-transform 0.5s ease-in-out;
    transition: -webkit-transform 0.5s ease-in-out;
    -o-transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in;
    transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;
}
.rotate{
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.faq-item__text{
    margin-top: 10px;
    font-size: 14px;
    line-height: 25px;
}
@media screen and (max-width: 500px) {
    .faq-item__title{
        font-size: 18px;
        line-height: 25px;
    }
    .faq-item__icon{
        width: 20px;
        height: 20px;
    }
    .faq-item__text{
        margin-top: 8px;
        font-size: 14px;
        line-height: 25px;
    }
}
@media screen and (max-width: 350px) {
    .faq-item__title{
        font-size: 16px;
        line-height: 22px;
    }
}
</style>