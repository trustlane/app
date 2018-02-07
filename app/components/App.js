import React from 'react';
import Nav from './Nav';
import Create from './Create';
import Sign from './Sign';

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import {Grid} from 'react-uikit3';

export default class App extends React.Component {
  render() {
    return (
      <div>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/create" component={Create}/>
          <Route path="/:id" component={Sign}/>
        </Switch>

        <footer className="uk-padding uk-margin-top uk-text-center">
            <a href="https://github.com/trustlane/app" className="uk-icon-link" target="_blank">
              <svg width="80" height="80" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-ratio="1"> <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z" fill="#FFF"></path></svg>
            </a>

            <h6 className="donate">Donate: <b>GBFLQVHFHI4OKNBGWB4BU7NWPJDJ7X5ULGFN2UTUI6DRB53HRC3ZGIWA</b></h6>
        </footer>

      </div>
    );
  }
}

const Home = () => (
  <Grid className="uk-flex-center uk-cover-container hero-image">
    <div class="uk-position-center uk-overlay">
      <div className='uk-width-2-3@m uk-padding uk-light uk-text-center uk-position-center'>
        <h2>About <strong>Trustlane</strong>.me</h2>
        <p>Simple <u><a href="http://stellar.org" target="_blank">Stellar</a></u> Trust generator app. Issuers quickly generate their custom token form (no Issuer private key needed). Issuers then share the unique URL with their users who simply sign the trust form.</p>

        <p>
          <Link to="/create" className="uk-button uk-button-primary uk-margin-small-right">Create a Trust Form</Link>
          <Link to="https://github.com/trustlane/app" className="uk-button uk-button-default" target="_blank">GitHub</Link>
        </p>

      </div>
    </div>
  </Grid>
)
