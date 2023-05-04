import React from "react";
import { design3D } from "../../../../../details";
import Card from "../../../../molekuls/CardUI";

export default function Design3D() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {React.Children.toArray(
            design3D.map(({ image }) => <Card image={image} />)
          )}
        </div>
      </section>
    </>
  );
}
