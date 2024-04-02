import React from "react";
import { PlaceList } from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    address: "1830 Town Center Dr",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    address: "1830 Town Center Dr",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

export const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};
