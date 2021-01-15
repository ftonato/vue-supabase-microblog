<template>
  <div class="flex flex-wrap items-center sm:-mx-3 mt-12">
    <div class="w-full">
      <div class="w-full pb-6 space-y-6 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
        <h1
          class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-4xl"
        >
          <span class="block xl:inline">{{ title }}</span>
        </h1>
        <p
          class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-full"
        >{{ getShortDescription }}</p>
        <div class="relative flex flex-col sm:flex-row sm:space-x-4">
          <router-link
            :to="{ name: 'post-item', params: { title, description } }"
            class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
          >
            Read the article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" class />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    id: Number,
    title: String,
    description: String,
  },
  computed: {
    getShortDescription() {
      return `${this.description.substr(0, 100)}...`;
    },
  },
};
</script>