<template>
  <div class="max-w-1200 p-5 mx-auto">
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: "Default",
};
</script>

<style>
body {
  width:100%;
  height: 100vh;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.max-w-1200 {
  width: 500px;
  max-width: 1200px;
}
.p-5 {
  padding: 5px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
