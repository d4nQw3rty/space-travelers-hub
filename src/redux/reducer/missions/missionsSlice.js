import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Action

// Reducer

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const missions = await response.json();
    return missions;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
  },
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missions: state.missions.map((thisMission) => {
        if (thisMission.id === action.payload.id) {
          return {
            ...thisMission,
            reserved: true,
          };
        }
        return thisMission;
      }),
    }),
    leaveMission: (state, action) => ({
      ...state,
      missions: state.missions.map((thisMission) => {
        if (thisMission.id === action.payload.id) {
          return {
            ...thisMission,
            reserved: false,
          };
        }
        return thisMission;
      }),
    }),
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      const value = state;
      value.missions = action.payload.map((mission) => ({
        id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
    },
  },
});

export default missionsSlice.reducer;
export const { joinMission, leaveMission } = missionsSlice.actions;
