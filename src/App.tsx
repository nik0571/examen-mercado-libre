import { Route, Switch } from 'react-router-dom';
import AppWrapper from 'styles/AppWrapper';
import HomeView from 'views/Home';
import PageNotFoundView from 'views/PageNotFound';
import './App.scss';

function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route component={PageNotFoundView} />
      </Switch>
    </AppWrapper>
  );
}

export default App;
