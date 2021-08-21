<template>
    <div class="container building">
        <p class="building__text">
            Overlooking the Mott Haven waterfront stands the brand new 
            Third at Bankside - a full service building buzzing with modern 
            charms. Experience the joys of contemporary apartment living, 
            all at a fraction of the market rate rent.
        </p>
        <p class="building__text">
            You’ll come home to breathtaking features, views of the City, 
            world class amenities, and a uniquely energetic neighborhood 
            in this newly constructed, no fee gem of a building.
        </p>

        <table>
            <tr v-for="data in tableData" v-bind:key="data.value">
                <th>{{data.description}}</th>
                <th>{{data.value}}</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
      return {
          tableData: [
            {description: 'Building Type', value: 'Luxury'},
            {description: 'Affordable Units', value: '138'},
            {description: 'Occupancy Begins', value: 'January 2022'},
          ],
      }
    },
}
</script>

<style scoped>
.building{
    font-family: 'Helvetica Neue Regular';
    padding: 200px 100px;
}
.building__text{
    font-size: 34px;
    margin-bottom: 32px;
    line-height: 48px;
}
table{
    border-collapse: collapse;
    font-family: 'Helvetica Neue Medium';
    margin-top: 48px;
    margin-left: auto;
}
tr{    
    height: 32px;
}
th{
    border-bottom: 1px solid var(--text-color);
    width: 345px;
    font-size: 20px;
    line-height: 32px;
    font-weight: normal;
    padding: 16px 0px;
}
th:first-child{
    text-align: left;
}
th:last-child{
    text-align: right;
}
@media screen and (max-width: 1100px) {
    .building{
        padding: 120px 0px;
    }
    .building__text{
        font-size: 29px;
    }
    th{
        width: 260px;
    }
}
</style>