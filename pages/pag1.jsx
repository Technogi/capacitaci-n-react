import { createStore } from 'redux'
import { Component } from 'react'

function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'sum':
      return {
        ...state,
        counter: state.counter + action.payload
      }
  }
  
  return state
}

const store = createStore(reducer)

export default class Pag1 extends Component {
  constructor(props){
    super(props)

    store.subscribe(()=>{
      console.log('nuevo estado', store.getState());
      this.setState({contador:store.getState().counter})
    })

    this.state = {
      contador: 0
    }

  }

  render() {
    return (
      <h1>
        {this.state.contador}
        <button
          onClick={() => store.dispatch({ type: 'sum', payload:5 })}>
          click
        </button>
      </h1>
    )
  }
}
