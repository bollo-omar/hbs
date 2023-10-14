import {Outlet} from "react-router-dom";

export const RootLayout = () => {
    return (
        <main className="container-fluid" style={{margin: 0, padding:0}}>
            <Outlet/>
        </main>
    )
}