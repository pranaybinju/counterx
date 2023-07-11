import Component from "./index.js";
import store from "../../store/index.js"

class Counter extends Component {

    constructor({element}){
        super({store, element});

        
    }

    render(){
        this.element.innerHTML =  (
            `<div>
               <button id="increase">+</button> 
               <span>${store.state.count}</span>
               <button id="decrease">-</button> 
            </div>`
        )

        const incrementBtn = document.querySelector("#increase");
        const decrementBtn = document.querySelector("#decrease");

        incrementBtn.addEventListener('click', function(){
            store.dispatch('increment')
        })

        decrementBtn.addEventListener('click', function(){
            store.dispatch('decrement')
})
    }
}

export default Counter