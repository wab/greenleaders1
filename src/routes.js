import Home from './pages/Home';
import Category from './pages/Category';
import Single from './pages/Single';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/rubrique/:rubrique',
    component: Category,
  },
  {
    path: '/article/:article',
    component: Single,
  }
];

export default routes;