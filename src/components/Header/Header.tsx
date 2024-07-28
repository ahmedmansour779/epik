import logo from "../../assets/images/logo.png";
import ListTaps from "./ListTaps";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <div id="home" className="flex justify-between items-center  gap-8 container mx-auto p-5">
            <div className="w-36">
                <img src={logo} className="w-full object-cover" />
            </div>
            <>
                <NavBar />
                <ListTaps />
            </>
        </div>
    );
}
