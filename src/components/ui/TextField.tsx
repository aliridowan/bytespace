type TextFieldProps = React.ComponentProps<"input"> & {
  id: string;
  label: string;
  // Error text under the input (e.g. from React Hook Form's formState.errors)
  error?: string;
  // Something shown inside the input on the right, e.g. PasswordField's show/hide button
  trailing?: React.ReactNode;
};

// Labelled text input with an error message (Figma: Label S label 8px above a 52px input,
// 12px radius, 1px Shuttle Gray/100 border, 24px side padding, Body L text).
// All other props go to the <input>, so React Hook Form's {...register("name")} works
// directly: it passes name, onChange, onBlur and ref (in React 19 a ref is a normal prop).
export function TextField({ id, label, error, trailing, className = "", ...inputProps }: TextFieldProps) {
  const errorId = `${id}-error`;

  // With a trailing element the text stops 56px from the right, so it never runs under it
  const inputPadding = trailing ? "pr-14 pl-6" : "px-6";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-label-s font-medium text-neutral-950">
        {label}
      </label>
      <div className="relative">
        {/* aria-invalid turns the border red and tells screen readers the value is wrong;
            aria-describedby makes them read the error text with the field */}
        <input
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`h-13 w-full rounded-xl border border-neutral-100 bg-white ${inputPadding} text-body-l text-neutral-950 placeholder:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 aria-invalid:border-red-600`}
          {...inputProps}
        />
        {trailing && <div className="absolute inset-y-0 right-4 flex items-center">{trailing}</div>}
      </div>
      {error && (
        <p id={errorId} className="text-body-s text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
