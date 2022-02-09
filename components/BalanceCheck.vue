<template>
  <div>
    <label for="input-field">Enter an Address to check it's balance</label>
    <input v-model="inputAddress" type="text" id="input-field" @change="requestBalance" />
    <p>The Balance is: {{(this.balance > 0 ? this.balance/100000000: this.balance)}}</p>
  </div>
</template>

<script>
import { Signer, Contract, Provider /* , Serializer */, utils } from "koilib";

export default {
  name: "BalanceCheck",
  data: () => {
      return {
          inputAddress: "1GoPSijvMqCbL1BVaEjtQXFcSFr8umA3zM",
          balance: 0,
      }
  },
  methods: {
    async requestBalance() {
      const provider = new Provider(["http://0.0.0.0:8081/jsonrpc"]);
      const signer = Signer.fromSeed("my seed");
      signer.provider = provider;
      const koinContract = new Contract({
        id: "19JntSm8pSNETT9aHTwAUHC5RMoaSmgZPJ",
        abi: utils.Krc20Abi,
        provider,
        signer,
      });
      const koin = koinContract.functions;

      // Get balance
      const { result } = await koin.balanceOf({owner: this.inputAddress});
      this.balance = result.value
    },
  },
  mounted() {
    this.requestBalance()
  }
};
</script>

<style scoped>
#input-field {
  width:300px; 
  padding:2px;
}
</style>