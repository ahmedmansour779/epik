import logo from "../../assets/images/logo.png";
import { FaceBook, LinkedIn, SnapChat, X } from "../../icons/icons";

export default function Footer() {
  return (
    <div className="bg-[#512152] py-4">
      <div className="container mx-auto grid md:grid-cols-5 grid-cols-1 items-center gap-4">
        <div className="md:col-span-1 flex flex-col gap-4 text-white font-Urbanist text-sm">
          <img src={logo} className="mix-blend-multiply" />
          <p>
            Solutions is a leading software company based in the Kingdom of Saudi Arabia, specializing in innovative digital transformation solutions.
          </p>
          <div className="flex gap-2">
            <SnapChat />
            <FaceBook />
            <X />
            <LinkedIn />
          </div>
          <p>
            ifno@alabdaa-tech.com
          </p>
        </div>
        <div className="md:col-span-4 flex gap-2 justify-around text-white font-Urbanist md:text-2xl text-lg">
          <p>
            Contact
          </p>
          <p>
            Support
          </p>
          <p>
            Policies
          </p>
          <p>
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}
