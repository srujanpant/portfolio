<template>
  <div>
    <h1>Game Jams & Prototypes</h1>

    <div style="margin-bottom: 30px;">
      And here are some games I've made or heavily contributed to during game jams or prototyping.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
