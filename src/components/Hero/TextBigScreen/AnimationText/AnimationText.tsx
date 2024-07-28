import { useEffect, useState } from "react";

export default function AnimationText() {
  const [textOne, setTextOne] = useState<string>("B")
  const textOneInitial = "Bright Ideas,"
  const [index, setIndex] = useState(1);


  useEffect(() => {
    if (index < textOneInitial.length) {
      const interval = setInterval(() => {
        setTextOne((prev) => prev + textOneInitial.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [index]);

  const [text, setText] = useState('');
  const fullText = 'Brilliant Software';
  let currentIndex = -1;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setText(prevText => prevText + fullText[currentIndex]);
        currentIndex++;
        if (currentIndex + 1 >= fullText.length) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, 1600);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="flex flex-col gap-4 font-Waiting text-3xl text-gradient">
      <p>
        {textOne}
      </p>
      <p>
        {text}
      </p>
    </div>
  );
}
