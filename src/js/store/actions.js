//This is actions object
export default {
    increment(store) {
        //commits mutation
        store.commit('increment');
    },
    decrement(store) {
        store.commit('decrement');
    }
};