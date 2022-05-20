<template>
  <!-- v-for v-if -->
  <ul>
    <template v-for="(city, index) in cities" :key="index">
      <li v-if="city.population > 1517550">
        {{ city }}
      </li>
    </template>
  </ul>
  <ul>
    <li
      v-for="(city, index) in cities.filter((item) => {
        return item.population > 1517550;
      })"
      :key="index"
    >
      {{ city }}
    </li>
  </ul>
  <!-- v-for -->
  <div v-for="(animal, index) in animals" :key="index">
    <h3>{{ index + 1 }}: {{ animal.name }}</h3>
    <ul>
      <li v-for="(food, index) in animal.foods" :key="index">
        {{ index + 1 }}: {{ food }}
      </li>
    </ul>
  </div>
  <span v-for="(count, index) in 10" :key="index"
    >{{ index }}:{{ count }}<template v-if="index < 9">,</template></span
  >
  <h2 v-for="(value, key, index) in user" :key="index">
    {{ index }}. {{ key }}: {{ value }}
  </h2>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ index + 1 }}. {{ fruit }}
    </li>
  </ul>
  <h2>{{ fruits }}</h2>
  <h2>Hello World</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cities: [
        { name: "New York", population: 8550405 },
        { name: "Los Angeles", population: 3971883 },
        { name: "Chicago", population: 2720546 },
        { name: "Houston", population: 2296224 },
        { name: "Philadelphia", population: 1517550 },
        { name: "Phoenix", population: 1445632 },
        { name: "San Antonio", population: 1327407 },
        { name: "San Diego", population: 1307402 },
        { name: "Dallas", population: 1197816 },
        { name: "San Jose", population: 945942 },
      ],
      animals: [
        { name: "Lion", foods: ["Meat", "Cow"], species: "Carnivore" },
        { name: "Tiger", foods: ["Meat", "Deer"], species: "Carnivore" },
        {
          name: "Elephant",
          foods: ["Vegetables", "Fruits"],
          species: "Herbivore",
        },
        { name: "Snake", foods: ["Mice", "Snake"], species: "Carnivore" },
        { name: "Bear", foods: ["Vegetables", "Meat"], species: "Herbivore" },
      ],
      user: {
        name: "John Doe",
        age: 30,
        city: "New York",
        country: "USA",
      },
      fruits: ["Apple", "Banana", "Orange"],
      message: "Hello World",
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
