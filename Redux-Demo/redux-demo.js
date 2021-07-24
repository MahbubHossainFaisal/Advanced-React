const redux = require('redux')

const counterReducer = (state = {counter: 0}, action) => {
    
    if(action.type==='increment'){
        return {
            counter: state.counter + 1
        }
    }
   else if(action.type==='decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () =>{
    const latestState = store.getState() // it will give us the latest updated store information
    console.log(latestState) // without dispatching an action this won't work but getState will make the function work.
}

store.subscribe(counterSubscriber)

store.dispatch({type: 'increment'}) // counter:2 because , we first call the getState() method of the store, so reducer function executed
//and counter becomes 1 , then we dispatched an action , that made the reducer function work twice , so that the counter becomes 2
store.dispatch({type: 'decrement'})
