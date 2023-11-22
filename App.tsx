import AppNavigation from './src/navigation';
import {StoreProvider} from './src/store';

function App(): JSX.Element {
  return (
    <StoreProvider>
      <AppNavigation />
    </StoreProvider>
  );
}

export default App;
