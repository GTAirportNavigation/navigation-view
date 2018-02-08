<template>
   <div style = "height:100px">
     <h1>{{ msg }}</h1>
       Hello {{msg}} {{ $route.params.name }}
   </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
       msg:'home'
    }
  }
}
</script>
