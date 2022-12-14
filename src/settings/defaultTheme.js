import { createTheme } from "@rneui/themed";


const defa = {
    light:"#ffffff",
    dark:"#4b4b4b",
    mode:"light",
    btnColor:"#000000",
}

export const theme = createTheme({
    lightColors: {
      primary: defa.light,
    },
    darkColors: {
      primary: defa.dark,
    },
    mode: defa.mode,
    components: {
      Button: {
        titleStyle: {
          color: defa.mode=="light" ? defa.dark:defa.light,
        },
        // containerStyle:{
        //   backgroundColor:defa.mode=="light" ? defa.dark:defa.light
        // }
      },
    },
  });