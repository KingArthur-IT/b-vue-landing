<template>
    <div class="call-to-action">
        <div class="call-to-action__wrapper">
            <h3 class="call-to-action__title">{{title}}</h3>
            <p class="call-to-action__text">{{description}}</p>
            <button class="btn call-to-action__btn"
            @click="$emit('showModalEvent')"
            >Sign Up</button>
        </div>
    </div>
</template>

<script>

export default {
    data () {
      return {
                
      }
    },
    props: {
        title: {
            type: String
        }, 
        description: {
            type: String
        }
    }
}
</script>

<style scoped>
.call-to-action{
    font-family: "Helvetica Neue Regular";
    min-height: 350px;
    width: 100%;
    background-color: var(--primary-color);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.call-to-action__wrapper{
    width: 90%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 100px auto;
}
.call-to-action__title{
    color: var(--secondary-color);
    font-size: 48px;
    line-height: 56px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 18px;
}
.call-to-action__text{
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 26px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 23px;
}
.call-to-action__btn{
    width: 240px;
    color: var(--text-color);
}
@media screen and (max-width: 800px) {
    .call-to-action__wrapper{
        margin: 100px auto;
    }
}
@media screen and (max-width: 600px) {
    .call-to-action__wrapper{
        margin: 50px auto;
    }
    .call-to-action__title{
        font-size: 34px;
        line-height: 44px;
        margin-bottom: 12px;
    }
    .call-to-action__text{
        font-size: 14px;
        margin-bottom: 20px;
    }
    .call-to-action{
        min-height: 260px;
    }
}
@media screen and (max-width: 350px) {
    .call-to-action__wrapper{
        margin: 40px auto;
    }
    .call-to-action__title{
        font-size: 30px;
        margin-bottom: 8px;
    }
    .call-to-action__text{
        line-height: 20px;
        width: 90%;
    }
}
</style>