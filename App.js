import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SrcApp from "./src/App"
import { useFonts } from "expo-font"
import { Provider } from "react-redux"
import { store } from './src/redux/store';
import 'expo-dev-client';

const App = () => {
  const [fontsLoad] = useFonts({
    "Raleway-light": require('./src/fonts/raleway/static/Raleway-Light.ttf'),
    "Raleway-light-italic": require('./src/fonts/raleway/static/Raleway-LightItalic.ttf'),
    "Raleway-regular": require('./src/fonts/raleway/static/Raleway-Regular.ttf'),
    "Raleway-bold": require('./src/fonts/raleway/static/Raleway-Bold.ttf'),
    "Raleway-thin": require('./src/fonts/raleway/static/Raleway-Thin.ttf')


  })
  if (!fontsLoad) return null;
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SrcApp />
      </SafeAreaProvider>
    </Provider>
  )
}
export default App