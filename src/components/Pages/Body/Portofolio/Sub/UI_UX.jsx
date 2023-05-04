import React from "react";
import { userInterface } from "../../../../../details";
import Card from "../../../../molekuls/CardUI";

export default function UI_UX() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {React.Children.toArray(
            userInterface.map(({ image }) => <Card image={image} />)
          )}
        </div>
      </section>
    </>
  );
}
