import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const FETCH_ASSET = "FETCH_ASSET";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

const API_BASE_URL = "https://cdn.contentful.com";
const API_SPACE_ID = "j147ghvi87vx";
const API_TOKEN =
  "59754f09b796409329bc166e060d3f0e31f8b8a8fb3e4c52c0fb7058590e7f62";

export function fetchPosts(rubriqueId, slug) {
  let url = `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&include=2&content_type=article${!!rubriqueId
    ? `&fields.rubrique.sys.id=${rubriqueId}`
    : ''}${!!slug
      ? `&fields.slug=${slug}`
      : ''}&order=sys.createdAt`;
  const request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export function fetchPost(id) {
  const request = axios.get(
    `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?${id}&access_token=${API_TOKEN}&content_type=article`
  );
  return {
    type: FETCH_POST,
    payload: request
  };
}
export function fetchAsset(id) {
  const assets = axios.get(
    `${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`
  );

  return {
    type: FETCH_ASSET,
    payload: assets
  };
}
export const fetchCategory = () => {
  const categories = axios.get(
    `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=category`
  );
  return {
    type: FETCH_POSTS,
    categories
  };
};
