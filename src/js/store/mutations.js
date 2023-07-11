export default {
    increment(store) {
      store.state.count+=1;
      console.log(store.state.count)
      return store;
    },
    decrement(store) {
      store.state.count-=1
  
      return store;
    }
};
  