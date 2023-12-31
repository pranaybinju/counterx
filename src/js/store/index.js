import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import Store from './store.js';

export default new Store({
    state,
    mutations,
    actions
})