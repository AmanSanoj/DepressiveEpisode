<template>
  <editor
    api-key="x5ar5ffrsmnvzzakh50nhkx84zt53mr1klfsnkmmz7m95wv4"
    :init="{
      plugins: 'lists link image table code help wordcount',
      height: '40em',
    }"
  />
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "app",
  components: {
    editor: Editor,
  },
};
</script>
