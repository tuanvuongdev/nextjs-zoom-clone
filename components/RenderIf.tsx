import React from "react";

interface RenderIfProps {
  isRender: boolean;
  children: React.ReactNode;
}
const RenderIf = ({ isRender, children }: RenderIfProps) => {
  if (isRender) return children;
};

export default RenderIf;
