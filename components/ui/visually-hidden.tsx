import * as ReactVisuallyHidden from "@radix-ui/react-visually-hidden";

const VisuallyHidden = ({
  children,
  ...props
}: ReactVisuallyHidden.VisuallyHiddenProps) => (
  <ReactVisuallyHidden.Root {...props}>{children}</ReactVisuallyHidden.Root>
);

VisuallyHidden.displayName = "VisuallyHidden";
export default VisuallyHidden;
