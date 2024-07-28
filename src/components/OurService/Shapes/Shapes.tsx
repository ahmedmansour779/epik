import CircleBlur from "../../../assets/images/CircleBlur.jpeg";
import { Ballon, HollowCircle, Triangle } from "../../../icons/icons";

export default function Shapes() {
  return (
    <>
      <div className="absolute top-0 left-0 -z-10">
        <Ballon />
      </div>
      <div className="absolute top-0 right-0 -z-10">
        <HollowCircle />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <img src={CircleBlur} />
      </div>
      <div className="absolute bottom-12 right-6 -z-10">
        <Triangle />
      </div>
    </>
  );
}
