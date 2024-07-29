import amazon from "../../../assets/images/brands/amazon.jpeg";
import github from "../../../assets/images/brands/github.jpeg";
import google from "../../../assets/images/brands/google.jpeg";
import meta from "../../../assets/images/brands/meta.jpeg";
import microsoft from "../../../assets/images/brands/microsoft.jpeg";
import odoo from "../../../assets/images/brands/odoo.png";
import vercel from "../../../assets/images/brands/vercel.jpeg";
import OneItemOurValuablePartners from "./OneItemOurValuablePartners";

export default function ItemsOurValuablePartners() {
  return (
    <div className="md:w-2/3 h-full hidden md:grid grid-cols-12 grid-rows-10 gap-x-2 gap-y-4">
      <OneItemOurValuablePartners style="col-start-2 row-start-1" image={odoo} />
      <OneItemOurValuablePartners style="col-start-1 row-start-6" image={amazon} />
      <OneItemOurValuablePartners style="col-start-5 row-start-2" image={github} />
      <OneItemOurValuablePartners style="col-start-10 row-start-3" image={google} />
      <OneItemOurValuablePartners style="col-start-6 row-start-5" image={meta} />
      <OneItemOurValuablePartners style="col-start-8 row-start-8" image={microsoft} />
      <OneItemOurValuablePartners style="col-start-3 row-start-9" image={vercel} />
    </div>
  );
}
