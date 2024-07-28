export default function TitleItemHero({ title }: { title: string }) {
  return (
    <div className="absolute bottom-4 mx-2 text-white backdrop-blur-sm text-sm p-2 rounded-xl border border-solid border-white">
      <h1>{title}</h1>
    </div>
  );
}
