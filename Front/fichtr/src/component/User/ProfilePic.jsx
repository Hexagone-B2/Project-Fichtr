import React from "react";

export default function ProfilePicture({ userId, size }) {
  function selectSize(size) {
    switch (size) {
      case "small":
        return "w-10 h-10";
      case "medium":
        return "w-20 h-20";
      case "large":
        return "w-32 h-32";
      default:
        return "w-10 h-10";
    }
  }
  return (
    <img
      crossOrigin="anonymous"
      src={
        userId
          ? "https://dev.enzo-salson.fr/api/getProfilePic?id=" + userId
          : ""
      }
      alt="avatar"
      className={"rounded-full mr-4 " + selectSize(size)}
    />
  );
}
