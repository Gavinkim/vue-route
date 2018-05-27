<template>
  <div>
    <h3>User Page</h3>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <router-view/>
  </div>
</template>

<script>
    export default {
      methods: {
        navigateToHome() {
          this.$router.push({name: 'home'});
        }
      }
    }
</script>

<style scoped>

</style>
