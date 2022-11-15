import {createAsyncThunk} from '@reduxjs/toolkit'

const fetchDragons = createAsyncThunk(
    ASYNC_GET_DRAGON,
    getApiDragon,
)

export default fetchDragons;
