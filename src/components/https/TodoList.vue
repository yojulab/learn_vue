<template>
  <div>
    <h3>Todo List Post method</h3>
    <label for="newTodo">New Todo : </label>
    <input id="newTodo" v-model="newTodo.title" />
    <button @click="postNewTodo">post New Todo</button>
  </div>
  <hr />
  <div>
    <h3>Todo List Get method</h3>
    <button @click="getTodoListFromWeb">get Todo List From Web</button>
    <ul>
      <li v-for="(todo, idx) in todos" :key="idx">
        {{ todo.title }}
      </li>
    </ul>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
      error: null,
      newTodo: {
        title: "New Todo",
        completed: false,
      },
    };
  },
  methods: {
    getTodoListFromWeb() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      //   const url = "https://jsonplaceholder.typicode.com/todos1"; // wrong url for catch()
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.todos = response.data;
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
    postNewTodo() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .post(url, this.newTodo)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
