import ReactDOM from 'react-dom'
import React from 'react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

import App from './App';

ReactDOM.render(<App/>,document.getElementById("app"));
if (module.hot) {
  module.hot.dispose(function() {
    // module is about to be replaced
    console.log('dispose ');
    
  })

  module.hot.accept(function() {
    // module or one of its dependencies was just updated

    console.log('hot reloding ');
  })
}


Amplify.configure(awsmobile);