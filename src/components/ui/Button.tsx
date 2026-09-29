import Link from "next/link";

// Shared by every button. Values from Figma: height 46px (12px padding + 18px label
// at 120% line-height), 24px side padding, fully rounded, Label L (Satoshi Medium 18px).
const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-label-l font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 disabled:pointer-events-none disabled:opacity-50";

// Only the style used in the design exists for now. A new look = one new entry here.
const variantStyles = {
  primary: "bg-secondary-400 text-neutral-950 hover:bg-secondary-300",
};

type Variant = keyof typeof variantStyles;

// With href -> renders a Next.js <Link> (navigation).
type ButtonAsLink = React.ComponentProps<typeof Link> & { variant?: Variant };

// Without href -> renders a real <button> (actions, form submits).
type ButtonAsButton = React.ComponentProps<"button"> & {
  variant?: Variant;
  href?: undefined;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  // type="button" by default so it never submits a form by accident;
  // pass type="submit" when it should.
  return <button type="button" className={classes} {...props} />;
}
