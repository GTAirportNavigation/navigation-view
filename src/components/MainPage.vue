<template>
  <div class = "content">
    <div class = "statusBar">
      <div class = "informationStatus">
        <el-row>
        <el-col :span = "10"><h6>{{flightStatus}}</h6></el-col>

        </el-row>
        <el-row>

        <h6>Boarding time : {{boardingTime}}</h6>
        </el-row>
        <el-row>

        <h6>Estimated Time to gate : {{estimatedTime}}</h6>
        </el-row>

        <el-row>
        <el-col :span = "7"><h5>Status: </h5></el-col>
        <el-col :span = "17"><el-tag type="success">On Time</el-tag></el-col>
        </el-row>

      </div>
      <div class = "forward">
      </div>
    </div>
    <div class = "directions">
      <el-alert v-for="direction in directions" :key = "direction.info" type = "success" v-if="direction.status == 'current'">
           {{direction.info}}
      </el-alert>

      <el-alert v-for="direction in directions" :key = "direction.info" type = "info" v-if="direction.status == 'future'">
        {{direction.info}}
      </el-alert>
    </div>
    <div class = "buttonBar">
      <el-button type="success" size = "small">Map</el-button>
      <el-button type="success" size = "small">Resturant</el-button>
      <el-button type="success" size = "small">Explore</el-button>
      <el-row style = "margin-top:20px;margin-left:70px">
        <router-link to="/">
         <el-button type="danger" size = "medium">Cancel</el-button>
        </router-link>
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
            }, {
               info:"Turn right for 100 feet",
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
    height:20%;
  }
  .informationStatus {
    padding-top: 5%;
    padding-left:5%;
    width:75%;
    height:100%;
    float:left;
  }

  .directions {
    width:95%;
    margin-left: 2%;
    height:45%;
  }
  .forward{
    float:left;
    width:20%;
    height:100%;
  }
  .buttonBar {
    margin-left:20%;

  }
  el-tag {
    float:right;
  }
  .el-alert {
    margin-top: 15px;
  }
  .el-col-10 {
    padding-top:2%;
  }
  h5 {
    margin:0px;
  }
</style>
