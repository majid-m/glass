import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './App';

function Main() {
    return (
        <App />
    );
};

AppRegistry.registerComponent(appName, () => Main);