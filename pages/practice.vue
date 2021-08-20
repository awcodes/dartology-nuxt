<template>
  <article>
    <h1>Practice Routines</h1>

    <p>
      We have a plethora of practice routines to help you achieve your darting goals, even if your goal is as simple as
      beating your friends in your local pub on a Tuesday night.
    </p>

    <section class="mt-12" v-for="category in categories" :key="category.id">
      <h2>{{ category.title }}</h2>
      <ul class="divide-y divide-gray-700">
        <li v-for="routine in category.routines" :key="routine.slug">
          <NuxtLink key="{routine.slug}" :to="`/routines/${routine.slug}`" class="flex items-center py-3 reset-link">
            <span class="flex-1 block">
              <h3 class="inline-block text-gray-300" v-html="routine.title"></h3>
              <div class="text-sm" v-html="routine.goal"></div>
            </span>
            <svg
              class="flex-shrink-0 w-6 h-6 ml-3 text-secondary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: "Practice Routines",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dartology has a plethora of practice routines to help you achieve your darting goals, even if your goal is as simple as beating your friends in your local pub on a Tuesday night.",
        },
      ],
    };
  },
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    const { data: categories, error } = await this.$supabase
      .from("categories")
      .select(`*, routines(slug, title, goal)`);

    this.categories = categories;
  },
};
</script>