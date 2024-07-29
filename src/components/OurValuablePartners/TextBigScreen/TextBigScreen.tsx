export default function TextBigScreen() {
  return (
    <div className="w-1/3 pl-4 border-l-[1px] font-Urbanist border-solid border-black hidden md:flex flex-col gap-4">
      <p className="text-gradient">Know more about us</p>
      <p className="font-medium text-2xl">Our Valuable Partners</p>
      <p className="">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .
      </p>
      <div className="flex items-center gap-4 text-sm font-extrabold">
        <a href="" className="py-2 px-8 rounded-2xl text-white" style={{ background: "linear-gradient(90deg, #056AFF 0%, #5CC7FF 100%)" }}>
          Get start
        </a>
        <a href="" className="py-2 px-8 rounded-2xl bg-white text-[#056AFF]">
          View All Partners
        </a>
      </div>
    </div>
  );
}
