import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";



function App () {
    return (
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
             <div>我是 react 子项目</div>
        </Router>
       
    )
}

export default App