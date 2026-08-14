import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { CircleAlert, KeyRound, Lightbulb } from "lucide-react";

export function MdxLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = props.href?.startsWith("http");
  return <a {...props} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} />;
}

export function QuickAnswer({ children }: PropsWithChildren) {
  return (
    <aside className="mdx-callout mdx-answer">
      <KeyRound aria-hidden="true" />
      <div>{children}</div>
    </aside>
  );
}

export function Note({ children }: PropsWithChildren) {
  return (
    <aside className="mdx-callout mdx-note">
      <Lightbulb aria-hidden="true" />
      <div>{children}</div>
    </aside>
  );
}

export function Spoiler({ children }: PropsWithChildren) {
  return (
    <details className="spoiler-box">
      <summary><CircleAlert aria-hidden="true" /> Reveal puzzle answer</summary>
      <div>{children}</div>
    </details>
  );
}
