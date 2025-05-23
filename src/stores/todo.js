import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [], // Load from backend only, optional: restore from localStorage on init if desired
  }),
  getters: {
    countTodos: (state) => state.todos.length,
  },
  actions: {
    // Fetch todos from backend and cache locally
    async fetchTodos() {
      try {
        const response = await axios.get("http://localhost:3100/tasks");
        if (Array.isArray(response.data)) {
          this.todos = response.data;
          localStorage.setItem("todos", JSON.stringify(this.todos));
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch todos:", error.message);
        // Optionally restore from localStorage if backend unavailable
        const cached = localStorage.getItem("todos");
        if (cached) {
          this.todos = JSON.parse(cached);
        }
      }
    },

    // Add new todo: send to backend, then update local state + localStorage
    async addTodo(todoName) {
      const newTodo = {
        name: todoName,
        description: "description",
        createdAt: new Date().toISOString(),
        completedAt: null,
      };

      try {
        const response = await axios.post("http://localhost:3100/tasks", newTodo);
        this.todos.push(response.data);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } catch (error) {
        console.error("Failed to add todo:", error.message);
      }
    },

    // Toggle completion status: patch backend, update local state + localStorage
    async toggleStatus(id) {
      const foundIndex = this.todos.findIndex((t) => t.id === id);
      if (foundIndex >= 0) {
        const todo = this.todos[foundIndex];
        const updatedTodo = {
          completedAt: todo.completedAt ? null : new Date().toISOString(),
        };

        try {
          const response = await axios.patch(`http://localhost:3100/tasks/${id}`, updatedTodo);
          this.todos[foundIndex] = response.data;
          localStorage.setItem("todos", JSON.stringify(this.todos));
        } catch (error) {
          console.error(`Failed to toggle status on backend:`, error.message);
        }
      } else {
        console.warn(`Todo with id ${id} not found.`);
      }
    },

    // Clear all todos on backend + frontend + localStorage
    async clearAll() {
      try {
        await axios.delete("http://localhost:3100/tasks"); // Make sure backend route supports deleting all tasks
        this.todos = [];
        localStorage.removeItem("todos");
      } catch (error) {
        console.error("Failed to clear todos from backend:", error.message);
      }
    },
  },
});
