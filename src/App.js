import React from 'react';
import { BrowserRouter as HashRouter, Route, Link, Switch } from 'react-router-dom'
import ListInput from './Component/List/ListInput'
import Search from './Component/Jikan/Search'
import './App.css';
import Momentum from './Component/Momentum/Momentum'
import Joke from './Component/Joke/Joke';
import "bootstrap/dist/css/bootstrap.css";
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;


function App() {

  return (
    <Layout style={{ height: '100vh', backgroundColor: '#b1859b	' }}>

      <HashRouter basename='/eveningmares'>
        <Header style={{ backgroundColor: 'lightGray', width: '100vw' }}>
          <Menu
            mode="horizontal"
            style={{ backgroundColor: 'lightGray', lineHeight: '44px' }}
          >
            <Menu.Item className='menu-item' key="1"><Link to='/'>Home Page</Link></Menu.Item>
            <Menu.Item className='menu-item' key="2"><Link to='/Search'>free time?</Link></Menu.Item>
            <Menu.Item className='menu-item' key="3"><Link to='/ListInput'>list</Link></Menu.Item>
            <Menu.Item className='menu-item' key="4"><Link to='/Joke'>feeling sad?</Link></Menu.Item>
          </Menu>
        </Header> <Switch>
            <Route exact path='/' component={Momentum}></Route>
        <Content style={{ padding: '0px',  overflow: 'scroll'}} >
        <div style={{ background: '#fff', margin: 20, minHeight: 280, height:'80vh', overflow: 'auto' }}>
         
            <Route path='/Search' component={Search}></Route>
            <Route path='/ListInput' component={ListInput}></Route>
            <Route path='/Joke' component={Joke}></Route>
            {/* <Route path='/FavoriteFood' component={FavoriteFood}></Route> */}
            {/* <Route  component={Error}></Route> */}
          
          </div>
        </Content>
        </Switch>
      </HashRouter>
    </Layout>
  );
}

export default App;
