<template>
  <div>
    <main-master-page>
      <template v-slot:main>
        <div class="loginContainer">
          <h2>Постійний клієнт</h2>
          <form @submit.prevent="submit">
            <div>Вхід для постійних клієнтів</div>
            <h2>E-Mail</h2>
            <div>
              <input
              class="loginContainerInput"

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
                type="password"
                v-model="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group error" v-if="message">{{ message }}</div>
            <div class="form-group">
              <button class="loginContainerBtn">УВІЙТИ</button>
              <router-link to="/signup" class="btn btn-link"
                >Sign up</router-link
              >
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
  name: "LoginPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },

  methods: {
    ...mapActions("auth", ["login", "logout"]),

    async submit() {
      try {
        const user = { email: this.email, password: this.password };
        const result = await this.login(user);

        if (result === true) {
          this.message = "";

          this.$router.push({ path: "/" });
        } else {
          this.message = "Login error!";
        }
      } catch (err) {
        this.message = err.response.data.error;
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