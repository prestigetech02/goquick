import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

/**
 * Shared page width + equal side gutters.
 * Use for heroes, sections, header, footer, and inner pages.
 */
export function Container({
  as: Tag = "div",
  children,
  className = "",
  ...rest
}: ContainerProps) {
  return (
    <Tag className={["site-container", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </Tag>
  );
}
