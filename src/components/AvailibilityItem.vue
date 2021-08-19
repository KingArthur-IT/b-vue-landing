<template>
    <div class="availible__item">
        <img :src="`@/assets/brookfield_web/${{image}}`" alt="" class="availible__plan">
        <div class="availible__title">
            <div class="availible__name"></div>
            <div class="availible__cost"></div>
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
        image: {
            type: String
        }, 
    }
}
</script>