import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import {Home} from "./pages/home/Home.jsx";
import {RootLayout} from "./common/root-layout/RootLayout.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
    </Route>
))
const App = ()=>{

    return (
        <RouterProvider router={router}/>
    )
}
export default App;