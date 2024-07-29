export type InputMessageProps = {
  name: string,
  placeHolder: string
};
export default function InputMessage({ name, placeHolder }: InputMessageProps) {
  return (
    <div className="p-2 border border-solid  border-[#B3B3B3] rounded-xl">
      <textarea
        style={{
          outline: "none"
        }} name={name}
        id=""
        placeholder={placeHolder}
        className="h-fit w-full"
      />
    </div>
  );
}
