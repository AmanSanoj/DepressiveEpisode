<template>
  <div class="header">
    <a href="/"><h2>DEPRESSIVE EPISODE</h2></a>
    <ul>
      <li><a href="#">Feed</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Create</a></li>
      <li><a href="#">Sign in</a></li>
    </ul>
    <sl-button size="medium" pill href="/auth/signup"> Sign Up </sl-button>
  </div>
  <div id="section1" style="padding-top: 33vh">
    <div>
      <h1 style="font-size: 60px">
        Hi, we're
        <span
          style="
            background: linear-gradient(to left, #feb097 0%, #80b3c9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          "
          >Depressive Episode.</span
        ><br />
        Building a platform for
        <span style="color: var(--span-yellowColor)">you</span><br />
        to share your
        <span class="typed-text" style="color: var(--span-yellowColor)">{{
          typeValue
        }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>
    <br />

    <a href="#section2">
      <div style="margin: auto; text-align: center; margin-top: 30vh">
        <sl-icon-button
          style="z-index: -1"
          name="arrow-down-circle-fill"
        ></sl-icon-button>
      </div>
    </a>
  </div>
  <div id="section2" style="padding-top: 20vh">
    <sl-card>
      <div slot="header" style="font-size: 3em">Our Mission</div>
      <span style="font-size: 1.5em; text-align: justify">
        In the recent years due to the global COVID-19 pandemic, teenagers all
        around the globe have had to spend time indoors and with little
        socialization. Due to this, depression rates in teenagers and young
        adults have tripled over the last 2 years in the US. Our mission is to
        provide a platform to this specific communtiy which enables them to
        share their experiences, ideas, journey and their life with others.
        This, we expect will give other teens inspiration and the positive
        energy required to continue on with their life.
      </span>
    </sl-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Experiences.", "Ideas.", "Journey.", "Life."],
      typingSpeed: 50,
      erasingSpeed: 10,
      newTextDelay: 1500,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style>
:root {
  --span-yellowColor: var(--sl-color-amber-400);
}

#section1 span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: var(--span-yellowColor);
  animation: cursorBlink 1s infinite;
}

#section1 span.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: var(--span-yellowColor);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

#section1,
#section2,
#section3 {
  background-repeat: no-repeat;
  height: 100vh;
  padding: 2em;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

#section1 {
  background-image: url("../assets/shape1.svg");
  border-bottom: 2px dashed #eee;
}

#section2 {
  background-image: url("../assets/shape2.svg");
}

.header {
  width: 100%;
  height: 1vh;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  z-index: 1;
  padding: 27px 10px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.header li {
  display: inline-block;
  list-style: none;
  margin: 10px 30px;
}

.header a {
  text-decoration: none;
  color: var(--global-textColor);
  transition: all 0.3s ease 0s;
}

.header li a:hover {
  color: var(--global-textHoverColor);
}
</style>
