<template>
  <div>
    <NuxtLink v-if="!external" :to="to" :class="kind" class="reset-link">
      <slot />
    </NuxtLink>
    <a
      v-if="external"
      :href="to"
      target="_blank"
      rel="noopener"
      title="Opens in a new window"
      :class="kind"
      class="reset-link"
    >
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/",
    },
    external: {
      type: Boolean,
      default: false,
    },
    kind: {
      type: String,
      default: "normal",
    },
  },
};
</script>

<style scoped>
.normal {
  @apply py-2 px-3 rounded text-secondary-500;
}

.normal:not(.nuxt-link-active):not(.nuxt-link-exact-active):hover,
.normal:not(.nuxt-link-active):not(.nuxt-link-exact-active):focus {
  @apply bg-gray-700;
}

.normal.nuxt-link-active,
.normal.nuxt-link-exact-active {
  @apply bg-secondary-500 text-black;
}

.mobile {
  @apply block py-2 text-center bg-gray-700 rounded;
}

.mobile.nuxt-link-active,
.mobile.nuxt-link-exact-active {
  @apply bg-secondary-500 text-black;
}

.mobile:not(.nuxt-link-active):not(.nuxt-link-exact-active):hover,
.mobile:not(.nuxt-link-active):not(.nuxt-link-exact-active):focus {
  @apply bg-primary-500 text-gray-900;
}
</style>