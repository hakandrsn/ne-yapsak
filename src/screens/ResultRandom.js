import { Text, ActivityIndicator, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  fetchOne } from '../func/fetchs';
import firestore from "@react-native-firebase/firestore"

const ResultRandom = ({ navigation, route }) => {
  const { path } = route.params
  const [food, setFood] = useState([])
  const [mainImage,setMainImage] =useState(null);
  const onlyAsync = async () => {
    // const foods = await fetchOne(path)
    // setFood(foods)
    const tt =await firestore.collection("mainfood")
    console.log(tt)
  }

  useEffect(() => {
    // const aaa = ref(st,"mainfood")
    // console.log(aaa)
    onlyAsync()
    return () => setFood([])
  }, [path])
  if (food && food.length < 1) return <ActivityIndicator />
  return (
    <View>
      <Text>{food?.name}</Text>
      <Text>{food?.cook?.start}</Text>
      <Text>{food?.cook?.middle}</Text>
      <Text>{food?.cook?.finish}</Text>
      <Text>{food?.extraMaterials[0]?.name}</Text>
      <Text>{food?.time?.hazırlama}</Text>
      <Text>{food?.time?.pişirme}</Text>

      <Text>{food?.level}</Text>
      <Text>{path}</Text>
    </View>
  )
}

export default ResultRandom