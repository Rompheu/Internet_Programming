import { defineStore } from 'pinia';

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    page1Message: '',
    section1Message: '',
    section2Message: '',
    page2Message: ''
  }),
  actions: {
    setPage1Message(message) {
      this.page1Message = message;
    },
    setSection1Message(message) {
      this.section1Message = message;
    },
    setSection2Message(message) {
      this.section2Message = message;
    },
    setPage2Message(message) {
      this.page2Message = message;
    }
  }
});
