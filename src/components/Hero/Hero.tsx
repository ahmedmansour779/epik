import HeroItem from "./HeroItem";
import TextBigScreen from "./TextBigScreen";
import TextSmallScreen from "./TextSmallScreen";

export default function Hero() {
  return (
    <div className="container mx-auto flex md:flex-row flex-col justify-between md:gap-0 gap-8">
      <>
        <TextBigScreen />
        <TextSmallScreen />
      </>
      <HeroItem />
    </div>
  );
}
