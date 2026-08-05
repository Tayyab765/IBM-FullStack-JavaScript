import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Products() {
  const navigateTo = useNavigate();
  const { id } = useParams();

  function clickHandler(id) {
    console.log(`Id ${id}`);
    navigateTo(`/product_view/${id}`);
  }
  return (
    <div className="center_div">
      <div className=" flex gap-5">
        <button onClick={() => clickHandler(1)} className="button_style">
          Product 1
        </button>
        <button onClick={() => clickHandler(2)} className="button_style">
          Product 2
        </button>
        <button onClick={() => clickHandler(3)} className="button_style">
          Product 3
        </button>
      </div>
    </div>
  );
}
