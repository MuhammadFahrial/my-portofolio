import React from "react";

export default function Card({ image, link }) {
  return (
    <>
      <article className="rounded-xl mt-3">
        <a href={link} target="_blank" rel="noreferrer noopener">
          <img src={image} alt="" loading="lazy" className="" />
        </a>
      </article>
    </>
  );
}
