import React from "react";
import type { Maybe } from "./maybe";
import { isSome } from "./maybe";

interface IBaseButtonProps {
  text?: Maybe<React.ReactNode>;
}

export function unused(
  props: IBaseButtonProps,
  children: React.ReactNode
): React.ReactNode {
  const { text } = props;

  return (
    <>
      {isSome(text) || isSome(children) ? (
        <span key="text">
          {text}
          {children}
        </span>
      ) : null}
    </>
  );
}

export function unused2(
  props: IBaseButtonProps,
  emptyDefault: Maybe<React.ReactNode> = null
) {
  return isSome(emptyDefault);
}
