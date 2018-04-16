<template>
  <el-container>
    <el-main style="padding: 0em">
      <el-row style="padding: 2em">
        <el-col :span="23" id="input-col">
          <div class="sub-title">What is your flight number</div>
          <el-input size="mini" placeholder="type here" v-model="search_query" style="padding-top: 1em"></el-input>
        </el-col>
      </el-row>
      <el-row style="padding: 2em">
        <el-col :span="23" id="search-col">
          <el-button id="search-button" v-on:click="search">Search</el-button>
        </el-col>
      </el-row>
      <router-link to="/select">
      <el-row v-if="show" id="flight-info" >
        <el-col :span="23">
          <div>Flight: {{flight_number}}</div>
          <div>Terminal: {{terminal}}</div>
          <div>Gate: {{gate}}</div>
          <div>
            <span>From {{source}} To {{destination}}</span>
            <el-button v-bind:class="style">{{status}}</el-button>
          </div>
          <div>Departure At: {{time}}</div>
        </el-col>
      </el-row>
      </router-link>
    </el-main>
  </el-container>
</template>

<script>
  import axios from 'axios';

  var data = {
    show: false,
    search_query: '',
    flight_number: '',
    source: '',
    destination: '',
    status: '',
    time: '',
    style: '',
    terminal: '',
    gate: ''
  };

  export default {
    name: 'home',
    data: function() {
      return data;
    },
    methods: {
      search: function() {
        data.flight_number = data.search_query;
        axios.get('http://localhost:8000/flight/' + data.flight_number)
          .then(response => {
            var result = response.data;

            data.terminal = function() {
              var terminal = '';
              for (var i = 0; i < result.length; i++) {
                if (result[i] === "[" || result[i] === "'") {
                  continue;
                }
                if (result[i] === "G") {
                  break;
                }
                terminal += result[i];
              }
              return terminal;
            }();

            data.gate = function() {
              var gate = '';
              var start = false;
              for (var i = 0; i < result.length; i++) {
                if (result[i] === "]" || result[i] === "'")
                  continue;
                if (result[i] === "G")
                  start = true;
                if (start)
                  gate += result[i];
              }
              return gate;
            }();

            var status = 1;
            var style = {
              1: 'red',
              2: 'yellow',
              3: 'green',
            };
            var status_dict = {
              1: 'Cancelled',
              2: 'Delayed',
              3: 'On Time',
            };
            data.source = 'LAX';
            data.destination = 'ATL';
            data.status = status_dict[status];
            data.time = '5:45';
            data.show = true;
            data.style = style[status];
          });
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
    background-color: white;
    color: black;
    margin-top: 5em;
    padding-left: 1em;
  }

  .green {
    background: green;
    color: white;
    border: none;
    margin-left: 6em;
  }

  .red {
    background: red;
    color: #1b1e21;
    border: none;
    margin-left: 6em;
  }

  .yellow {
    background: orange;
    color: #1b1e21;
    border: none;
    margin-left: 6em;
  }
</style>
