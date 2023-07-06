export default class PubSub {
    constructor() {
      this.events = {};
    }

    subscribe = function(event, callback) {
        if(!this.events[event]){
            this.events[event] = [];
        }

        this.events[event].push(callback);
    }

    publish = function(event, data={}) {
        if(!this.events[event]){
            this.events[event] = [];
        }

        this.events[event].map(callback => callback(data));
    }
  }