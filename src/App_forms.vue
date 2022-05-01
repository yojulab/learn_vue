<template>
  <div>
    {{ user }}
    <div>
      <label for="name">Name : </label>
      <input id="name" v-model="user.name" @input="setIssueIMU" />
    </div>
    <div>
      <label for="age">Age : </label>
      <input id="age" v-model="user.age" />
    </div>
    <div>
      <label for="city">City : </label>
      <select name="" id="city" v-model="user.city">
        <option value="">Select a city</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Chicago">Chicago</option>
      </select>
    </div>
    <div>
      <label for="favoriteColor">Favorite Color : </label>
      <select name="" id="favoriteColor" multiple v-model="user.favoriteColor">
        <option
          v-for="(color, index) in colors"
          :value="color.code"
          :key="index"
        >
          {{ color.code }}
        </option>
      </select>
    </div>
    <div>
      <label for="jobs">Jobs : </label>
      <span v-for="(job, index) in jobs" :key="index">
        {{ job.title
        }}<input
          type="checkbox"
          name=""
          id=""
          :value="job.title"
          v-model="user.jobs"
        />
      </span>
    </div>
    <div>
      <label for="gender">Gender : </label>
      <template v-for="(gender, index) in genders" :key="index">
        {{ gender
        }}<input
          type="radio"
          :name="gender"
          id=""
          :value="gender"
          v-model="user.gender"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    setIssueIMU(event) {
      console.log(event.targt.value);
      this.user.name = event.target.value;
    },
  },
  data() {
    return {
      message: "Hello World",
      user: {
        name: "John Doe",
        age: 30,
        city: "New York",
        favoriteColor: ["red"],
        jobs: ["Designer"],
        gender: "female",
      },
      colors: {
        red: {
          code: "red",
          name: "Red",
        },
        green: {
          code: "green",
          name: "Green",
        },
        blue: {
          code: "blue",
          name: "Blue",
        },
      },
      jobs: [
        {
          id: 1,
          title: "Engineer",
          company: "Google",
          location: "New York",
          date: "01/01/2019",
        },
        {
          id: 2,
          title: "Developer",
          company: "Facebook",
          location: "New York",
          date: "01/01/2019",
        },
        {
          id: 3,
          title: "Designer",
          company: "Amazon",
          location: "New York",
          date: "01/01/2019",
        },
      ],
      genders: ["male", "female"],
    };
  },
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
