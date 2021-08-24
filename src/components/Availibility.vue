<template>
    <div class="availible">
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_1.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">Studio</div>
                <div class="availible__cost">$2,000</div>
            </div>
            <Table 
                v-bind:tableData="tableStudioData"
            />
        </div>
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_2.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">One-Bedroom</div>
                <div class="availible__cost">$2,000</div>
            </div>
            <Table 
                v-bind:tableData="tableOneBedroomData"
            />
        </div>
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_3.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">Two-Bedroom</div>
                <div class="availible__cost">$2,000</div>
            </div>
            <Table 
                v-bind:tableData="tableTwoBedroomData"
            />
        </div>
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_4.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">Three-Bedroom</div>
                <div class="availible__cost">$2,000</div>
            </div>
            <Table 
                v-bind:tableData="tableThreeBedroomData"
            />
        </div>
    </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
    name: 'Availibility',
  components: {
      Table
  },
  data () {
      return {
          tableStudioData: [
              {id: 1, size: '1 person', min: '$63,429', max: '$108,660'},
              {id: 2, size: '2 people', min: '$63,429', max: '$124,150'},
          ],
          tableOneBedroomData: [
              {id: 1, size: '1 person', min: '$78,686', max: '$108,660'},
              {id: 2, size: '2 people', min: '$78,686', max: '$124,150'},
              {id: 3, size: '3 people', min: '$78,686', max: '$124,150'},
          ],
          tableTwoBedroomData: [
              {id: 1, size: '2 people', min: '$95,143', max: '$124,150'},
              {id: 2, size: '3 people', min: '$95,143', max: '$139,620'},
              {id: 3, size: '4 people', min: '$95,143', max: '$155,090'},
              {id: 4, size: '5 people', min: '$95,143', max: '$167,570'},
          ],
          tableThreeBedroomData: [
              {id: 1, size: '3 people', min: '$109,715', max: '$139,620'},
              {id: 2, size: '4 people', min: '$109,715', max: '$155,090'},
              {id: 3, size: '5 people', min: '$109,715', max: '$167,570'},
              {id: 5, size: '6 people', min: '$109,715', max: '$179,920'},
              {id: 6, size: '7 people', min: '$109,715', max: '$192,400'},
          ],
      }
    },
}
</script>

<style scoped>
.availible{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 200px;
    margin-bottom: 200px;
}
.availible__item{
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 80px 120px;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.availible__item:nth-child(2n+1){
    border-right: 1px solid var(--text-color);
}
.availible__item:nth-child(1), .availible__item:nth-child(2){
    border-bottom: 1px solid var(--text-color);
}
.availible__plan{
    height: 280px;
    width:  280px;
    margin: auto;
    margin-top: 0;
    margin-bottom: 100px;
}
.availible__title{
    font-family: "Helvetica Neue Medium";
    font-size: 34px;
    font-weight: 500;
    line-height: 46px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
@media screen and (max-width: 1200px) {
    .availible{
        margin-top: 30px;
        margin-bottom: 40px;
    }
    .availible__item{
        padding: 80px 90px;
    }
}
@media screen and (max-width: 1100px) {
    .availible__item{
        -ms-flex-preferred-size: 90%;
        flex-basis: 90%;
        margin: auto;
        border: none;
        border-bottom: 1px solid var(--text-color);
    }
    .availible__item:nth-child(n+1){
        border-right: none;
    }
    .availible__plan{
        margin-bottom: 64px;
    }
    .availible__item:last-child{
        border-bottom: none;
    }
}
@media screen and (max-width: 600px) {
    .availible{
        margin-top: 16px;
    }
    .availible__item{
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        margin: 0;
        padding: 64px 16px;
    }
    .availible__plan{
        height: 200px;
        width:  200px;
        margin-bottom: 48px;
    }
}
@media screen and (max-width: 450px) {
    .availible__title{
        font-size: 24px;
    }
}
@media screen and (max-width: 320px) {
    .availible{
        margin-top: 0px;
    }
    .availible__item{
        padding: 56px 16px;
    }
    .availible__plan{
        height: 140px;
        width:  140px;
        margin-bottom: 44px;
    }
}
</style>