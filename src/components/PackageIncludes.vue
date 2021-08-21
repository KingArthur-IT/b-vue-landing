<template>
    <div class="container ">
    <div class="includes">
        <div class="includes__title">
            Amenity package includes:
        </div>
        <div class="includes__wrapper">
            <ul class="includes__list">
                <li class="includes__item"
                    v-for="listItem in packageList1" v-bind:key="listItem"
                    :style="{ listStyleImage: `url(${listImg})` }"
                >
                    {{listItem}}
                </li>
            </ul>
            <ul class="includes__list">
                <li class="includes__item"
                    v-for="listItem in packageList2" v-bind:key="listItem"
                    :style="{ listStyleImage: `url(${listImg})` }"
                >
                    {{listItem}}
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
        packageList1: ['24/7 Door Attendant', 'Double-Height Lobby', 
        'Resident Lounges', 'Co-working Sky Lounge', 
        'Rooftop Pool and Barbeque Deck', 'Outdoor Terraces'],     
        packageList2: ['Double-Height Fitness Center', 'Game Room', 
        'Playroom', 'Makerspace', 
        'Parking Garage', 'Valet Parking'],     
      }
    },
}
</script>

<style scoped>
.includes{
    border-top: 1px solid var(--text-color);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 24px;
    margin: 100px;
}
.includes__title{
    font-family: "Helvetica Neue Medium";
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
}
.includes__wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.includes__list{
    color: var(--text-color);
    font-family: "Helvetica Neue Regular";
    font-size: 14px;
    line-height: 25px;
}
.includes__item{
    margin-bottom: 4px;    
}
@media screen and (max-width: 1100px) {
    .includes{
        margin: 0px;
        margin-bottom: 120px;
    }
}
@media screen and (max-width: 950px) {
    .includes__wrapper{
        -ms-flex-preferred-size: 60%;
        flex-basis: 60%;
    }
    li{
        margin-left: 30px;
    }
}
@media screen and (max-width: 800px) {
    .includes__wrapper{
        -ms-flex-preferred-size: 70%;
        flex-basis: 70%;
    }
}
</style>