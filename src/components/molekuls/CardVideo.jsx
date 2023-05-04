import React from "react";

export default function Card({ video }) {
  return (
    <>
      <article className="rounded-xl mt-3">
        <video src={video} controls />
      </article>
    </>
  );
}
