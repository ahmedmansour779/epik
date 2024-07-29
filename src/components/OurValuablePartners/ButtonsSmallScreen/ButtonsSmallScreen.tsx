export default function ButtonsSmallScreen() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-52 flex flex-col items-stretch justify-stretch gap-4 text-sm font-extrabold">
        <a href="" className="py-2 text-center px-8 rounded-2xl text-white" style={{ background: "linear-gradient(90deg, #056AFF 0%, #5CC7FF 100%)" }}>
          Get start
        </a>
        <a href="" className="py-2 text-center px-8 rounded-2xl bg-white text-[#056AFF] border border-solid border-[#A4A4A4]">
          View All Partners
        </a>
      </div>
    </div>
  );
}
