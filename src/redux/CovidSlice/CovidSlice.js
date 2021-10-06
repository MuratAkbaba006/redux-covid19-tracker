import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "../../config/AxiosBase";

export const fetchCovidDataAsync = createAsyncThunk(
  "covid/fetchSingleCountryCovidDataAsync",
  async (country) => {
    if (country === "All") {
      const response = await AxiosBase.get();
      return response.data;
    } else {
      const response = await AxiosBase.get(`/countries/${country}`);
      return response.data;
    }
  }
);

const CovidSlice = createSlice({
  name: "covid",
  initialState: {
    status: "idle",
    globaldata: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCovidDataAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCovidDataAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const confirmed = action.payload.confirmed.value;
      const recovered = action.payload.recovered.value;
      const deaths = action.payload.deaths.value;
      const lastUpdate = action.payload.lastUpdate;
      state.globaldata = [confirmed, recovered, deaths, lastUpdate];
    },
    [fetchCovidDataAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default CovidSlice.reducer;
