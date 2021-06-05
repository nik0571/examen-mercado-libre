import SearchComponent from 'components/Search';
import { Route, Switch } from 'react-router-dom';
import { routeList } from 'routes';
import AppWrapper, { MainHeaderWrapper, MainBodyWrapper } from 'styles/AppWrapper';
import PageNotFoundView from 'views/PageNotFound';
import './App.scss';

function App() {
  return (
    <AppWrapper>
      <MainHeaderWrapper>
        <SearchComponent />
      </MainHeaderWrapper>
      <MainBodyWrapper>
        <Switch>
          {routeList.map(({ path, exact, Component }) => {
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={(renderProps) => <Component {...renderProps} />}
              />
            );
          })}
          <Route component={PageNotFoundView} />
        </Switch>
      </MainBodyWrapper>
    </AppWrapper>
  );
}

export default App;
