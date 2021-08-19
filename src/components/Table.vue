<template>
    <table>
        <tr>
            <th>Household size</th>
            <th>Min. Income</th>
            <th>Max. Income</th>
        </tr>
        <tr v-for="data in tableData" v-bind:key="data.id">
            <th>{{data.size}}</th>
            <th>{{data.min}}</th>
            <th>{{data.max}}</th>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'Table',
    data () {
        return {
        }
    },
    props: {
        tableData: {
            type: Array
        }
    }
}
</script>

<style scoped>
table{
    border-collapse: collapse;
    font-family: 'Helvetica Neue Regular';
    margin-top: 48px;
    margin-left: auto;
}
tr{    
    height: 32px;
}
th{
    border-bottom: 1px solid #1B2023;
    width: 345px;
    font-size: 14px;
    line-height: 32px;
    font-weight: normal;
    padding: 16px 0px;
}
tr:last-child th{
    border-bottom: none;
}
th:first-child{
    text-align: left;
}
th:last-child{
    text-align: right;
}
</style>