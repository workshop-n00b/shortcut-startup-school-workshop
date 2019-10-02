import React from 'react';
import { Link, Route } from 'react-router-dom';

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
    <h3>{`Watching topic: ${match.params.topicId}`}</h3>
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

const Repository = ({ repo }) => {
  const { name } = repo;
  return (
    
      <div className="repository">
        <a href={repo.html_url} className="repository__link">
        <div className="repository__title">
          {name}
        </div>
        <div className="repository__content">
          <p>
            Stars:
  { repo.stargazers_count }
          </p>
        </div>
        </a>
      </div>
    
  );
};

const App = ({ repositories }) => (

  <div className="repositories">
    <div className="repositories__title">
      My GitHub repositories
    </div>
    <div className="repositories__content">
      { repositories.map((repo) => <Repository repo={repo} />)}
    </div>
  </div>
);

export default App;
