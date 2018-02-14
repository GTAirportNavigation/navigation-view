<template>
  <el-container>
    <el-main style="padding: 0em">
      <el-row style="padding: 2em">
        <el-col :span="23" id="input-col">
          <div class="sub-title">What is your flight number</div>
          <el-input size="mini" placeholder="type here" v-model="data.flight_number" style="padding-top: 1em"></el-input>
        </el-col>
      </el-row>
      <el-row style="padding: 2em">
        <el-col :span="23" id="search-col">
          <el-button id="search-button" v-on:click="search">Search</el-button>
        </el-col>
      </el-row>
      <el-row v-if="data.show" id="flight-info" style="">
        <el-col :span="23">
          <div>Flight: {{data.flight_number}}</div>
          <div>
            <span>From {{data.source}} To {{data.destination}}</span>
            <el-button id="status">{{data.status}}</el-button>
          </div>
          <div>Departure At: {{data.time}}</div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElRow from "element-ui/packages/row/src/row";

  var data = {
    show: false,
    flight_number: '',
    source: '',
    destination: '',
    status: '',
    time: ''
  };

  export default {
    components: {
      ElRow,
      ElContainer
    },
    name: 'home',
    data: function() {
      return {
        data
      }
    },
    methods: {
      select_page: function() {
        this.$router.push('/select')
      },

      search: function() {
        console.log('search');
        data.source = 'LAX';
        data.destination = 'ATL';
        data.status = 'On Time';
        data.time = '5:45';
        data.show = true;
      }
    }
  }
</script>

<style>
  #input-col {
    padding-top: 5em;
  }

  #search-col {
    text-align: center;
    padding-top: 5em;
  }

  #search-button {
    background-color: #3a8ee6;
    color: white;
  }

  #flight-info {
    background-color: #3a8ee6;
    color: white;
    margin-top: 5em;
    padding-left: 1em;
  }

  #status {
    background: #5daf34;
    color: #1b1e21;
    border: none;
    margin-left: 5em;
  }
</style>
