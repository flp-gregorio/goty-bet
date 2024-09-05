import React, { useEffect, useRef } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const NomineeInputComponent: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  Props
> = ({ label, ...rest }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [rest.value]);

  return (
    <div className="my-2 font-montserrat w-full">
      <textarea
        {...rest}
        ref={ref}
        className="w-full p-2 text-gray-700 placeholder-gray-400 bg-zinc-950
          border border-gray-200 dark:placeholder-gray-600  dark:text-gray-300 
          dark:border-orange-700 focus:border-orange-600 dark:focus:border-orange-600 
          focus:ring-orange-600 focus:outline-none focus:ring-1 focus:ring-opacity-40 resize-y overflow-clip"
        rows={1}
        onInput={handleInput}
        ref={textareaRef}
      />
    </div>
  );
};

export default React.forwardRef(NomineeInputComponent);
