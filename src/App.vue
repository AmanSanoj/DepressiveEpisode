<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
:root {
  --global-textColor: #000;
  --global-secondTextColor: #404040;
  --global-fontFamily: "Varela Round", sans-serif;
  --global-textHoverColor: #818181;
  --brand1: #feb097;
  --brand2: #d4a946;
  --brand3: #80b3c9;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: #fff;
  font-family: var(--global-fontFamily);
  color: var(--global-textColor);
}
</style>
