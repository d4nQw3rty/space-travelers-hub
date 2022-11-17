import { createAsyncThunk } from '@reduxjs/toolkit';

const apiFetchDragon = async () => {
  const url = 'https://api.spacexdata.com/v3/dragons';
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  apiFetchDragon,
);

export default fetchDragons;
