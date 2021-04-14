import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import ThemeApp from './1_ThemeApp';
import UserApp from './2_UserApp';
import ConsumerThemeApp from './3_ConsumerThemeApp';
import ConsumerUserApp from './4_ConsumerUserApp'
import OwnProviderThemeApp from './5_OwnProviderThemeApp';
import ChangeProviderStateThemeApp from './6_ChangeProviderStateThemeApp';
import FinalUserApp from './7_FinalUserApp'

import ThemeContext from './components/context/1_themeContext'
import UserContext from './components/context/2_userContext';
import ConsumerThemeContext from './components/context/3_consumerThemeContext'
import ConsumerUserContext from './components/context/4_ConsumerUserContext'
import {OwnProviderThemeContext} from './components/context/5_OwnProviderThemeContext'
import {ChangeProviderStateThemeContext} from './components/context/6_ChangeProviderStateThemeContext'
import {FinalUserContextProvider} from './components/context/7_finalUserContext';

ReactDOM.render(
  <ThemeContext.Provider value={'dark'}>
    <ThemeApp />
  </ThemeContext.Provider>,
  document.getElementById('themeContext')
);

ReactDOM.render(
  <UserContext.Provider value={'milon123'}>
    <UserApp/>
  </UserContext.Provider>,
  document.getElementById('userContext')
)

ReactDOM.render(
  <ConsumerThemeContext.Provider value={'light'}>
    <ConsumerThemeApp />
  </ConsumerThemeContext.Provider>,
  document.getElementById('consumerThemeContext')
);

ReactDOM.render(
  <ConsumerUserContext.Provider value={'alimmilon'}>
    <ConsumerUserApp/>
  </ConsumerUserContext.Provider>,
  document.getElementById('consumerUserContext')
)

ReactDOM.render(
  <OwnProviderThemeContext>
    <OwnProviderThemeApp />
  </OwnProviderThemeContext>,
  document.getElementById('ownContextProvider')
);

ReactDOM.render(
  <ChangeProviderStateThemeContext>
    <ChangeProviderStateThemeApp />
  </ChangeProviderStateThemeContext>,
  document.getElementById('changeContextProviderState')
);

ReactDOM.render(
  <FinalUserContextProvider>
    <FinalUserApp />
  </FinalUserContextProvider>,
  document.getElementById('finalContext')
);