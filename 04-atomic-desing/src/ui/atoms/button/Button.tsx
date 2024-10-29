import React from "react";
import "./button.scss";

export default function Button({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: any;
  disabled?: boolean;
}) {
  return (
    <button disabled={disabled} onClick={onClick} className="f-18">
      {children}
    </button>
  );
}
