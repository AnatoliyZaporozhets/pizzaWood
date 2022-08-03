<template>
  <div>
    <main-master-page>
      <template v-slot:main>
        <div class="loginContainer">
          <h2>Постійний клієнт</h2>
          <form @submit.prevent="submit">
            <div>Вхід для постійних клієнтів</div>
            <div>
              email :
              <input
                type="email"
                v-model="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              password :
              <input
                type="password"
                v-model="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group error" v-if="message">{{ message }}</div>
            <div class="form-group">
              <button class="btn btn-primary">Login</button>
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
  width: 400px;
  background-color: bisque;
}
</style>