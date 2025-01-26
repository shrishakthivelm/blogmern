import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./layout.css"

export default function Layout(){
    return (
        <main>
            <Header />
            <div className="marquee-container">
                <div className="marquee-content">
                Disclaimer: This website is not responsible for user-generated content.
                </div>
            </div>
            <Outlet />
        </main>
    )
}