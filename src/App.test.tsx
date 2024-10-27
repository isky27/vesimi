import { render,act } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

describe('App', () => {
  it('renders without crashing', () => {
    act(() => { // Wrap the rendering process in act
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
  });
});
