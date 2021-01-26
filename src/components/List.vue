<template>
  <section class="px-2 pt-16 pb-6 bg-white md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <template v-for="(post, index) in posts">
        <list-item
          :key="`post-${index}`"
          :id="post.id"
          :title="post.title"
          :description="post.description"
        />
      </template>
    </div>
  </section>
</template>

<script>
import ListItem from "./ListItem";
import DatabaseService from "../Database.service";

export default {
  name: "List",
  components: {
    ListItem,
  },
  data: () => ({
    posts: [],
    database: null,
  }),
  created() {
    const database = new DatabaseService();
    this.database = database.getInstance();
  },
  async mounted() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      let { error, data } = await this.database
        .from("posts")
        .select()
        .order("id");
      if (error) {
        console.error(error);
        return;
      }

      this.setPosts(data);
    },
    setPosts(posts) {
      this.posts = posts;
    },
  },
};
</script>
