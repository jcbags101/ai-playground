"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholder-vanish-input";

export function TodoSection() {
  const placeholders = [
    "What's your task for today?",
    "What's your deadline?",
    "Any important notes for the task?",
    "What's the priority level of the task?",
    "Have you assigned the task to someone?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div
      className="h-[40rem] flex flex-col justify-center  items-center px-4 "
      id="specificSection"
    >
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
