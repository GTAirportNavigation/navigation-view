<template>
  <div class = "content">
    <h6 style ="padding-left:1em; padding-top:0.5em"> Select parking lot</h6>
    <el-row>
      <el-col :span="22">
        <el-card shadow="always" class = "parkingInfo">
          <el-row>
            <el-col :span="12">
              <el-row>
                <h5>East Parking Lot</h5>
              </el-row>
              <el-row>
                <h7>100/200</h7>
              </el-row>

            </el-col>
            <el-col :span="12">
              <h7>0.3 miles from your gate</h7>
            </el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="22">
        <el-card shadow="always" class = "parkingInfo">
          <el-row>
            <el-col :span="12">
              <el-row>
                <h5>West Parking Lot</h5>
              </el-row>
              <el-row>
                <h7>80/200</h7>
              </el-row>

            </el-col>
            <el-col :span="12">
              <h7>0.2 miles from your gate</h7>
            </el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="22">
        <el-card shadow= "never" class = "parkingInfoWrong">
          <el-row>
            <el-col :span="12">
              <el-row>
                <h5>North Parking Lot</h5>
              </el-row>
              <el-row>
                <h7>80/200</h7>
              </el-row>

            </el-col>
            <el-col :span="12">
              <h7>0.2 miles from your gate</h7>
            </el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
    export default {
        name: "parking-lot"
    }
</script>

<style scoped>
  .content {
    height:100%;
    width:100%;
  }
  el-row {
    height:5%;
  }
  .parkingInfo {
    margin-left: 5%;
    margin-top: 10%;
  }

  .parkingInfoWrong {
    margin-left: 5%;
    margin-top: 10%;
  }
  h5 {
    font-size: medium;
  }
  h7 {
    font-size: small;
  }

</style>
