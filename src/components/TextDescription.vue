<template>
    <div class="container description">
        <p class="description__text">
            {{firstText}}
        </p>
        <p class="description__text">
            {{secondText}}
        </p>
        <p class="description__text underline">
            {{underlinedText}}
        </p>
    </div>
</template>

<script>

export default {
    data () {
      return {
                
      }
    },
    props: {
        firstText: {
            type: String
        }, 
        secondText: {
            type: String
        }, 
        underlinedText: {
            type: String
        }
    }
}
</script>


<style scoped>
.description{
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 0px 100px;
}
.description__text{
    color: #1B2023;
    font-family: "Helvetica Neue Regular";
    font-size: 34px;
    font-weight: 500;
    line-height: 46px;
    margin-bottom: 32px;
}
.underline{
    font-family: "Helvetica Neue Medium";
    text-decoration: underline;
}
</style>