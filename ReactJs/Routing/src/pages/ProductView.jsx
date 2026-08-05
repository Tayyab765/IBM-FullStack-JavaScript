import React from "react";
import { useParams } from "react-router-dom";

export function ProductView() {
  const { id } = useParams();

  return <div className="center_div">ProductView {id}</div>;
}
