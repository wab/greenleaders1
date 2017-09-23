import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import AssetsReducer from './assets_reducer';
import CategoriesReducer from './categories_reducer';
const rootReducer = combineReducers({
  posts: PostsReducer,
  assets: AssetsReducer,
  categories: CategoriesReducer
});
export default rootReducer;