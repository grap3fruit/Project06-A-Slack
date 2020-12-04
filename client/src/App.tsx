import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  NotFoundPage,
  LoginPage,
  HomePage,
  EmailVerifyPage,
  SignupPage,
  WorkSpacePage,
} from '@/pages';
import theme from '@/styles/theme';
import { GlobalStyle } from '@/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/verify" component={EmailVerifyPage} />
          <Route path="/signup" component={SignupPage} />
          <Route
            path="/client/1/:channelId(\d+)?/:rightSideType(\d+)?/:threadId(\d+)?"
            exact
            component={WorkSpacePage}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
