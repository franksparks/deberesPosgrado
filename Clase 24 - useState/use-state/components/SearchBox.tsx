"use client";
import { FormEventHandler, useRef } from "react";

type SearchBoxProps = {
  onChange: (s: string) => void;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  const textRef = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onChange(textRef.current!.value);
    textRef.current!.value = "";
  };

  return (
    <form className="p-2 flex flex-row gap-2" onSubmit={onSubmit}>
      <input
        type="text"
        ref={textRef}
        className="border-2 rounded border-gray-700 px-1"
      />
      <button className="bg-gray-300 px-4 rounded-md hover:bg-gray-500 ">
        Search
      </button>
    </form>
  );
}
