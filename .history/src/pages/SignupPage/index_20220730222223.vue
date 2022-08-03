<template>
  <div >
    <main-master-page>
      <template v-slot:main>
        <div class="loginContainer">
          <h1>Зареєструватися</h1>
          <form @submit.prevent="submit">
            <h2>Ім'я</h2>
            <div>
              <input
              class="loginContainerInput"
                required
                type="text"
                v-model="userName"
                name="name"
                placeholder="Name"
              />
            </div>
            <h2>E-Mail</h2>
            <div>
              <input
              class="loginContainerInput"
                required
                type="email"
                v-model="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <h2>Пароль</h2>
            <div class="form-group">
              <input
              class="loginContainerInput"
                required
                type="password"
                v-model="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div v-if="message">{{ message }}</div>
            <div>
              <button class="loginContainerBtn" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </template>
    </main-master-page>
  </div>
</template>


<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";

import { mapActions } from "vuex";
export default {
  name: "SignupPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      admin: false,
      message: "",
    };
  },
  // watch: {
  //   userName() {
  //     if ( this.userName.length > 2 && this.userName.length < 12) {
  //       this.userName
  //     }
  //   }
  // },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    async submit() {
      try {
        const user = {
          name: this.userName,
          email: this.email,
          password: this.password,
          admin: this.admin,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.message = "";
          this.$router.push({
            path: "/login",
            query: { signedup: "true" },
          });
        } else {
          this.message = result; //'SignUp error!';
        }
      } catch (err) {
        this.message = err.message;
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>

<style lang="css">
    .loginContainer{
  text-align: left;
  width: 400px;
  background-color: #192021;
  border: 1px solid #707475;
    border-top: 6px solid #f46534;
    margin: 50px auto;
    padding: 30px;
    border-radius: 0;
    box-shadow: none;
}
.loginContainerInput{
  width: 92%;
  background-color: #1c1c1c;
  color: white;
  padding: 6.5px 10px 6.5px 20px;
  border: 2px solid #707475;
  font-size: 14px;
    height: 25px;
}
.loginContainerBtn{
  padding: 11px 22px;
  margin: 25px 0;
  background-color: #f46534;
  color: white;
  border-radius: 5px
}
</style>