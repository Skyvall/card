"use client";

type ButtonProps = {
  text: string;
  target: string;
};

export default function Button({ text, target }: ButtonProps) {
  return (
    <button
      onClick={() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </button>
  );
}
