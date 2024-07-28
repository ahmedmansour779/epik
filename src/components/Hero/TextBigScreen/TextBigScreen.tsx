import AnimationText from "./AnimationText";

export default function TextBigScreen() {
  return (
    <div className="w-1/2 h-fit hidden md:flex flex-col gap-4">
      <AnimationText />
      <p className="text-gradient-details font-Urbanist font-extrabold text-2xl">
        N<span className="border-b-2 border-solid border-black">o</span> 1 in Saudi Arabia
      </p>
      <div className="font-Quicksand w-2/3 leading-6">
        Empowering innovation through code, where every line we write paves the way for tomorrow's digital landscape.
      </div>
      <div className="flex items-center gap-4  text-sm font-Urbanist font-extrabold">
        <a href="" className="py-2 px-8 rounded-2xl text-white" style={{ background: "linear-gradient(90deg, #056AFF 0%, #5CC7FF 100%)" }}>
          Get start
        </a>
        <a href="" >
          Request a call
        </a>
      </div>
    </div>
  );
}
