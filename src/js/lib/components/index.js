import Store from '../../store/store.js';

//Component base class
//
export default class Component {
  constructor(props = {}) {
    let self = this;
    //If the child component has render, call it else call function() {}
    this.render = this.render || function() {};

    //if child component has Store, subscribe to stateChange with re-rendering
    if(props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.render());
    }

    if(props.hasOwnProperty('element')) {
      this.element = props.element;
    }
  }
}
