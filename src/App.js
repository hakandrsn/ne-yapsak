import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import { ThemeProvider, createTheme } from "@rneui/themed";
import { theme } from './settings/defaultTheme';
import ContextProvider from './context/Context';



const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </ContextProvider>
  )
}
export default App