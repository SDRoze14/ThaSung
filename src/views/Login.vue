<template>
  <v-img
    src="../assets/bg-login.jpg"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    aspect-ratio="3"
  >
    <v-app id="inspire">
      <v-content class="font">
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="6" xl="4">
              <v-card class="elevation-12">
                <v-card elevation="0">
                  <v-col align="center" justify="center">
                    <v-img height="200" width="200" src="../assets/heart.png"></v-img>
                  </v-col>
                </v-card>
                <v-card-text>
                  <v-form v-on="Login">
                    <v-text-field
                      id="email"
                      label="email"
                      v-model="email"
                      name="login"
                      prepend-icon="email"
                      type="text"
                    />
                    <v-text-field
                      id="password"
                      label="Password"
                      v-model="password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <p class="err_text">{{messageError}}</p>
                  <v-spacer />
                  <v-btn color="primary" @click="Login()">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </v-img>
</template>

<script>
import router from "../router";
export default {
  data() {
    return {
      email: "",
      password: "",
      messageError: ''
    };
  },
  methods: {
    Login() {
      this.axios.post(
        "http://localhost:5000/doctor/login",
        {
          email: this.email,
          password: this.password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then((res) => {
        console.log(res)
        router.push({ name: "Home" });
        this.$cookies.set('token', res.data)
      }).catch((err) => {
        this.messageError = 'email หรือ password ไม่ถูกต้อง'
        console.log(err)
      })
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');
.err_text {
  color: red
}

#inspire {
  /* background-size: 100%; */
  background: none;
}

.font {
  font-family: 'Prompt'
}
</style>