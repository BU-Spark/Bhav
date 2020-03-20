<template>
  <main>
    <div class="container">
      <div class="jumbotron">
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
    <hr class="featurette-divider" />

    <footer class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>
        © 2018 Humanistic Co-Design Initiative ·
        <a>
          <router-link :to="{ name: 'privacy' }">Privacy</router-link>
        </a>
      </p>
    </footer>
  </main>
</template>

<script>
import { authUI, authUIConfig } from "../firebase/init";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    authUI.start("#firebaseui-auth-container", authUIConfig);
  }
};
</script>

<style>
.splash {
  text-align: center;
}

.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.spinner-wrapper {
  margin-left: 49%;
}
</style>
