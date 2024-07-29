import backGround from "../../assets/images/backGroundContactUs.jpeg";
import Form from "./Form";
import LogoSection from "./LogoSection";

export default function ContactUs() {
  return (
    <div
      style={{
        background: `url(${backGround})`
      }}
      className="w-full flex justify-center items-center my-12 p-8">
      <div className="flex">
        <LogoSection />
        <Form />
      </div>
    </div>
  );
}
