import { originalImageBaseUrl } from "services/api";

export const formatMovieUrl = uri => {
  return `${originalImageBaseUrl}${uri}`;
}

export const convertArrayIntoArrayOfArrays = (data, dataLimit = 18, subArrayLength = 3) => {
  let result = [];
  data.slice(0, dataLimit).forEach((item, index, array) => {
    if (index % subArrayLength === 0 || index === 0) {
      const newArray = array.slice(index, index + subArrayLength);
      if (newArray.length) {
        result.push(newArray);
      }
    }
  });
  return result;
}
