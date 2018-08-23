import {Component} from 'react'
import { connect } from 'react-redux'; 
import { showMsg } from '../redux/modules'


class Pag2Page extends Component{

  static getDerivedStateFromProps(props, state){
    console.log('mapping',props,state)
    console.log()
    return {
      ...state,
      show: props.show,
    }
  }
  
  constructor(props){
    super(props)
    this.state = {
      c:0,
      show: false
    }
  }

  renderMsg(){
    if(this.state.show){
      setTimeout(()=>this.props.showMsg(false),2000);
      return <div>Mensaje temporal</div>
    }
    return null;
  }

  render(){
    return (
      <div>
        <button onClick={()=>this.props.showMsg(true)}>
          click
        </button>
        {this.renderMsg()}
      </div>
    )
  }
}

export default connect(state=>{
  return { show: state.show }
},{ showMsg })(Pag2Page);