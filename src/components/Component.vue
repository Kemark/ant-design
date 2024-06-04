<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
        colorBgBase: '#00b96b',
        colorPrimaryActive: '#111111',
        colorPrimaryBorder: '#0958d9',
        lineWidth: '.3rem',
        colorPrimaryBorderHover: '#ff7875',
      },
    }"
  >
  </a-config-provider>

  <main>
    <h2>1. Ant Design InputText</h2>
    <a-input v-model:value="msg" placeholder="Placeholder" />
    <p>{{ msg }}</p>

    <h2>2. Ant Design Button</h2>
    <a-button>Button</a-button>

    <h2>3. Semantic HTML</h2>

    <h2>3.1 Unordered list</h2>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>

    <h2>3.2 Ordered list</h2>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>

    <h2>3.3 Ant Design List</h2>
    <a-list size="small" bordered :data-source="data">
      <a-list-item>item 1</a-list-item>
      <a-list-item>item 2</a-list-item>
    </a-list>
  </main>

  <nav>
    <h2>3.4.1 details/summary</h2>

    <details>
      <summary>Header I</summary>
      <div>Header 1 Content</div>
    </details>
    <details>
      <summary>Header II</summary>
      <div>Header 2 Content</div>
    </details>
    <details>
      <summary>Header III</summary>
      <div>Header 3 Content</div>
    </details>
  </nav>

  <nav>
    <h2>3.4.2 Ant Design Accordion</h2>
    <a-collapse>
      <a-collapse-panel key="1" header="Header 1">
        <p>Content I</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="Header 2">
        <p>Content II</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="Header 3">
        <p>Content III</p>
      </a-collapse-panel>
    </a-collapse>
  </nav>

  <h1>4. Date</h1>

  <h2>4.1. Standard HTML</h2>
  <label for="date">Date: </label>
  <input type="date" id="date" />

  <h2>4.2. Ant Design Calendar</h2>
  <section>
    <a-date-picker v-model:value="date" />
  </section>

  <h1>5. Slider</h1>

  <h2>5.1 Standart HTML</h2>
  <input type="range" />

  <h2>5.2 Primevue Slider</h2>
  <section>
    <Slider v-model="value" :step="20" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { theme } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const msg = ref('');
const date = ref('');
const value = ref(10);
</script>

<style scoped>
input[type='range'] {
  width: 100%;
}
h1 {
  margin-top: 2rem;
}
h2 {
  margin-top: 1rem;
}
</style>
