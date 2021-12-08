<template>
  <div class="students-show">
    <h1>First name: {{ student.first_name }}</h1>
    <h3>Last name: {{ student.last_name }}</h3>
    <h3>email:{{ student.email }}</h3>
    <h3>Phone number: {{ student.phone_number }}</h3>
    <h3>Short bio: {{ student.short_bio }}</h3>
    <h3>
      Linkedin:
      <a v-bind:href="`${student.linkedin}`">{{ student.linkedin }}</a>
    </h3>
    <h3>
      Twitter handle:
      <a v-bind:href="`https://twitter.com/${student.twitter}`">{{ student.twitter }}</a>
    </h3>
    <h3>
      Website:
      <a v-bind:href="`${student.website}`">{{ student.website }}</a>
    </h3>
    <h3>Online resume: {{ student.online_resume }}</h3>
    <h3>photo: {{ student.photo }}</h3>
    <h3>Skills:</h3>
    <div v-for="skill in skills" :key="skill.id">
      <h4>{{ skill.skill }}</h4>
    </div>
    <router-link v-bind:to="`/`">Home</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      skills: [],
    };
  },
  created: function () {
    axios.get("/students/" + this.$route.params.id).then((response) => {
      this.student = response.data;
      this.skills = response.data.skills;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>
