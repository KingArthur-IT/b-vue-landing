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
    margin-top: 200px;
    margin-bottom: 200px;
    padding: 0px 100px;
}
.description__text{
    color: var(--text-color);
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
@media screen and (max-width: 1100px) {
    .description{
        margin-top: 120px;
        margin-bottom: 120px;
        padding: 0px;
    }
    .description__text{
        font-size: 29px;
    }
}
</style>