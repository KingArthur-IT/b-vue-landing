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
            <tr>
                <th>Building Type</th>
                <th>Luxury</th>
            </tr>
            <tr>
                <th>Affordable Units</th>
                <th>138</th>
            </tr>
            <tr>
                <th>Occupancy Begins</th>
                <th>January 2022</th>
            </tr>
        </table>
    </div>
</template>

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
}
tr{
    
    height: 32px;
    padding-bottom: 16px;
}
th{
    border-bottom: 1px solid #1B2023;
}
</style>