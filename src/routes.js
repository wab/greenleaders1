import React  from 'react';
import {Route, IndexRoute, Link} from 'react-router';
import PostsIndex from './components/posts_index';
import Archives from './components/Archives';
import RubNavigation from './components/RubNavigation';
import Article from './components/Article';
import App from './components/App';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route exact path="/" component={Home} />
    <Route path="/posts" component={PostsIndex} />
    <Route path="/:postId" component={Article} />
    <Route path="/archives" component={Archives} />
    <Route path="/rubrique/:rubriqueId" component={Archives} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </Route>
);