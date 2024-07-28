import { useState } from "react";
import { ArrowTopRight } from "../../../icons/icons";

export default function NavBar() {
  const [hash, setHash] = useState<"#home" | "#about-us" | "#products">("#home")

  return (
    <div className="bg-primary py-2 px-6 rounded-3xl hidden md:flex justify-between text-white w-full">
      <div className="flex items-center gap-4 font-Rammetto text-sm">
        <a href="#home" onClick={() => setHash("#home")} className={hash == "#home" ? "border-bottom-gradient ease-in-out duration-200 transition-all" : "border-b-0"}>
          HOME
        </a>
        <a href="#products" onClick={() => setHash("#products")} className={hash == "#products" ? "border-bottom-gradient ease-in-out duration-200 transition-all" : "border-b-0"}>
          PRODUCTS
        </a>
        <a href="#about-us" onClick={() => setHash("#about-us")} className={hash == "#about-us" ? "border-bottom-gradient ease-in-out duration-200 transition-all" : "border-b-0"}>
          ABOUT US
        </a>
      </div>
      <a
        href="#contact"
        style={{
          boxShadow: "0px 0px 6px 4px #fffbfb4a"
        }}
        className="font-Quicksand flex items-center gap-1 text-blue bg-white rounded-3xl py-1 px-2">
        <p className="font-bold">Contact Us</p>
        <ArrowTopRight />
      </a>
    </div>
  );
}
