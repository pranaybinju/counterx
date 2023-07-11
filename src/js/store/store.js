import PubSub from '../lib/pubsub.js';


//Store shall have 
// state -> data 
// actions -> way to modify data. Actions need to be dispatched using dispatch method
//State and Actions will be initialized using params.
// events -> way to notify about data modification. Uses publish method of PubSub module to notify
// events will be initialized using PubSub
export default class Store {
    constructor(params) {
      let self = this;
      self.actions = {};
      self.mutations = {};
      self.state = {};
      //self.status = 'resting';
      self.events = new PubSub();
      
      if(params.hasOwnProperty('actions')) {
        self.actions = params.actions; //set via state initializer
      }

      if(params.hasOwnProperty('mutations')) {
        self.mutations = params.mutations; //set via state initializer
      }

      self.state = new Proxy((params.state || {}), { //set via state initializer
        set: function(state, key, value) {
      
          state[key] = value; 
      
          console.log(`stateChange: ${key}: ${value}`);
      
          self.events.publish('stateChange', self.state);

          return true;
        }
      });
    }
    //Dispatch is store's method to update state from outer world
    dispatch(actionKey, payload) {

        let self = this;
      
        if(typeof self.actions[actionKey] !== 'function') {
          console.error(`Action "${actionKey} doesn't exist.`);
          return false;
        }
      
        console.groupCollapsed(`ACTION: ${actionKey}`);
      
        //self.status = 'action';
        //Dispatch the action -> goes to action's implementation in actions.js
        self.actions[actionKey](self);
        //self.dispatch(actionKey, payload);
      
        console.groupEnd();
      
        return true;
      }
    //Commit is store's method to update state from internally
    commit(mutationKey) {

        let self = this;
      
        if(typeof self.mutations[mutationKey] !== 'function') {
          console.error(`Mutation "${mutationKey}" doesn't exist`);
          return false;
        }
    
        //self.status = 'mutation';
        //calls mutations implementaion in mutation.js
        self.mutations[mutationKey](self);
    
        return true;
      }
      

  }