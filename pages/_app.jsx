import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import App, { Container as AppContrainer } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import modules, {setUser} from '../redux/modules';

class BaseApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps, store, user } = this.props;
    return (
      <AppContrainer>
        <Provider store={store}>
          <div>
            <NavBar />
            <div className=" container-fluid">
              <div className="row">
                <LeftMenu />
                <div className="col">
                  <Component {...pageProps}></Component>
                </div>
              </div>
            </div>
          </div>
        </Provider>
      </AppContrainer>
    )
  }
}

class LeftMenu extends Component {
  render() {
    return (
      <div className="col-2"
        style={{ backgroundColor: '#cccccc', color: 'black', fontSize: 20, minHeight: '100vh' }}>
        <br />
        <div>
          Bienvenido: {this.props.username}
        </div>
        <div>
          <Link href="index">
            <a>Home</a>
          </Link>
          <button onClick={()=>Router.push('/pag1',{query:{id:1}})}>pag1</button>
        </div>
        <div>
          <Link href="pag1">
            <a>Pag 1</a>
          </Link>
        </div>
        <div>
          <Link href="pag2">
            <a>Pag 2</a>
          </Link>
        </div>
      </div>
    );
  }
}

LeftMenu = connect(state => ({ username: state.username }), {})(LeftMenu)

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">React Rules</a>
        {this.props.username}
        <div 
          className="form-inline" style={{ marginLeft: 20 }}>
          <input className="form-control" type="search" placeholder="usuario"
            onChange={e=>this.props.setUser(e.target.value)} />
        </div>
      </nav>
    )
  }
}

NavBar = connect(state => ({ username: state.username }), {setUser})(NavBar)

function makeStore(initialState, options) {
  const store = createStore(modules, initialState)
  return store;
}
export default withRedux(makeStore)(BaseApp);