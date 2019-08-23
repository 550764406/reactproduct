import Index from '../components/index';
import Hello from '../components/hello/hello'
// function asyncComponent(getComponent) {
//     return class AsyncComponent extends React.Component {
//         static Component = null;
//         state = {
//             Component: AsyncComponent.Component
//         };
//         componentWillMount() {
//             if (!this.state.Component) {
//                 getComponent().then(({default: Component}) => {
//                     AsyncComponent.Component = Component
//                     this.setState({Component})
//                 })
//             }
//         }
//         render() {
//             const {Component} = this.state
//             if (Component) {
//                 return <Component {...this.props} />
//             }
//             return null
//         }
//     }
// }
const routes = [
    {
        path: '/',
        component: Index,
        exact: true
    },
    {
        path: '/hello',
        component: Hello,
    }
];
export default routes;