<template>
  <div class = "content">
    <div class = "statusBar">
      <div class = "informationStatus">

        <h5>{{flightStatus}}</h5>
        <h5>Boarding time : {{boardingTime}} <el-tag type="success">On Time</el-tag></h5>
        <h5>Estimated Time to gate ： {{estimatedTime}}</h5>

      </div>
      <div class = "forward">
      </div>
    </div>
    <div class = "directions">
      <el-alert v-for="direction of directions" type = "success" v-if="direction.status == 'current'" show-icon>
           {{direction.info}}
      </el-alert>

      <el-alert v-for="direction of directions" type = "info" v-if="direction.status == 'future'" show-icon>
        {{direction.info}}
      </el-alert>
    </div>
    <div class = "buttonBar">
      <el-button type="success" size = "small">Map</el-button>
      <el-button type="success" size = "small">Resturant</el-button>
      <el-button type="success" size = "small">Explore</el-button>
      <el-row style = "margin-top:20px;margin-left:70px">
        <el-button type="danger" size = "medium">Cancel</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {ElButton},
      name: "main-page",
        data () {
          return {
            flightStatus: 'Flight D3',
            boardingTime:"04:30 PM",
            estimatedTime:"10 mins",
            directions:[{
              info:"Turn right in 500 feet",
              status:"current"
            }, {
               info:"Go up the escalator",
               status:"future"
            }, {
               info:"Immediate Turn Left",
               status:"future"
            }, {
               info:"Straight Up for 100 feet",
               status:"future"
            }]
          }
        }
    }
</script>

<style scoped>
  .content {
    height:100%;
    width:100%;
  }
  .statusBar {
    height:100px;
  }
  .informationStatus {
    padding-top: 20px;
    padding-left:10px;
    width:70%;
    height:100%;
    float:left;
  }

  .directions {
    width:95%;
    margin-left: 2%;
    height:350px;
  }
  .forward{
    float:left;
    width:20%;
    height:100%;
  }
  .buttonBar {
    margin-left:10%;
  }
  el-tag {
    margin-left: 5px;
  }
  .el-alert {
    margin-top: 15px;
  }
  h5 {
    margin:0px;
  }
</style>
