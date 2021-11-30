import { originalImageBaseUrl } from "services/api";

export const formatMovieUrl = uri => {
  return `${originalImageBaseUrl}${uri}`;
}
