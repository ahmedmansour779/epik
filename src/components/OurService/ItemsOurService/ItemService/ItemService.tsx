interface ItemServiceProps {
  title: string,
  description: string,
  className: string
}

export default function ItemService({ description, title, className }: ItemServiceProps) {
  return (
    <div
      style={{
        boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.25)"
      }}
      className={`${className} px-8 pb-8 pt-14 rounded-xl flex flex-col gap-2 justify-center`}>
      <p className="font-Urbanist font-medium text-2xl">
        {title}
      </p>
      <p className="text-sm text-[#9C9898]">
        {description}
      </p>
    </div>
  );
}
