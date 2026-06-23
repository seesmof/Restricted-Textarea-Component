"use client";

import { useState } from "react";

export default function Page() {
  const [len, setLen] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  return (
    <div className="min-h-screen bg-sky-50 p-3 flex items-center justify-center">
      <div className="mx-auto max-w-3xl bg-white p-3 rounded-md">
        <h1 className="text-2xl font-bold">Limited Textarea Component</h1>
        <p className="mt-2 mb-8 text-stone-600">
          This is a simple page containing a textarea that is limited to 250
          characters.
        </p>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="input" className="label">
            Textarea
          </label>
          <textarea
            rows={4}
            id="input"
            maxLength={250}
            className={`textarea w-full resize-none ${len === 250 && "text-red-700 border-red-700 outline-red-700"}`}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setLen(e.target.value.length);
            }}
          />
          <div
            className={`absolute bottom-3 right-3 ${len === 250 && "text-red-700"}`}
          >
            {len}/250
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn mt-3 w-40" onClick={() => setInput("")}>
            Clear
          </button>
          <button
            className="btn flex-1 mt-3"
            onClick={() => navigator.clipboard.writeText(input)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
