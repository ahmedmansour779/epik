import { dataOurService } from "../../../data/ourServiceData";
import ItemService from "./ItemService";

export default function ItemsOurService() {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-8  lg:w-2/3 lg:mx-auto bg-white">
      {
        dataOurService.map(({ description, title }, index) => {
          return (
            <ItemService
              title={title}
              description={description}
              className={[0, 3, 4].includes(index) ? "col-span-7" : "col-span-5"}
              key={index} />
          )
        })
      }
    </div>
  );
}
