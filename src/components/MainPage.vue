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



      <el-alert v-for="instruction in instructions" :key = "instruction" type = "info">
        {{instruction}}
      </el-alert>
    </div>
    <div class = "buttonBar">
      <el-button type="success" size = "small">Map</el-button>
      <router-link to="/restaurants">
        <el-button type="success" size = "small">Resturant</el-button>
      </router-link>
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
    import axios from 'axios';
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
            }],
            posts:[],

            instructions:[],
          }
        },
      created() {
        axios.get(`http://localhost:8000/nav/route/TG12/`)
          .then(response => {
            // JSON responses are automatically parsed.
            var temp =  response.data;


            for (let i = 0; i < temp.length; i++) {
                var instruction = "";

                var location = temp[i][0];

                var distance = temp[i][1];

                var angle = temp[i][2];

                var type = temp[i][3];

                if (distance == 0) {
                    instruction = "You have arrived " + location;
                    this.instructions.push(instruction);
                } else {
                    var angle2 = temp[i + 1][2];

                    var result = angle2 - angle;

                    var subInstruction = "";

                    if (location == '') {
                        instruction = "Head straight for " + distance + " feet";
                    } else {
                      instruction = "Walk ahead in " + distance + " feet to " + location;
                    }

                    if (result < 180 && result > 0) {
                      subInstruction = "Turn Right";
                    }
                    else if (result > -180 && result < 0) {
                      subInstruction = "Turn Left";
                    }
                    else if (result == 0) {
                      subInstruction = "Walk Straight";
                    } else if (result == 180) {
                      subInstruction = "Turn Around";
                    }
                    this.instructions.push(instruction);
                    this.instructions.push(subInstruction);
                }



            }

          })//leave for ajax call
      }
    }
</script>

<style scoped>
  .content {
    height:100%;
    width:100%;
    margin-top: 10%;
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
    overflow:scroll;
    margin-top: 1em;
    margin-bottom: 1em;
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
