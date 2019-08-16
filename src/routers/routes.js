import Index from '../components/index/index';
import Hello from '../components/hello/hello';

const routes = [
    {
        path: '/',
        component: Index,
        exact: true
    },
    {
        path: '/hello',
        component: Hello
    }
]

export default routes;