<template>
    <div class="faq">
        <div class="faq__hero">
            <div class="faq__left">
                <h3 class="faq__title">Frequently Asked Questions</h3>
                <p class="faq__description">If you have more questions, you can always reach out to us!</p>
                <a class="faq__contact" href="mailto:email.address@mail.com">email.address@mail.com</a>
                <a class="faq__contact" href="tel:718-879-3294">718-879-3294</a>
            </div>
            <div class="faq__info">
                <FaqItem 
                    v-bind:question="`Is there a difference between the market-rate and affordable apartments?`"
                    v-bind:answer="`The affordable apartments are comparable in every way to the market-rate units, with the same spacious 
                    layout, high-end finishing and access to amazing amenities and services!`"
                />
                <FaqItem 
                    v-bind:question="`How do I know if I qualify for an affordable apartment?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                />
                <FaqItem 
                    v-bind:question="`How do I apply for an affordable apartment?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                />
                <FaqItem 
                    v-bind:question="`How does the lottery work? What are my chances of being selected for an apartment?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                />
                <FaqItem 
                    v-bind:question="`How long does the process take if I am selected? Isn't the process much more complicated than a market-rate unit?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
                />
                <FaqItem 
                    v-bind:question="`Does rent stabilized mean my rent can never be increased?`"
                    v-bind:answer="`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quod illo nulla quos. 
                    Debitis, pariatur. Cum, possimus voluptate iste fuga minus expedita dicta saepe, quo tempore delectus est? Fuga!`"
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
        }
    },
}
</script>

<style scoped>
.faq{
    background-color: #FFC869;
    font-family: "Helvetica Neue Regular";
    color: #1B2023;
}
.faq__hero{
    display: flex;
    justify-content: space-between;
    padding: 90px 120px;
}
.faq__left{
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
}
.faq__title{    
    font-size: 48px;
    line-height: 56px;
    font-weight: normal;
    margin-bottom: 12px;
}
.faq__description{
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 12px;
}
.faq__contact{
    color: #3B8589;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    text-decoration: underline;
    margin-bottom: 12px;
}
.faq__info{
    flex-basis: 60%;
    border-bottom: 1px solid #1B2023;
}
</style>