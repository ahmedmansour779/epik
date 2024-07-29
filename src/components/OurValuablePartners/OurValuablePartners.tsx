import ButtonsSmallScreen from "./ButtonsSmallScreen";
import ItemsOurValuablePartners from "./ItemsOurValuablePartners";
import ItemsOurValuablePartnersSmallScreen from "./ItemsOurValuablePartnersSmallScreen";
import TextBigScreen from "./TextBigScreen";
import TextSmallScreen from "./TextSmallScreen";

export default function OurValuablePartners() {
  return (
    <div className="flex md:flex-row flex-col container md:gap-0 gap-8 mx-auto py-8">
      <>
        <TextSmallScreen />
        <ItemsOurValuablePartnersSmallScreen />
        <ButtonsSmallScreen />
      </>
      <ItemsOurValuablePartners />
      <TextBigScreen />
    </div>
  );
}