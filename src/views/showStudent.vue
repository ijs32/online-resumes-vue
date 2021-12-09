<template>
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <span>Resume</span>
          <h2>Resume</h2>
          <h4> <a v-bind:href="`/student/${student.id}/capstone`">My Projects</a> </h4>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>{{student.first_name + " " + student.last_name}}</h4>
              <ul>
                <p>{{student.short_bio}}</p>
              </ul>
              <p>
              <ul>
                <li>photo: {{ student.photo }}</li>
                <li>Phone Number: {{ student.phone_number }}</li>
                <li>Email: {{ student.email }}</li>
                <li>Online resume: {{ student.online_resume }}</li>
                <li>LinkedIn: {{ student.linkedin }}</li>
                <li>Website: {{ student.website }}</li>
                <li>GitHub: {{ student.github }}</li>
                <li>
                  <p>Twitter Handle:
                    <a v-bind:href="`https://twitter.com/${student.twitter}`">{{ student.twitter }}</a>
                    </p>
                </li>
              </ul>
              </p>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
             <div v-for="education in educations" :key="education.id">
                <h4>{{education.degree}}</h4>
                <h5>2015 - 2016</h5>
                <p><em>{{education.university_name}}</em></p>
                <p>{{education.details}}</p>
                </div> 
            </div>
          </div>
          <div class="col-lg-6">
            <div class="resume-item"> 
              <h3 class="resume-title">Professional Experience</h3>
              <div v-for="experience in experiences" :key="experience.id">
              <h4>{{experience.job_title}}</h4>
              <h5>{{experience.start_date}} - {{experience.end_date}}</h5>
              <p><em>{{experience.company}}</em></p>
              <p>
              <ul>
                <li>{{experience.details}}</li>
              </ul>
              </p>
            </div>
          </div>            
        <div class="resume-item">
            <h3 class="resume-title">Skills</h3>
            <ul>
              <div v-for="skill in skills" :key="skill.id">
                <li> {{ skill.skill }} </li>
                </div> 
             </ul>
          </div>
        </div>
    </div>
  </div> 
    </section>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      skills: [],
      educations: [],
      experiences: [],
      capstones: [],
    };
  },
  created: function () {
    axios.get("/students/" + this.$route.params.id).then((response) => {
      this.student = response.data;
      this.skills = response.data.skills;
      this.educations = response.data.educations;
      this.experiences = response.data.experiences;
      this.capstones = response.data.capstones;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>
