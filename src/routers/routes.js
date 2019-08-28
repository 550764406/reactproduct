import Index from '../components/index';
import List from '../components/list/list'
import Detail from '../components/detail/detail'
const routes = [
    {
        path: '/',
        component: Index,
        exact: true
    },
    {
        path: '/list',
        component: List,
    },
    {
        path: '/detail',
        component: Detail,
    },
];
export default routes;