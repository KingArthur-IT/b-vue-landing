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
@media screen and (max-width: 1100px) {
    table{
        margin-top: 36px;
    }
}
@media screen and (max-width: 450px) {
    table{
        margin-top: 24px;
    }
}
@media screen and (max-width: 350px) {
    th{
        padding-right: 30px;
        line-height: 18px;
    }
    th:last-child{
        padding-right: 0px;
    }
}
</style>