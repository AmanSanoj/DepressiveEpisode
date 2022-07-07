<template>
  <div class="header">
    <a href="/"><h2>DEPRESSIVE EPISODE</h2></a>
  </div>
  <div class="main">
    <sl-card class="signup__form">
      <sl-alert variant="warning" class="passwordsDoNotMatchAlert"
        >Passwords do not match</sl-alert
      >
      <div slot="header">Sign Up</div>
      <div role="form" style="text-align: left">
        <sl-input
          name="email"
          type="email"
          label="Email"
          required
          v-sl-model="email"
          placeholder="johnappleseed@example.com"
        ></sl-input>
        <sl-input
          name="password"
          type="password"
          label="Password"
          required
          togglePassword
          v-sl-model="password"
          placeholder="••••••••"
        ></sl-input>
        <sl-button variant="success" type="submit" @click="signUp"
          >Sign Up</sl-button
        >
      </div>
      <p style="margin-bottom: 10px">or</p>
      <sl-button variant="default" @click="signUpWithGoogle">
        <sl-icon slot="prefix" name="google" size="large"></sl-icon>
        Sign up with Google
      </sl-button>
      <sl-button variant="default" @click="signUpWithMicrosoft">
        <sl-icon slot="prefix" name="microsoft" size="large"></sl-icon>
        Sign up with Microsoft
      </sl-button>
      <sl-button variant="default" @click="signUpWithGithub">
        <sl-icon slot="prefix" name="github" size="large"></sl-icon>
        Sign up with GitHub
      </sl-button>
      <sl-button variant="default" @click="signUpWithTwitter">
        <sl-icon slot="prefix" name="twitter" size="large"></sl-icon>
        Sign up with Twitter
      </sl-button>
      <div slot="footer">
        Already have an account? <a href="/auth/signup">Sign In</a> Instead
      </div>
    </sl-card>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
} from "firebase/auth";

const auth = getAuth();

function signInWithOauth(provider) {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user.displayName, result.user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorCode + errorMessage + email);
    });
}

export default {
  data() {
    return {
      email: "",
      password: "",
      reenteredPassword: "",
    };
  },
  methods: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          console.log("User Created");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signUpWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithOauth(provider);
    },
    signUpWithGithub() {
      const provider = new GithubAuthProvider();
      signInWithOauth(provider);
    },
    signUpWithMicrosoft() {
      const provider = new OAuthProvider("microsoft.com");
      signInWithOauth(provider);
    },
    signUpWithTwitter() {
      const provider = new TwitterAuthProvider();
      signInWithOauth(provider);
    },
  },
};
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
