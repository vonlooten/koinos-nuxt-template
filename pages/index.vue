<template>
  <dir>
    <h1>Welcome</h1>
    <div class="mt-50">
      <KoinosLogo />
    </div>
  </dir>
</template>


<script>
import KoinosLogo from "@/components/KoinosLogo";
export default {
  components: {
    KoinosLogo,
  },
  layout: "default",
};
</script>

<style scoped>
.mt-50 {
  margin-top: 50px;
}
</style>