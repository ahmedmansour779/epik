import amazon from "../../../assets/images/brands/amazon.jpeg";
import github from "../../../assets/images/brands/github.jpeg";
import google from "../../../assets/images/brands/google.jpeg";
import meta from "../../../assets/images/brands/meta.jpeg";
import microsoft from "../../../assets/images/brands/microsoft.jpeg";
import odoo from "../../../assets/images/brands/odoo.png";
import vercel from "../../../assets/images/brands/vercel.jpeg";
import OneItemOurValuablePartners from "../ItemsOurValuablePartners/OneItemOurValuablePartners";

export default function ItemsOurValuablePartnersSmallScreen() {
  return (
    <div className="w-full md:hidden grid grid-cols-6 grid-rows-10 gap-x-2 gap-y-4">
      <OneItemOurValuablePartners style="col-start-1 row-start-4" image={odoo} />
      <OneItemOurValuablePartners style="col-start-5 row-start-7" image={amazon} />
      <OneItemOurValuablePartners style="col-start-3 row-start-1" image={github} />
      <OneItemOurValuablePartners style="col-start-5 row-start-3" image={google} />
      <OneItemOurValuablePartners style="col-start-3 row-start-6" image={meta} />
      <OneItemOurValuablePartners style="col-start-4 row-start-9" image={microsoft} />
      <OneItemOurValuablePartners style="col-start-1 row-start-8" image={vercel} />
    </div>
  );
}
