<template>
  <v-app>
    <Navbar/>
    <h1>Schedule</h1>
  </v-app>
</template>

<script>
import Navbar from '../components/NavBar'
import router from '../router'
export default {
  data() {
    return {
      token: this.$cookies.get('token')
    }
  },
  components: {
    Navbar
  },
  mounted() {
    if (this.token == null) {
      router.push({name: 'Login'})
    }
  }
}
</script>