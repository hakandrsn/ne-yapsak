import { Text, ActivityIndicator, View, StyleSheet } from 'react-native'
import React, {  useEffect,  } from 'react'
import { Image } from '@rneui/themed';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {  getRandom } from '../redux/features/foods/foodSlice';


const ResultRandom = ({ navigation, route }) => {
  const { path } = route.params
  // const [food, setFood] = useState({})
  // const [foods, setFoods] = useState([])
  // const [mainImage, setMainImage] = useState("");
  const {data,food,loading,size,success} = useSelector(s=>s.foods)
  const dispatch = useDispatch()

  // const randomFood = async (path) => {
  //   setLoading(true)
  //   try {
  //     const colRef = collection(db, path)
  //     const querySnapshot = await getDocs(colRef)
  //     querySnapshot.forEach(e=>{
  //       setFoods(list=>[...list,e.data(),key=e.id])  
  //     })
  //     const randomNumber = Math.floor(Math.random() * querySnapshot.size)
  //     // await getDocs(colRef)
  //     //   .then(async(e) => {
  //     //     const randomNumber = Math.floor(Math.random() * e.size)
  //     //     console.log(e.size)
  //     //     e.forEach(doc => {
            
  //     //     })
  //     //     setFood(foods[randomNumber])
  //     //     const imageRef = ref(storage, food.image)
  //     //     const url = imageRef && await getDownloadURL(imageRef)
  //     //     setMainImage(url)
  //     //   }).finally(() => {
  //     //     setLoading(false)
  //     //   });
  //   } catch (error) {
  //     console.log("garip şeyler")
  //     setLoading(false)
  //   }
  // }
  useEffect(() => {
    dispatch(getRandom())
  }, [])

  if (loading && isEmpty(food)) return <ActivityIndicator />
  if(success && !isEmpty(food)) return (
    <View style={styles.container}>
      <View>
        <Text>{food.name}</Text>
      </View>
      {/* <View>
        <Image source={{ uri: mainImage }} PlaceholderContent={<ActivityIndicator />} containerStyle={[{ width: 100, height: 100 }]} />
      </View> */}
      <View>
        <Text>Hazırlama Süresi : {food.time?.pişirme}</Text>
        <Text>Pişirme Süresi : {food.time?.hazırlama}</Text>
      </View>
      <View>
        <Text>Zorluk (Yapım ve zaman) : {food.level}</Text>
      </View>
      <View>
        <Text>Malzemeler</Text>
        {food.materials?.map((e, i) => {
          return (
            <Text key={i}>
              {e.gram && `${e.gram} gram ${e.name} ${e.tabir && "(" + e.tabir + ")"}`}
              {e.piece && `${e.piece} adet ${e.name} ${e.tabir && "(" + e.tabir + ")"}`}
            </Text>
          )
        })}
        {food.extraMaterials && <View>
          <Text>İsteğe bağlı malzemeler</Text>
          {
            food.extraMaterials.map((e, i) => {
              return (
                <Text key={i}>
                  {e.gram && `${e.gram} gram ${e.name} ${e.tabir && "(" + e.tabir + ")"}`}
                  {e.piece && `${e.piece} adet ${e.name} ${e.tabir && "(" + e.tabir + ")"}`}
                </Text>
              )
            })
          }
        </View>}
      </View>
      <View>
        <Text>Yapım süreci</Text>
        <Text>1.Adım : {food.cook?.start}</Text>
        <Text>2.Adım : {food.cook?.middle}</Text>
        <Text>3.Adım : {food.cook?.finish}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
})

export default ResultRandom