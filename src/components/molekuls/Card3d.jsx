import React from "react";

export default function Card({ image}) {
  return (
    <>
      <article className="rounded-xl mt-3">
        <img src={image} alt="" loading="lazy" className=""/>
        
      </article>
    </>
  );
}
