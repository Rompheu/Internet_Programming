import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: JSON.parse(localStorage.getItem("todos")) || [], // Load todos from localStorage
  }),
  getters: {
    countTodos: (state) => state.todos.length, // Getter to count todos
  },
  actions: {
    // Fetch todos from the backend
    async fetchTodos() {
      try {
        const response = await axios.get("http://localhost:3100/tasks");
        if (Array.isArray(response.data)) {
          this.todos = response.data;
          localStorage.setItem("todos", JSON.stringify(this.todos)); // Save to localStorage
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch todos:", error.message);
      }
    },

    // Toggle the completion status of a todo
    toggleStatus(id) {
      const foundIndex = this.todos.findIndex((t) => t.id === id);
      if (foundIndex >= 0) {
        const todo = this.todos[foundIndex];
        todo.completedAt = todo.completedAt ? null : new Date().toISOString();
        localStorage.setItem("todos", JSON.stringify(this.todos)); // Update localStorage
      } else {
        console.warn(`Todo with id ${id} not found.`);
      }
    },

    // Add a new todo
    addTodo(todoName) {
      const newId = this.todos.length > 0
        ? Math.max(...this.todos.map((t) => t.id)) + 1
        : 1; // Generate a unique ID
      this.todos.push({
        id: newId,
        name: todoName,
        description: "description",
        createdAt: new Date().toISOString(),
        completedAt: null,
      });
      localStorage.setItem("todos", JSON.stringify(this.todos)); // Save to localStorage
    },

    // Clear all todos
    clearAll() {
      this.todos = [];
      localStorage.removeItem("todos"); // Clear localStorage
    },
  },
});