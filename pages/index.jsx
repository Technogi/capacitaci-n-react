import { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'

import Head from '../components/head'
import Nav from '../components/nav'

const mensajes = ['hola technogi', 'hola 2', 'hola 3'];

function renderMensajes() {
  return mensajes.map(mensaje => <div>{mensaje}</div>)
}

class IndexPage extends Component {
  state = {
    contador: 0,
    propiedad2: 1,
    todos: [],
  }

  constructor(props){
    super(props)
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response=>{
        this.setState({todos: response.data})
      })
      .catch(e=>console.log(e))
  }

  onClick(r, e){
    this.setState({contador: this.state.contador +1})
  }
  
  renderTodos(){
    return this.state.todos.map(todo=>{
      return <li>{todo.title}</li>
    })
  }

  render() {
    return (
      <div style={{ fontSize: 30 }}>
        <ul>
          {this.renderTodos()}
        </ul>
        <button onClick={this.onClick.bind(this, 24)}>
          Contador
        </button>
        <div>{this.state.propiedad2}</div>
        <BannerComponent 
          display={`El contador está en ${this.state.contador}`}>
        </BannerComponent>
      </div>
    )
  }
}

const Banner = (props) => (<div>{props.display}</div>)

class BannerComponent extends Component{
  render(){
    return (
      <div>
        <h1>{this.props.display}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default IndexPage;

//export default () => (
//  <div>
//    <Head title="Home" />
//    <Nav />
//
//    <div className="hero">
//      <h1 className="title">
//        {renderMesnajes()}
//        {mensajes.map((m,i)=>{
//          return <div>{m} - {i} </div>
//        })}
//      </h1>
//      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
//
//      <div className="row">
//        <Link href="https://github.com/zeit/next.js#getting-started">
//          <a className="card">
//            <h3>Getting Started &rarr;</h3>
//            <p>Learn more about Next on Github and in their examples</p>
//          </a>
//        </Link>
//        <Link href="https://open.segment.com/create-next-app">
//          <a className="card">
//            <h3>Examples &rarr;</h3>
//            <p>
//              Find other example boilerplates on the <code>create-next-app</code> site
//            </p>
//          </a>
//        </Link>
//        <Link href="https://github.com/segmentio/create-next-app">
//          <a className="card">
//            <h3>Create Next App &rarr;</h3>
//            <p>Was this tool helpful? Let us know how we can improve it</p>
//          </a>
//        </Link>
//      </div>
//    </div>
//
//    <style jsx>{`
//      .hero {
//        width: 100%;
//        color: #333;
//      }
//      .title {
//        margin: 0;
//        width: 100%;
//        padding-top: 80px;
//        line-height: 1.15;
//        font-size: 48px;
//      }
//      .title, .description {
//        text-align: center;
//      }
//      .row {
//        max-width: 880px;
//        margin: 80px auto 40px;
//        display: flex;
//        flex-direction: row;
//        justify-content: space-around;
//      }
//      .card {
//        padding: 18px 18px 24px;
//        width: 220px;
//        text-align: left;
//        text-decoration: none;
//        color: #434343;
//        border: 1px solid #9B9B9B;
//      }
//      .card:hover {
//        border-color: #067df7;
//      }
//      .card h3 {
//        margin: 0;
//        color: #067df7;
//        font-size: 18px;
//      }
//      .card p {
//        margin: 0;
//        padding: 12px 0 0;
//        font-size: 13px;
//        color: #333;
//      }
//    `}</style>
//  </div>
//)
//