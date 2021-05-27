import React from 'react'
import { Provider } from 'react-redux';
import ListarTipoFlores from './components/ListarTipoFlores';
import ModalButton from './components/ModalButton'
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <ModalButton />
      <ListarTipoFlores />
    </Provider>
  );
}

export default App;
