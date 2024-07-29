import InputMessage from "./InputMessage";
import InputText from "./InputText";

export default function Form() {
  return (
    <form className="p-4 flex flex-col gap-4 bg-white">
      <p className="font-Quicksand text-2xl font-bold">
        Please enter Your data
      </p>
      <div className="flex gap-4">
        <InputText name="firstName" placeholder="First Name" />
        <InputText name="lastName" placeholder="Last Name" />
      </div>
      <InputText name="email" placeholder="E-mail" />
      <InputMessage name="message" placeHolder="Node" />
    </form>
  );
}
