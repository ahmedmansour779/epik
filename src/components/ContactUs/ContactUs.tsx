import backGround from "../../assets/images/backGroundContactUs.jpeg";
import Form from "./Form";
import LogoSection from "./LogoSection";

export default function ContactUs() {
  return (
    <div
      style={{
        background: `url(${backGround})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className="w-full flex justify-center items-center my-12 p-8">
      <div
        style={{
          boxShadow: "0px 4px 50px 10px #00000040"
        }}
        className="flex" >
        <LogoSection />
        <Form />
      </div>
    </div>
  );
}
