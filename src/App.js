import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import { ThemeProvider, createTheme } from "@rneui/themed";
import {app} from "./settings/default.json"

const theme = createTheme({
  lightColors: {
    primary: app.lightColor,
  },
  darkColors: {
    primary: app.darkColor,
  },
  mode: 'light',
  components: {
    Button: {
      titleStyle: {
        color: app.lightColor,
      },
      containerStyle:{
        backgroundColor:"transparent"
      }
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </ThemeProvider>
  )
}
export default App