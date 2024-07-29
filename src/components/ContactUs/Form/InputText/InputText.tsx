export type InputTextProps = {
  name: string,
  placeholder: string
};
export default function InputText({ name, placeholder }: InputTextProps) {
  return (
    <div className="p-2 border border-solid border-[#B3B3B3] rounded-xl">
      <input
        style={{
          outline: "none"
        }}
        type="text" name={name} id="" placeholder={placeholder} />
    </div>
  );
}
