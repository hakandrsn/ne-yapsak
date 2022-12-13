import React, {  useEffect, useState } from 'react'
import { mainList } from '../lists/mainlist';
import { View,Text} from 'react-native';
import { Button } from '@rneui/themed';


const HomeScreen = ({ navigation }) => {
  const RenderItem = ({ item }) => ( <Button 
    containerStyle={{marginHorizontal:40,marginVertical:3}}
    buttonStyle={{paddingVertical:13,borderRadius:6}}
    onPress={()=>navigation.navigate("result",{path:item.path})}>{item.name}</Button>
  );
  return (
    <View>
      <View>
        <Text fnt="48">Ne Yesek  </Text>
      </View>
        {mainList?.map((e, i) => { return <RenderItem key={e.id} item={e} /> })}
    </View>
  );
};
export default HomeScreen