<template>
  <article>
    <h1>Welcome to Dartology!</h1>
    <p>Here you will find a collection of tools to learn more about darts and become more proficient in your game.</p>

    <h2 class="mt-12">Practice Make Perfect</h2>
    <p class="text-sm italic">(well, maybe not perfect, but way better)</p>
    <p>
      We have a plethora of practice routines to help you achieve your darting goals, even if your goal is as simple as
      beating your friends in your local pub on a Tuesday night.
    </p>
    <NuxtLink to="/practice" class="mt-4 btn secondary md:inline-flex">View Practice Routines</NuxtLink>

    <h2 class="mt-12">Playing the Percentages</h2>
    <p>
      We all have good and bad days in darts, but wouldn't it be nice to increase your chances of winning x01 games on
      those bad days? Well it's possible if you learn to play the percentages. Using the right checkouts will
      dramatically increase that chance and make the good days even better.
    </p>

    <p>
      "Flipout" from Dartology is a tool designed to do just that. It works like flash cards by presenting you a score
      and allowing you to guess what the correct checkout is based on the likelihood of missing the intended target.
    </p>

    <p>This is how the pros play and win.</p>
    <NuxtLink to="/flipout" class="mt-4 btn secondary md:inline-flex">Play Flipout</NuxtLink>

    <h2 class="mt-12">What's My Out?</h2>
    <p>
      Yea, we hear it all the time too, but we got you covered. Our Checkout Chart shows you the best way to go, based
      on playing the percentages, when trying to win a game.
    </p>
    <NuxtLink to="/checkout-chart" class="mt-4 btn secondary md:inline-flex">Look up an Out</NuxtLink>

    <h2 class="mt-12">What should I do?</h2>
    <p>
      Sometimes it hard to know what to do to get to the best check out. Our Setups tool will help you learn what the
      best thing to do is when you're trying to get to a good out before your opponent does.
    </p>
    <NuxtLink to="/setups" class="mt-4 btn secondary md:inline-flex">View Setups</NuxtLink>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dartology is a collection of tools to learn more about darts and become more proficient in your game.",
        },
      ],
    };
  },
};
</script>
