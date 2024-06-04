import { createApp, defineCustomElement } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import Component from './components/Component.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

const myApp = defineCustomElement(Component);
customElements.define('my-component', myApp);

app.use(router);
app.use(Antd);
app.mount('#app');
