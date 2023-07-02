import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FloatingAction } from "react-native-floating-action";
export default function Detail({route}) {
    const { Detail } = route.params;

    const actions = [
        {
          text: "download 1",
          icon: require("./assets/arrow_downward_FILL0_wght400_GRAD0_opsz48.png"),
          name: "bt_accessibility",
          position: 2
        },
        {
            text: "download 2",
            icon: require("./assets/arrow_downward_FILL0_wght400_GRAD0_opsz48.png"),
            name: "bt_download",
            position: 3
          },
          {
            text: "download 3",
            icon: require("./assets/arrow_downward_FILL0_wght400_GRAD0_opsz48.png"),
            name: "bt_download1",
            position: 4
          }
      ];
  return (

    <View style={styles.container}>
      <Image style={{width:'100%',height:'100%'}} source={{ uri: Detail}} />
      <FloatingAction
    actions={actions}
    onPressItem={name => {
     
    }}
  />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center', 
        justifyContent: 'center'
      },
})