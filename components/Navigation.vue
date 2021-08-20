<template>
  <div class="relative" @keyup.esc="isOpen = false">
    <button class="block lg:hidden" @click="isOpen = !isOpen">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <span class="sr-only">Menu</span>
    </button>

    <nav
      class="absolute right-0 z-50 w-48 p-2 mt-2 space-y-1 bg-gray-800 rounded shadow-md lg:hidden"
      v-show="isOpen"
      :class="{ hidden: !isOpen }"
    >
      <NavItem kind="mobile" to="/practice">Practice</NavItem>
      <NavItem kind="mobile" to="/flipout">Flipout</NavItem>
      <NavItem kind="mobile" to="/checkout-chart">Checkout Chart</NavItem>
      <NavItem kind="mobile" to="/setups">Setups</NavItem>
      <NavItem kind="mobile" to="https://en.wikipedia.org/wiki/Glossary_of_darts" :external="true">Terminology</NavItem>
      <NavItem kind="mobile" to="/login">Login</NavItem>
      <NavItem kind="mobile" to="/register">Register</NavItem>
    </nav>

    <nav class="items-center hidden space-x-1 lg:flex">
      <NavItem to="/practice">Practice</NavItem>
      <NavItem to="/flipout">Flipout</NavItem>
      <NavItem to="/checkout-chart">Checkout Chart</NavItem>
      <NavItem to="/setups">Setups</NavItem>
      <NavItem to="https://en.wikipedia.org/wiki/Glossary_of_darts" :external="true">Terminology</NavItem>
      <NavItem to="/login">Login</NavItem>
      <NavItem to="/register">Register</NavItem>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>