import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    
        container: {
          flex: 1,
          padding: 20,
          backgroundColor: '#ffffff',
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        image: {
            width: 150,
            height: 200,
            resizeMode: 'cover',
            borderRadius: 10,
            margin: 5,
        },
      });

export default Style;