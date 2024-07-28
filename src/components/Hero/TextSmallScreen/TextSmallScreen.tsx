import Circle from "./Circle";
import ImageAndText from "./ImageAndText";
import Line from "./Line";

export default function TextSmallScreen() {
  return (
    <div className="w-full pt-24 md:hidden flex flex-col gap-4">
      <Line />
      <Circle />
      <p className="text-gradient-details font-Urbanist font-extrabold text-4xl">
        Al Abdaa Tech
      </p>
      <div className="font-Quicksand leading-6 text-lg font-medium">
        Empowering innovation through code, where every line we write paves the way for tomorrow's digital landscape.
      </div>
      <div className="flex items-center gap-4 text-sm font-Urbanist font-extrabold">
        <a href="" className="py-2 px-8 rounded-2xl text-white" style={{ background: "linear-gradient(90deg, #056AFF 0%, #5CC7FF 100%)" }}>
          Get start
        </a>
        <a href="" >
          Request a call
        </a>
      </div>
      <ImageAndText />
    </div>
  );
}
