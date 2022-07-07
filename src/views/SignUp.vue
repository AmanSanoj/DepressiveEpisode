<template>
  <div class="header">
    <a href="/"><h2>DEPRESSIVE EPISODE</h2></a>
  </div>
  <div class="main">
    <sl-card class="signup__form">
      <div slot="header">Sign Up</div>
      <div role="form" style="text-align: left">
        <sl-input
          name="email"
          type="email"
          label="Email"
          required
          v-model="email"
          placeholder="johnappleseed@example.com"
          @input="email = $event.target.value"
        ></sl-input>
        <sl-input
          name="password"
          type="password"
          label="Password"
          required
          togglePassword
          v-model="password"
          placeholder="••••••••"
          @input="password = $event.target.value"
        ></sl-input>
        <sl-input
          name="reenteredPassword"
          type="password"
          label="Reenter Password"
          required
          togglePassword
          v-model="reenteredPassword"
          placeholder="••••••••"
          @input="reenteredPassword = $event.target.value"
        ></sl-input>
        <sl-button variant="success" type="submit" @click="signUp"
          >Sign Up</sl-button
        >
      </div>
      <p style="margin-bottom: 10px">or</p>
      <sl-button variant="default" @click="signInWithOauth(googleProvider)">
        <sl-icon slot="prefix" name="google" size="large"></sl-icon>
        Sign up with Google
      </sl-button>
      <sl-button variant="default" @click="signInWithOauth(microsoftProvider)">
        <sl-icon slot="prefix" name="microsoft" size="large"></sl-icon>
        Sign up with Microsoft
      </sl-button>
      <sl-button variant="default" @click="signInWithOauth(githubProvider)">
        <sl-icon slot="prefix" name="github" size="large"></sl-icon>
        Sign up with GitHub
      </sl-button>
      <sl-button variant="default" @click="signInWithOauth(twitterProvider)">
        <sl-icon slot="prefix" name="twitter" size="large"></sl-icon>
        Sign up with Twitter
      </sl-button>
      <div slot="footer">
        Already have an account? <a href="/auth/signup">Sign In</a> Instead
      </div>
    </sl-card>
  </div>
</template>

<script setup>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const auth = getAuth();
const toast = useToast();

const email = ref("");
const password = ref("");
const reenteredPassword = ref("");

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

function signInWithOauth(provider) {
  signInWithPopup(auth, provider)
    .then(() => {
      this.$router.push("/feed");
    })
    .catch((error) => {
      errorHandler(error.code);
    });
}

function errorHandler(errorCode) {
  switch (errorCode) {
    case "auth/email-already-in-use":
      toast.error("The email you have entered is already in use");
      break;
    case "auth/invalid-email":
      toast.error("Please enter a valid email");
      break;
    case "auth/internal-error":
      toast.error("Please enter a valid email and password");
      break;
    case "auth/weak-password":
      toast.error("Your password must be at least 8 digits long");
      break;
    case "auth/account-exists-with-different-credential":
      toast.error("Please sign in with the service you signed up with");
      break;
    default:
      break;
  }
}
function signUp() {
  if (password.value !== reenteredPassword.value) {
    toast.error("Passwords do not match");
    return;
  }
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      this.$router.push("/auth/signin");
    })
    .catch((error) => {
      errorHandler(error.code);
    });
}
</script>

<style>
.main {
  width: 100%;
  text-align: center;
  padding-top: 5.5rem;
}

.signup__form {
  max-width: 25em;
  text-align: center;
}

.signup__form sl-button,
.signup__form sl-input {
  width: 100%;
  margin-bottom: 10px;
}

.signup__form sl-button:nth-last-child(2) {
  margin-bottom: 0px;
}
</style>
