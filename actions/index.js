import React from "react";
import { Actions } from "react-native-router-flux";
import { unsplash } from "./accessKey";
import axios from "axios";

export const fetchPhotos = term => async dispatch => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${unsplash.key}`
      }
    });
    dispatch({ type: "FETCH_PHOTOS", payload: response.data.results });
  } catch (err) {
    alert("Search failed " + err);
  }
};

export const setTheme = color => dispatch => {
  if ((color === "dark")) {
    dispatch({ type: "DARK_THEME" });
  } else {
    dispatch({ type: "LIGHT_THEME" });
  }
};
