import React from 'react';

import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'


//hash模式
//history模式（配合后端使用）

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function Home(){
    return(
        <div>
            <h1>首页</h1>
        </div>
    )
}

function Me(){
    return(
        <div>
            <h1>个人中心</h1>
        </div>
    )
}

function Product(){
    return(
        <div>
          <h1>产品页面</h1>
        </div>
    )
}

class App extends React.Component{
    render(){
        return(
        <div id="app">
            <Router>
                <div className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/me">个人中心</Link>
                </div>
                <Route path="/" exact component={Home}></Route>
                <Route path="/product" component={Product}></Route>
                <Route path="/me" component={Me}></Route>
            </Router>

        </div>
        )
    }
}