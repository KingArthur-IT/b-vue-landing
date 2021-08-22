<template>
    <div class="discount">
        <h3 class="discount__title">{{title}}</h3>
        <p class="discount__text">{{description}}</p>
        <button class="btn discount__btn">Sign Up</button>
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
.discount{
    font-family: "Helvetica Neue Regular";
    min-height: 321px;
    width: 100%;
    background-color: var(--primary-color);
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
}
.discount__title{
    color: var(--secondary-color);
    font-size: 48px;
    line-height: 56px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 18px;
}
.discount__text{
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 32px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 23px;
}
.discount__btn{
    width: 240px;
    color: var(--text-color);
}
@media screen and (max-width: 600px) {
    .discount__title{
        font-size: 34px;
        line-height: 44px;
        margin-bottom: 12px;
    }
    .discount__text{
        font-size: 14px;
        margin-bottom: 20px;
    }
    .discount{
        min-height: 260px;
    }
}
@media screen and (max-width: 350px) {
    .discount__title{
        font-size: 30px;
        margin-bottom: 8px;
    }
    .discount__text{
        text-align: center;
        line-height: 20px;
        width: 90%;
    }
}
</style>