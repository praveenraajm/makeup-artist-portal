import axios from "axios";
import { getErrorObject } from "utils/apiUtils";

export const GET_FINE_ART_GALLERY_LOADING =
  "@@charmMakeover/GET_FINE_ART_GALLERY_LOADING";
export const GET_FINE_ART_GALLERY_SUCCESS =
  "@@charmMakeover/GET_FINE_ART_GALLERY_SUCCESS";
export const GET_FINE_ART_GALLERY_FAILURE =
  "@@charmMakeover/GET_FINE_ART_GALLERY_FAILURE";

export const getFineArtGallery = () => async (dispatch) => {
  dispatch({ type: GET_FINE_ART_GALLERY_LOADING });
  try {
    const res = await axios.get("file");
    dispatch({
      type: GET_FINE_ART_GALLERY_SUCCESS,
      payload: res?.data,
    });
  } catch (err) {
    dispatch({
      type: GET_FINE_ART_GALLERY_FAILURE,
      payload: getErrorObject(err),
    });
  }
};
