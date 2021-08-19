<template>
    <div class="faq-item">
        <div class="faq-item__head">
            <h4 class="faq-item__title">{{question}}</h4>
            <img @click="show = !show" class="faq-item__icon" src="@/assets/brookfield_web/icn_plus.svg">
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
    border-top: 1px solid #1B2023;
    padding: 26px 0px;
}
.faq-item__head{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.faq-item__title{
    font-family: "Helvetica Neue Medium";
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
}
.faq-item__icon{
    cursor: pointer;
}
.faq-item__text{
    margin-top: 10px;
    font-size: 14px;
    line-height: 25px;
}
</style>