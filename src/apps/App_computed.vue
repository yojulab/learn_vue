<template>
  <div>
    <label for="message">message : reload method with replacing value</label>
    <input type="text" name="message" id="" v-model="message" />
  </div>
  <div>
    <label for="english">English Score : </label>
    <input type="number" name="english" id="" v-model="scores.english" />
  </div>
  <h3>method scores : {{ getScores() }}</h3>
  <h3>computed scores : {{ computeScores }}</h3>
  <h3>concatenate address : {{ concatenateAddress }}</h3>
  <h2>data : {{ location.street }} {{ location.city }} {{ location.state }}</h2>
</template>

<script>
export default {
  name: "App",
  methods: {
    getScores() {
      console.log("method!! getScores");
      const { math, english, science } = this.scores;
      return math + english + science;
    },
  },
  computed: {
    concatenateAddress() {
      return `${this.location.street} - ${this.location.city} - ${this.location.state}`;
    },
    computeScores() {
      console.log("computed!! computeScores");
      const { math, english, science } = this.scores;
      return math + english + science;
    },
  },
  data() {
    return {
      scores: {
        math: 80,
        english: 90,
        science: 70,
      },
      message: "Hello World",
      location: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
      },
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
