<template>
  <article>
    <h1>{{ routine.title }}</h1>
    <div class="flex items-center mt-2 space-x-2">
      <div
        v-for="category in routine.categories"
        :key="category.id"
        class="px-2 py-1 text-xs font-bold text-white uppercase rounded bg-tertiary-500"
      >
        {{ category.title }}
      </div>
    </div>

    <h2 class="mt-6">Goal</h2>
    <div v-html="routine.goal"></div>

    <h2 class="mt-6">Targets</h2>
    <div v-html="routine.targets"></div>

    <h2 class="mt-6">Instructions</h2>
    <div v-html="routine.instructions"></div>
  </article>
</template>

<script>
export default {
  async asyncData({ route, $supabase }) {
    const { data: routine } = await $supabase
      .from("routines")
      .select(`*, categories(id, title)`)
      .filter("slug", "eq", route.params.slug)
      .single();
    return { routine };
  },
  head() {
    return {
      title: this.routine.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.routine.goal.replace("<p>", "").replace("</p>", ""),
        },
      ],
    };
  },
};
</script>
