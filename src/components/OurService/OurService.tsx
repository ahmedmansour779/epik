import ItemsOurService from "./ItemsOurService";
import Shapes from "./Shapes";

export default function OurService() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:gap-6 gap-12 relative">
        <p className="text-center font-Urbanist font-semibold text-3xl">
          OUR Services
        </p>
        <ItemsOurService />
        <Shapes />
      </div>
    </div>
  );
}
