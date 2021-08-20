<template>
  <article class="max-w-lg mx-auto">
    <h1 class="text-center">Setups</h1>
    <p class="mb-4 text-center">
      Sometimes it hard to know what to do to get to the best check out. Our Setups tool will help you learn what the
      best thing to do is when you're trying to get to a good out before your opponent does.
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
      <div v-if="out.details.length" v-html="out.details" class="text-sm"></div>
    </div>
    <button type="button" class="mx-auto mt-6 btn" @click="reset" v-if="out">Reset</button>
  </article>
</template>

<script>
import outs from "../assets/data/setups.json";

export default {
  head() {
    return {
      title: "Setups",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Sometimes it hard to know what to do to get to the best check out. Our Setups tool will help you learn what the best thing to do is when you're trying to get to a good out before your opponent does.",
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
        if (this.score < 101 || this.score > 315) {
          this.error = "Invalid Score. Score must be between 101 and 315.";
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