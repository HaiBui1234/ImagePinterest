import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function Home({navigation}) {
    const [DataFavorite, setDataFavorite] = useState([])
    const [ChieuCao,setChieuCao]=useState(300);
    const menuOptionsStyles = {
        optionsContainer: {
          // Custom styles for the options container
          backgroundColor: 'lightgray',
          marginRight:70
        },
        optionWrapper: {
          // Custom styles for each option wrapper
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        },
        optionText: {
          // Custom styles for the option text
          color: 'black',
        },
      };
      
    useEffect(() => {
      fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=971880b668798284c88d2f95651a9dd0&tags=cats&format=json&nojsoncallback=1&api_sig=83bdef2d0ce2fac510c62b8ec562b9ee")
        .then(res => res.json())
        .then((data) => {
          setDataFavorite(data.photos.photo)
        })
        .catch(err => console.log(err))
    }, [DataFavorite])
  
  return (
    <View style={styles.container}>
    
    <View style={{flexDirection:'row',width:'100%',alignItems:'center',height:60,backgroundColor:'#444444'}}>
      <Text style={{fontSize:25,color:'white',margin:10,alignItems:'baseline'}}>Asia QHD</Text>
   <View style={{marginLeft:200,justifyContent:'center'}}>
   <MenuProvider>
   <Menu >
        <MenuTrigger customStyles={{ triggerText: { marginRight: 5 } }}>
        <Ionicons name='reorder-three' style={{ color: 'white', marginRight: 40, fontSize: 35, padding: 5, borderRadius: 10 }} />
        </MenuTrigger>
        <MenuOptions customStyles={menuOptionsStyles}>
          <MenuOption onSelect={() =>navigation.navigate('Dating')}>
            <Text>Dating Group</Text>
          </MenuOption>
          <MenuOption onSelect={() => navigation.navigate('About')}>
            <Text>About</Text>
          </MenuOption>
         
        </MenuOptions>
      </Menu>
   </MenuProvider>
   </View>
    </View>
      <FlatList style={{backgroundColor:'black'}}
        data={DataFavorite}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={{height : 300,width:170,margin:10}}>
           <TouchableOpacity onPress={()=>{navigation.navigate('Detail',{Detail:`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`})}}>
           <Image source={{ uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg` }} style={{ width: 180, height: ChieuCao ,borderRadius:20}} />
           </TouchableOpacity>
          </View>
        )}
       
      ></FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: 'black'
        ,  alignItems: 'center',  justifyContent: 'center'
      },
})