import React, { useState, useEffect } from "react";

export default function App() {
  const [photo, setPhoto] = useState([]);

  const getAllPictures = (pics) => {
    pics.then((data) => {
      return data.forEach((picture) => {
        // console.log(picture.Key); I've got a stirng img file
        setPhoto((photo) => [...photo, picture.Key]);
      });
    });
  };

  useEffect(() => {
    const pictures = listObjects();
    getAllPictures(pictures);
  }, [])}
