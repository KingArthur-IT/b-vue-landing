<template>
    <footer class="footer">
        © Copyright 2021 MGNY Consulting Corp. All Rights Reserved
    </footer>
</template>

<style scoped>
.footer{
    padding: 20px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    width: 100%;
    background-color: var(--primary-color);
    font-family: "Helvetica Neue Regular";
    font-size: 14px;
    line-height: 20px;
}
@media screen and (max-width: 500px) {
    .footer{
        padding: 14px;
        font-size: 12px;
    }
}
@media screen and (max-width: 370px) {
    .footer{
        padding: 12px;
        font-size: 10px;
        line-height: 14px;
    }
}
</style>