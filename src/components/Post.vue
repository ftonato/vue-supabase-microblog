<template>
  <div
    class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32"
  >
    <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
      <div class="flex flex-col w-full md:flex-row">
        <div class="flex justify-between">
          <h1
            class="relative flex flex-col text-6xl font-extrabold text-left text-black"
          >{{ $route.params.title }}</h1>
        </div>
      </div>

      <div class="my-16 border-b border-gray-300 lg:my-24"></div>

      <p class="text-left text-gray-500 xl:text-xl">{{ $route.params.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>