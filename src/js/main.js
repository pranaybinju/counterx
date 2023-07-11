import Counter from "./lib/components/counter.js";
import store from "./store/index.js";

const element = document.querySelector('.app');
const countInstance = new Counter({element});
countInstance.render();

