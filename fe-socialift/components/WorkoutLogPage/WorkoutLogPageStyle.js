import { StyleSheet } from 'react-native';
import {createTheme} from '@rneui/themed'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        alignItems: "center"
    },
    formView: {
        width: 320,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        paddingTop: 30,
        padding: 10,
        paddingRight: 10
     }   

})

const theme = createTheme({
    components: {
      Button: {
        raised: true,
        radius: 10,
        containerStyle: {
          marginBottom: 20,
          
        }
      },
      Input: {
        containerStyle: {
          
        }
      }
    }
  })

  export { styles, theme }