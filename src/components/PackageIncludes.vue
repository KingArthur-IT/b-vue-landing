<template>
    <div class="container ">
    <div class="includes">
        <div class="includes__title">
            Amenity package includes:
        </div>
        <div class="includes__wrapper">
            <ul class="includes__list">
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    24/7 Door Attendant
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Double-Height Lobby
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Resident Lounges
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Co-working Sky Lounge
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Rooftop Pool and Barbeque Deck
                </li>
                <li class="includes__item" 
                :style="{ listStyleImage: `url(${listImg})` }">
                    Outdoor Terraces
                </li>
            </ul>
            <ul class="includes__list">
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Double-Height Fitness Center
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Game Room
                </li>
                <li class="includes__item" 
                :style="{ listStyleImage: `url(${listImg})` }">
                    Playroom
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Makerspace
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Parking Garage
                </li>
                <li class="includes__item"
                :style="{ listStyleImage: `url(${listImg})` }">
                    Valet Parking
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import listImg from "@/assets/brookfield_web/icn_checkbox.svg"

export default {
    data () {
      return {
        listImg,        
      }
    },
}
</script>

<style scoped>
.includes{
    border-top: 1px solid #1B2023;
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    margin: 100px;
}
.includes__title{
    font-family: "Helvetica Neue Medium";
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    flex-basis: 30%;
}
.includes__wrapper{
    display: flex;
    flex-basis: 50%;
    justify-content: space-between;
}
.includes__list{
    color: #1B2023;
    font-family: "Helvetica Neue Regular";
    font-size: 14px;
    line-height: 25px;
}
.includes__item{
    margin-bottom: 4px;    
}
</style>