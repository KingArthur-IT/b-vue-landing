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
    background-color: #3B8589;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.discount__title{
    color: #FFC869;
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
    color: #1B2023;
}
</style>