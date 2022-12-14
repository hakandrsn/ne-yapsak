import React, { Fragment, useEffect, useState } from 'react'
import { mainList } from '../lists/mainlist';
import { View, Text } from 'react-native';
import { Button, Divider } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { fetchFoods, getRandom } from '../redux/features/foods/foodSlice';


const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const RenderItem = ({ item }) => (<Fragment>
    <Button
      containerStyle={{ marginHorizontal: 40, marginVertical: 3 }}
      buttonStyle={{ paddingVertical: 13, borderRadius: 6 }}
      titleStyle={{ fontSize: 19 }}
      onPress={() => {
        dispatch(fetchFoods(item.path))
        navigation.navigate("result", { path: item.path })
      }} type="clear" title={item.name} />
    <Divider style={{ width: "80%", alignSelf: "center" }} />
  </Fragment>
  );
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative" }}>
      <View style={{ position: "absolute", top: 100 }}>
        <Text style={{ fontSize: 32 }}>Ne Yesek  </Text>
      </View>
      <View>
        {mainList?.map((e, i) => { return <RenderItem key={e.id} item={e} /> })}
      </View>
    </View>
  );
};
export default HomeScreen