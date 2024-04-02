import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElement/Card";
import { PlaceItem } from "./PlaceItem";

export const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found, MKAybe Create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          image={place.imageUrl}
          title={place.title}
          key={place.id}
          id={place.id}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordiantes={place.location}
        />
      ))}
    </ul>
  );
};
