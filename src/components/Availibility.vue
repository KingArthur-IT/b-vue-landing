<template>
    <div class="availible">
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_1.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">Studio</div>
                <div class="availible__cost">$2,000</div>
            </div>
            <Table 
                v-bind:tableData="tableData1"
            />
        </div>
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_2.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">One-Bedroom</div>
                <div class="availible__cost">$2,000</div>
            </div>

        </div>
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_3.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">Two-Bedroom</div>
                <div class="availible__cost">$2,000</div>
            </div>

        </div>
        <div class="availible__item">
            <img src="@/assets/brookfield_web/plan_4.jpg" alt="" class="availible__plan">
            <div class="availible__title">
                <div class="availible__name">Three-Bedroom</div>
                <div class="availible__cost">$2,000</div>
            </div>

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
          tableData1: [
              {id: 1, size: '1 person', min: '$63,429', max: '$108,660'},
              {id: 1, size: '2 people', min: '$63,429', max: '$$124,150'},
          ]
      }
    },
}
</script>

<style scoped>
.availible{
    display: flex;
    flex-wrap: wrap;
    margin-top: 200px;
    margin-bottom: 200px;
}
.availible__item{
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    padding: 80px 120px;
    align-content: center;
    justify-content: center;
}
.availible__item:nth-child(n+1){
    border-right: 1px solid #3d4e58;
}
.availible__item:nth-child(1), .availible__item:nth-child(2){
    border-bottom: 1px solid #3d4e58;
}
.availible__plan{
    height: 280px;
    width:  280px;
    margin: auto;
    margin-bottom: 100px;
}
.availible__title{
    font-family: "Helvetica Neue Medium";
    font-size: 34px;
    font-weight: 500;
    line-height: 46px;
    display: flex;
    justify-content: space-between;
}
</style>