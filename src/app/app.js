import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component

// Needed for onTouchTap
injectTapEventPlugin();

// Render the main app react component into the app div.
render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('app'));
