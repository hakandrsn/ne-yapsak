import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebaseConfig'


export const fetchFoods = createAsyncThunk("foods", async (arg) => {
    try {
        let list = []
        const colRef = collection(db, arg)
        const querySnapshot = await getDocs(colRef)
        querySnapshot.forEach(e => { list.push(e.data(), key = e.id) })
        const reList = {
            list: list, size: querySnapshot.size
        }
        return reList
        // await getDocs(colRef)
        //   .then(async(e) => {
        //     const randomNumber = Math.floor(Math.random() * e.size)
        //     console.log(e.size)
        //     e.forEach(doc => {

        //     })
        //     setFood(foods[randomNumber])
        //     const imageRef = ref(storage, food?.image)
        //     const url = imageRef && await getDownloadURL(imageRef)
        //     setMainImage(url)
        //   }).finally(() => {
        //     setLoading(false)
        //   });
    } catch (e) {
        return "getiremedim"
    }
})


const initialState = {
    data: [],
    loading: false,
    success: null,
    food: {},
    size: 0,
    error: ""
}

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        getRandom: (state, { payload }) => {
            const num = Math.floor(Math.random() * state.size)
            state.food = state.data[num]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoods.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(fetchFoods.fulfilled, (state, { payload }) => {
                state.loading = false
                state.success = true
                state.data = payload.list
                state.size = payload.size
            })
            .addCase(fetchFoods.rejected, (state, { payload }) => {
                state.loading = false
                state.success = false
                state.error = payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { getRandom } = foodSlice.actions

export default foodSlice.reducer