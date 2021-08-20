<template>
  <article>
    <section v-if="!cards.length">
      <h1>Welcome to Flipout</h1>
      <p>Select your skill level to begin.</p>
      <ul class="mt-6 divide-y divide-gray-700">
        <li v-for="(skill, key) in skills" :key="key">
          <button class="flex items-center w-full py-3 text-left" @click="setSkill(key)">
            <span class="flex-1 block">
              <h3 class="inline-block text-gray-300">{{ skill.title }}</h3>
              <p class="text-sm">Outs from {{ skill.min }} - {{ skill.max }}</p>
            </span>
            <svg
              class="flex-shrink-0 w-6 h-6 ml-3 text-secondary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </li>
      </ul>
    </section>
    <section v-if="cards.length">
      <div class="flex items-center justify-between">
        <div>
          <h1>{{ skills[skill].title }}</h1>
          <p class="text-sm">Outs from {{ skills[skill].min }} - {{ skills[skill].max }}</p>
        </div>
        <button @click="reset" class="py-1 text-sm btn secondary">Start Over</button>
      </div>
      <div class="mt-6">
        <div class="p-6 bg-gray-800 rounded">
          <div class="text-5xl font-bold text-center text-tertiary-500">
            {{ cards[current].score }}
          </div>
        </div>
      </div>
      <div ref="deckNav" class="flex items-center justify-between mt-4">
        <button class="px-2 rounded-full btn orange" @click="goToPreviousCard" :disabled="this.current === 0">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="sr-only">Previous</span>
        </button>
        <button class="btn" @click="showAnswer" :disabled="answered">Show Answer</button>
        <button
          class="px-2 rounded-full btn orange"
          @click="goToNextCard"
          :disabled="this.current === this.cards.length - 1"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="sr-only">Next</span>
        </button>
      </div>
      <div class="p-6 mt-6 space-y-4 bg-gray-800 rounded" v-show="answered">
        <div v-if="cards[current].primary.length" class="text-lg text-center">
          {{ cards[current].primary }}
        </div>
        <div v-if="cards[current].details.length" v-html="cards[current].details" class="text-sm"></div>
        <div v-if="cards[current].secondary.length" class="text-xs">Secondary Out: {{ cards[current].secondary }}</div>
        <div v-if="cards[current].tertiary.length" class="text-xs">Tertiary Out: {{ cards[current].tertiary }}</div>
      </div>
    </section>
  </article>
</template>

<script>
import outs from "../assets/data/outs.json";

export default {
  head() {
    return {
      title: "Flipout",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Flipout from Dartology is a tool designed to help you learn dart check outs. It works like flash cards by presenting you a score and allowing you to guess what the correct checkout is based on the likelihood of missing the intended target.",
        },
      ],
    };
  },
  data() {
    return {
      outs: outs,
      cards: [],
      current: 0,
      answered: false,
      skill: null,
      skills: {
        novice: {
          title: "Novice",
          min: 2,
          max: 60,
        },
        league: {
          title: "League Player",
          min: 61,
          max: 120,
        },
        pro: {
          title: "Professional",
          min: 121,
          max: 170,
        },
        all: {
          title: "All Outs",
          min: 2,
          max: 170,
        },
      },
    };
  },
  methods: {
    shuffleCards(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    setSkill(level) {
      this.skill = level;

      this.cards = this.outs.filter((card) => {
        return card.score >= this.skills[level].min && card.score <= this.skills[level].max;
      });

      this.cards = this.shuffleCards(this.cards);
    },
    showAnswer() {
      this.answered = true;
    },
    goToPreviousCard() {
      this.answered = false;
      if (this.current !== 0) {
        this.current--;
      }
    },
    goToNextCard() {
      this.answered = false;
      if (this.current !== this.cards.length - 1) {
        this.current++;
      }
    },
    reset() {
      this.cards = [];
      this.current = 0;
      this.answered = false;
    },
  },
};
</script>