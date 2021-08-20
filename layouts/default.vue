<template>
  <main class="px-8 mx-auto max-w-7xl">
    <header class="py-5 border-b-4 border-primary-500 align-full">
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            to="/"
            class="flex items-center text-2xl font-bold tracking-tight uppercase  reset-link md:text-3xl text-primary-500"
          >
            <img src="/images/logo-mark.svg" width="132" height="100" class="w-auto h-8 md:h-10" />
            <span class="ml-2">Dartology</span>
          </NuxtLink>
        </div>
        <Navigation />
      </div>
    </header>

    <div class="py-8 lg:py-12">
      <Nuxt />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>