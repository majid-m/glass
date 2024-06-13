import { AppRegistry } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PaperProvider } from 'react-native-paper';

import { name as appName } from './app.json';
import { store, persistor } from './src/redux/Store';
import App from './App';

function Main() {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider>
                    <App />
                </PaperProvider>
            </PersistGate>
        </ReduxProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);