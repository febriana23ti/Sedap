import NavMenu from "../components/NavMenu"; 
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import BreakSection from "../components/BreakSection";
import TopMenu from "../components/TopMenu";
import MemberCheck from "../components/MemberChek";

export default function MainLayout () {
    return (
        <div id="app-container" className="scroll-smooth bg-gray-100 min-h-screen flex">
            <div id="layout-wrapper" className="flex flex-row flex-1">
                <div id="main-content" className="flex-1 p-4">
                    <NavMenu />

                    <Home/>
                    <BreakSection/>
                    <About/>
                    <TopMenu/>
                    <MemberCheck/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}