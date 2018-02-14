<template>
<div class = "content">
<h6 style ="padding-left:1em;
padding-top:0.5em"> Select your transportation mode</h6>
<el-row  :gutter="20" style ="margin-left:0.5em;
margin-top:2em">
    <el-col :span="11">
    <div class="block">
      <h4>Rental</h4>
    </div>
    </el-col>
    <el-col :span="11"><div class="block">
    <h4>Marta</h4>
    </div></el-col>
</el-row>

<el-row  :gutter="20" style ="margin-left:0.5em;
margin-top:2em">
    <el-col :span="11"><div class="block">
    <h4>Uber</h4></div></el-col>
    <el-col :span="11"><div class="block">
    <h4>Driving</h4></div></el-col>
</el-row>

<router-link to="/main">
 <el-button type="danger" size = "large"
 style = "margin-top:3em;
 margin-left:6.5em">I am at the the airport</el-button>
</router-link>

</div>

</template>

<script>
    export default {
        name: "select_page"
    }
</script>

<style scoped>
.block {
    color:white;
    background-color:#04b9e6;
    height:8.5em;
}
.block h4 {
    padding-top:2em;
    padding-left:1.75em;
    font-size:1.5em;
}
</style>
