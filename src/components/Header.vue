<template>
  <header class="w-full px-6 antialiased bg-white select-none">
    <div class="mx-auto max-w-7xl">
      <nav class="relative z-50 h-24">
        <div
          class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2"
        >
          <a href="/" class="w-full py-4 pr-4 md:py-0">
            <span class="text-xl font-black leading-none text-gray-900 select-none logo">
              Vue + Supabase
              <span class="text-indigo-600">BLOG</span>
            </span>
          </a>
          <div
            class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex"
          >
            <div
              class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto"
            >
              <a
                href="/"
                class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden"
              >
                Vue + Supabase
                <span class="text-indigo-600">.</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <template v-if="showTitle">
        <div
          class="container max-w-lg px-4 pt-16 pb-6 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
          >
            <span class="inline md:block">Creating a simple BLOG using</span>
            <span
              class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500"
            >Vue + Supabase</span>
          </h1>
        </div>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    showTitle() {
      return this.$route.name === "posts-list";
    },
  },
};
</script>

