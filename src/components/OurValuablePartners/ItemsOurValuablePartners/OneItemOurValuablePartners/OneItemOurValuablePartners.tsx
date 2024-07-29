interface OneItemOurValuablePartnersProp {
  image: string,
  style: string
}

export default function OneItemOurValuablePartners({ image, style }: OneItemOurValuablePartnersProp) {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px #00000040"
      }}
      className={`${style} col-span-2 row-span-2 py-2 px-8 border border-solid border-[#A4A4A4] rounded-xl flex justify-center items-center`}>
      <img src={image} className="h-12 object-contain" />
    </div>
  );
}
