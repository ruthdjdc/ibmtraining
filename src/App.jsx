import React, { Component } from 'react';
import {Header} from './components/header.jsx';
import Footer from './components/footer.jsx'
import Body from './components/body';


class App extends Component {
  render() {
    return (
      <div className='thisapp-app' >
<Header/>
<Body/>
<Footer/>

console.log('whatever yo');

</div>
    );
  }
}

export default App;
