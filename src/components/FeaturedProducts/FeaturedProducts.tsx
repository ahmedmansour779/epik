import ButtonsFeaturedProducts from "./ButtonsFeaturedProducts";
import Items from "./Items";
import Title from "./Title";

export default function FeaturedProducts() {
  return (
    <div className="flex flex-col gap-12 items-center container mx-auto my-32">
      <Title />
      <Items />
      <ButtonsFeaturedProducts />
    </div>
  );
}
