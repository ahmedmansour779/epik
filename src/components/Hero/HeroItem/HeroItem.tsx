import itemOne from "../../../assets/images/itemOne.jpeg";
import itemThree from "../../../assets/images/itemThree.jpeg";
import itemTwo from "../../../assets/images/itemTwojpeg.jpeg";
import IconArrow from "./IconArrow";
import TitleItemHero from "./TitleItemHero";

export default function HeroItem() {
  return (
    <div className="md:w-1/2 w-full h-[75vh] grid grid-cols-12 grid-rows-12 gap-4">
      <div className="row-span-6 col-span-6 row-start-1 col-start-7 overflow-hidden rounded-3xl relative">
        <img src={itemOne} className="object-cover w-full h-full" />
        <TitleItemHero title="Premium ui design & friendly ux design" />
        <IconArrow />
      </div>
      <div className="row-span-5 col-span-6 row-start-2 col-start-1 overflow-hidden rounded-3xl relative">
        <img src={itemTwo} className="object-cover w-full h-full" />
        <TitleItemHero title="Premium ui design & friendly ux design" />
        <IconArrow />
      </div>
      <div className="row-span-6 col-span-full row-start-7 col-start-1 overflow-hidden rounded-3xl relative">
        <img src={itemThree} className="object-cover  w-full h-full" />
        <TitleItemHero title="Premium ui design & friendly ux design" />
        <IconArrow />
      </div>
    </div>
  );
}
