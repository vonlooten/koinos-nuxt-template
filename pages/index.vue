<template>
  <dir>
    <h1>Welcome</h1>
    <div class="mt-50">
      <KoinosLogo />
      <balance-check />
    </div>
  </dir>
</template>


<script>
import KoinosLogo from "@/components/KoinosLogo";
import BalanceCheck from '../components/BalanceCheck.vue';
export default {
  components: {
    KoinosLogo,
    BalanceCheck
  },
  layout: "default",
};
</script>

<style scoped>
.mt-50 {
  margin-top: 50px;
}
</style>