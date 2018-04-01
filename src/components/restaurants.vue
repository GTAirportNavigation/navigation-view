<template>
  <el-container>
    <el-main style="padding: 0; text-align: center;">
      <el-row>
        <el-tabs v-model="activeName" @tab-click="tabClick">
          <el-tab-pane label="All Terminals" name="first">
            <el-col v-if="showTerminal">
              <el-button class="terminal-button" type="primary" v-for="terminal in terminals" v-on:click="selectTerminal(terminal)">
                {{terminal}}
                <i class="el-icon-arrow-right el-icon-right"></i>
              </el-button>
            </el-col>
            <el-col v-else="showTerminal">
              <el-button class="restaurants-button" type="primary" v-for="restaurant in restaurants">
                <router-link :to="{ name: 'restaurant-detail', params: { name: restaurant }}">{{restaurant}}</router-link>
                <i class="el-icon-arrow-right el-icon-right"></i>
              </el-button>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="This Terminal" name="second">
              <el-button class="restaurants-button" type="primary" v-for="restaurant in restaurants">
                <router-link :to="{ name: 'restaurant-detail', params: { name: restaurant }}">{{restaurant}}</router-link>
                <i class="el-icon-arrow-right el-icon-right"></i></el-button>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row style="margin-top: 2em">
        <router-link to="/">
          <el-button type="danger" size = "medium">Cancel</el-button>
        </router-link>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  var data = {
    restaurants: [],
    activeName: 'first',
    terminals: ['Terminal A', 'Terminal B', 'Terminal C', 'Terminal D', 'Terminal E', 'Terminal F'],
    showTerminal: true,
  };

  export default {
    name: "restaurants",
    data: function() {
      return data;
    },
    methods: {
      tabClick(tab, event) {
        data.showTerminal = true;
        if (tab.name === 'second') {
          var sample = ['Chipotle', 'Dunkin', '5 Guys', 'Panera', 'KFC', 'Panda', 'Sweet Hut', 'Royal China'];
          data.restaurants = [];
          sample.forEach(function(ele) {
            data.restaurants.push(ele);
          })
        }
      },
      selectTerminal(terminal) {
        data.showTerminal = false;
        data.restaurants = [];
        var sample = {
          'Terminal A': ['ChipotleA', 'A', '5 Guys', 'Panera'],
          'Terminal B': ['ChipotleB', 'B', '5 Guys', 'Panera'],
          'Terminal C': ['ChipotleC', 'C', '5 Guys', 'Panera'],
          'Terminal D': ['ChipotleD', 'D', '5 Guys', 'Panera'],
          'Terminal E': ['ChipotleE', 'E', '5 Guys', 'Panera'],
          'Terminal F': ['ChipotleF', 'F', '5 Guys', 'Panera'],
        };
        var rest = sample[terminal];
        rest.forEach(function(ele) {
          data.restaurants.push(ele);
        });
      },
    }
  }
</script>
<style scoped>
  .restaurants-button {
    background-color: white;
    color: #82848a;
    border: white;
    width: 80%;
    margin-top: 1em;
    overflow: scroll;
  }

  .terminal-button {
    background-color: white;
    color: #82848a;
    border: white;
    width: 80%;
    margin-top: 1em;
    overflow: scroll;
  }
</style>
