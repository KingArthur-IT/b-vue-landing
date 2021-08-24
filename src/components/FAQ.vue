<template>
    <div class="faq">
        <div class="faq__hero">
            <div class="faq__left">
                <h3 class="faq__title">Frequently Asked Questions</h3>
                <div class="faq__desr-group">
                    <p class="faq__description">If you have more questions, you can always reach out to us!</p>
                    <a class="faq__contact" href="mailto:email.address@mail.com">email.address@mail.com</a>
                    <a class="faq__contact" href="tel:718-879-3294">718-879-3294</a>
                </div>
            </div>
            <div class="faq__info">
                <FaqItem 
                    v-bind:question="`Is there a difference between the market-rate and affordable apartments?`"
                    v-bind:answer="`The affordable apartments are comparable in every way to the market-rate units, with the same spacious 
                    layout, high-end finishing and access to amazing amenities and services!`"
                    v-bind:id="1"
                    v-bind:expandedItem="expandedItem"
                    @setNewExpandItem="setNewExpandItemEvent"
                />
                <FaqItem 
                    v-bind:question="`How do I know if I qualify for an affordable apartment?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                    v-bind:id="2"
                    v-bind:expandedItem="expandedItem"
                    @setNewExpandItem="setNewExpandItemEvent"
                />
                <FaqItem 
                    v-bind:question="`How do I apply for an affordable apartment?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                    v-bind:id="3"
                    v-bind:expandedItem="expandedItem"
                    @setNewExpandItem="setNewExpandItemEvent"
                />
                <FaqItem 
                    v-bind:question="`How does the lottery work? What are my chances of being selected for an apartment?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                    v-bind:id="4"
                    v-bind:expandedItem="expandedItem"
                    @setNewExpandItem="setNewExpandItemEvent"
                />
                <FaqItem 
                    v-bind:question="`How long does the process take if I am selected? Isn't the process much more complicated than a market-rate unit?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                    v-bind:id="5"
                    v-bind:expandedItem="expandedItem"
                    @setNewExpandItem="setNewExpandItemEvent"
                />
                <FaqItem 
                    v-bind:question="`Does rent stabilized mean my rent can never be increased?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                    v-bind:id="6"
                    v-bind:expandedItem="expandedItem"
                    @setNewExpandItem="setNewExpandItemEvent"
                />
            </div>
        </div>
    </div>
</template>

<script>
import FaqItem from '@/components/FaqItem.vue'

export default {
    name: 'FAQ',
    components: {
        FaqItem
    },
    data () {
        return {
            expandedItem: -1
        }
    },
    methods: {
        setNewExpandItemEvent(param){
            this.expandedItem = param.id;
        }
    },
}
</script>

<style scoped>
.faq{
    background-color: var(--secondary-color);
    font-family: "Helvetica Neue Regular";
    color: var(--text-color);
}
.faq__hero{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 90px 120px;
}
.faq__left{
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.faq__title{    
    font-size: 48px;
    line-height: 56px;
    font-weight: normal;
    margin-bottom: 12px;
}
.faq__desr-group{
    display: block;
    flex-direction: column;
}
.faq__description{
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 12px;
}
.faq__contact{
    color: var(--primary-color);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    text-decoration: underline;
    margin-bottom: 12px;
    display: block;
}
.faq__info{
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
    border-bottom: 1px solid var(--text-color);
}
@media screen and (max-width: 1100px) {
    .faq__hero{
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .faq__left{
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 64px;
    }
    .faq__title{    
        margin-bottom: 0px;
        -ms-flex-preferred-size: 20%;
        flex-basis: 20%;
    }
    .faq__desr-group{
        -ms-flex-preferred-size: 30%;
        flex-basis: 30%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
}
@media screen and (max-width: 900px) {
    .faq__hero{
        padding: 64px 0px;
        width: 90%;
        margin: auto;
    }
    .faq__desr-group{
        -ms-flex-preferred-size: 35%;
        flex-basis: 35%;
    }
}
@media screen and (max-width: 500px) {
    .faq__left{
        flex-basis: 30%;
        flex-direction: column;
        width: 55%;
        margin-bottom: 64px;
    }
    .faq__title{    
        font-size: 34px;
        line-height: 40px;
        margin-bottom: 12px;
    }
    .faq__desr-group{
        align-self: flex-start;
    }
    .faq__contact:last-child{
        margin-bottom: 0px;
    }
    .faq__description{
        width: 120%;
    }
}
@media screen and (max-width: 350px) {
    .faq__title{    
        font-size: 30px;
        line-height: 38px;
    }
    .faq__left{
        width: 70%;
        margin-bottom: 44px;
    }
    .faq__hero{
        padding: 44px 0px 58px;
    }
}
</style>