import React from "react";
import defsrc from "./defsrc.webp";
import defphoto from "./defphoto.png";

const Card = ({
  src,
  head,
  desc,
  name,
  photo,
  rate,
  active,
  accepted,
  className,
  btntxt,
}) => {
  if (!src) src = defsrc;
  if (!head) head = "";
  if (!desc) desc = "";
  if (!name) name = "";
  if (!className) className = "";
  if (!photo) photo = defphoto;
  return (
    <div
      style={{
        borderWidth: "2px",
      }}
      className={
        "mx-2 my-3 w-64 rounded-2xl bg-white hover:shadow-xl " + className
      }
    >
      <img
        src={src}
        style={{
          maxHeight: "8rem",
        }}
        alt="image"
        className="w-full h-sm rounded-2xl"
      />
      <div className="p-4 flex flex-col items-center text-center h-3/5 justify-end">
        <h3 className="text-md font-bold">{head}</h3>
        <p className="text-sm">{desc}</p>
        <h3 className="text-pink-500">{rate}</h3>
        <div className="flex text-gray-500 items-center">
          <img
            src={photo}
            style={{
              maxHeight: "2.5rem",
            }}
            className="rounded-full"
            alt="profile picture"
          />
          <h1 className="mx-2">{name}</h1>
          <div
            className={`h-3 w-3 rounded-full ${
              active ? " bg-green-600 animate-bounce" : " bg-red-500 "
            }`}
          ></div>
        </div>
        <hr
          style={{
            borderWidth: "2px",
          }}
          className="rounded-full mx-7 my-1 w-full"
        />
        {accepted ? (
          <div className="text-white bg-green-700 w-full rounded-lg">
            Accepted
          </div>
        ) : btntxt ? (
          <div className="py-1 rounded-full w-2/3 bg-red-500 cursor-pointer text-white hover:shadow-lg">
            {btntxt}
          </div>
        ) : (
          <div className="py-1 rounded-full w-2/3 bg-red-500 cursor-pointer text-white hover:shadow-lg">
            Hire
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
