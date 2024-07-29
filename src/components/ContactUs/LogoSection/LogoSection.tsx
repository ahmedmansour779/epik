import logo from "../../../assets/images/logo.png";

export default function LogoSection() {
  return (
    <div className="hidden md:flex justify-center items-center bg-blue px-12">
      <div className="flex flex-col items-center gap-2">
        <p className="text-white font-Urbanist text-2xl">
          Get A Free Quote
        </p>
        <img src={logo} className="h-36 mix-blend-multiply" />
      </div>
    </div>
  );
}
