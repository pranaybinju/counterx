export default {
    increment(state, payload) {
      state.count+=1;
  
      return state;
    },
    decrement(state, payload) {
        state.count-=1
  
      return state;
    }
};
  