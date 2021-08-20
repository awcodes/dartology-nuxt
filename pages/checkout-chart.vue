<template>
  <article class="max-w-lg mx-auto">
    <h1 class="text-center">Checkout Chart</h1>
    <p class="mb-4 text-center">
      Yea, we hear it all the time too, but we got you covered. Our Checkout Chart shows you the best way to go, based
      on playing the percentages, when trying to win a game.
    </p>

    <form @submit.prevent="getOut" class="text-center">
      <label for="score" class="block mt-4 mb-1 text-lg">Score</label>
      <input
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        minlength="1"
        maxlength="3"
        id="score"
        class="text-2xl text-center bg-gray-800 border-gray-600 rounded shadow-sm  focus:border-tertiary-300 focus:ring focus:ring-tertiary-200 focus:ring-opacity-50"
        @input="getOut"
        v-model="score"
        autofocus
        ref="input"
      />
    </form>
    <div class="p-6 mt-6 space-y-4 text-red-900 bg-red-200 rounded" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="p-6 mt-6 space-y-4 bg-gray-800 rounded" v-if="out">
      <div v-if="out.primary.length" class="text-lg text-center">
        {{ out.primary }}
      </div>
      <div v-if="out.details.length" v-html="out.details" class="text-sm"></div>
      <div v-if="out.secondary.length" class="text-xs">Secondary Out: {{ out.secondary }}</div>
      <div v-if="out.tertiary.length" class="text-xs">Tertiary Out: {{ out.tertiary }}</div>
    </div>
    <button type="button" class="mx-auto mt-6 btn" @click="reset" v-if="out">Reset</button>
  </article>
</template>

<script>
import outs from "../assets/data/outs.json";

export default {
  head() {
    return {
      title: "Checkout Chart",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Yea, we hear it all the time too, but we got you covered. Our Checkout Chart shows you the best way to go, based on playing the percentages, when trying to win a game.",
        },
      ],
    };
  },
  data() {
    return {
      outs,
      out: null,
      score: null,
      error: null,
    };
  },
  methods: {
    getOut(e) {
      this.out = null;

      if (this.score !== "") {
        if (this.score < 2 || this.score > 170) {
          this.error = "Invalid Out. Score must be between 2 and 170.";
        } else {
          this.error = null;
          this.out = this.outs.filter((item) => {
            return item.score == e.target.value;
          })[0];
        }
      } else {
        this.error = null;
      }
    },
    reset() {
      this.out = null;
      this.error = null;
      this.score = null;
      this.$refs.input.focus();
    },
  },
};
</script>