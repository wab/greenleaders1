import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Article from './components/Article';
import Header from './components/Header';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main className="mainwrapper">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="article/:postId" component={Article}/>
      </main>
    </div>
  </Router>
)

export default App