import {
  GET_FINE_ART_GALLERY_FAILURE,
  GET_FINE_ART_GALLERY_LOADING,
  GET_FINE_ART_GALLERY_SUCCESS,
} from "actions/portfolioGallery";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: "",
  gallery: [],
};

export const portfolioGallery = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FINE_ART_GALLERY_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_FINE_ART_GALLERY_SUCCESS: {
      return {
        ...state,
        loading: false,
        gallery: payload,
      };
    }

    case GET_FINE_ART_GALLERY_FAILURE: {
      toast.error(payload.message);
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};
