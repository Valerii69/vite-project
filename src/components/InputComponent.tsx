import { useFormStatus } from "react-dom";

export function InputComponent() {
  const { pending } = useFormStatus();
  return (
    <div>
      <label
        htmlFor="outerInputComponent"
        className="pr-12"
        style={{ background: `${pending ? "violet" : "white"}` }}
      >
        Outer input component:
      </label>
      <input
        disabled={pending}
        id="outerInputComponent"
        type="text"
        name="outerInputComponent"
      />
    </div>
  );
}
