<template>
    <div class="page-container">
      <HeaderComponent />
      <MenuComponent />

      <div class="page-content">
        <h1>Welcome to page 1 content.</h1>

          <!-- Show only Page 1 content unless Section 1 is selected -->
        <div v-if="!showSection1 && !showSection2">
          <p class="center-line">---------------------------------------------------------------------------------</p>
          <div class="input-group"> 
            <label> This is message on Page 1</label>
            <input v-model="page1Message" type="text" placeholder="Enter message for Page 1" /></div>
          
          <button @click="submitPage1Message">Submit Page 1 Message</button>
        </div>

        <!-- Show only Section 1 content if #section1 is in the URL hash -->
        <div v-if="showSection1">
          <p class="center-line">---------------------------------------------------------------------------------</p>
          <div>
            <label>This is section 1 on page 1</label>
          <input v-model="section1Message" type="text" placeholder="Enter message for Section 1" />
          </div>
          
          <button @click="submitSectionMessage('section1')">Submit Section 1 Message</button>
        </div>

        <!-- Show only Section 2 content if #section2 is in the URL hash -->
        <div v-if="showSection2">
          <p class="center-line">---------------------------------------------------------------------------------</p>
          <div>
            <label>This is section 2 on page 1</label>
          <input v-model="section2Message" type="text" placeholder="Enter message for Section 2" /> </div>
          
          <button @click="submitSectionMessage('section2')">Submit Section 2 Message</button>
        </div>
      </div>
      <FooterComponent />

    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/Header.vue';
  import MenuComponent from '../components/Menu.vue';
  import FooterComponent from '../components/Footer.vue';
  import { ref, watch } from 'vue';
  import { useMessageStore } from '../stores/message'; // Import the store
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      MenuComponent
    },setup() {
    const messageStore = useMessageStore(); // Access the store
    const page1Message = ref('');
    const section1Message = ref('');
    const section2Message = ref('');

    const showSection1 = ref(false); 
    const showSection2 = ref(false); 

    // Watch for changes in the URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); 
      showSection1.value = hash === 'section1'; 
      showSection2.value = hash === 'section2'; 
    };

    // Watch for URL hash changes
    watch(
      () => window.location.hash,
      () => handleHashChange(),
      { immediate: true } 
    );


    // Submit the general message for Page 1
    const submitPage1Message = () => {
      messageStore.setPage1Message(page1Message.value); 
      page1Message.value = ''; 
    };

    // Submit the Section 1 or Section 2 message
    const submitSectionMessage = (section) => {
      if (section === 'section1') {
        messageStore.setSection1Message(section1Message.value); 
        section1Message.value = ''; 
      } else if (section === 'section2') {
        messageStore.setSection2Message(section2Message.value); 
        section2Message.value = ''; 
      }
    };

    return {
      page1Message,
      section1Message,
      section2Message,
      submitPage1Message,
      submitSectionMessage,
      showSection1,
      showSection2,
    };
  },

  };
  </script>
  
  <style scoped>
    .page-container {
      font-family: Arial, sans-serif;
    }

    .page-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 10px;
      height: 50vh;
      padding-bottom:10px;
      margin:auto;
      margin-bottom:80px;
      background-color: #f4f4f4;
    }

    section {
      padding: 20px;
    }
    .input-group{
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    input {
      padding: 10px;
      border:4px solid rgb(212, 205, 205);
      border-radius: 10px;
      margin: auto;
      width: 350px;
      height:70px;
      margin-left: 60px;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    button {
      padding:10px 10px;
      margin: auto;
      border:10px solid rgb(243, 234, 234);
      border-radius: 8px;
      margin-left: 245px;
      height:50px;
      width:350px;
      background-color: #080051;
      color: white;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #00033a;
    }

    .center-line {
      text-align: center;
      font-size: 1.5rem;
      margin: 20px 0;
      color: #ccc;
    }

    h2 {
      margin-bottom: 20px;
      color: #00ff9d;
      text-align: center;
    }
  </style>