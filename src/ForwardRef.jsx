import { forwardRef, useRef } from "react";

const InputComponent = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

export default function parent() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <InputComponent ref={inputRef} placeholder="type something here" />
      <button onClick={handleFocus}>click to focus</button>
    </>
  );
}
