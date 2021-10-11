import React from "react";
import "./UploadImage.css";

const UploadImage = (props) => {
  const [image, setImage] = React.useState(
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
  );

  const NextHandler = () => {
    if (
      image !==
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    ) {
      props.passImage(image);
    }
    if (
      image ===
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    ) {
      alert("You have to upload image");
    }
  };
  return (
    <div className="upload_image_container">
      <div style={{ width: "100%", height: "100vh", display: "flex" }}>
        {image && <img src={image} alt="image" className="image_preview"></img>}
      </div>
      <div
        style={{
          width: "100%",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="file"
          style={{ display: "none" }}
          id="image_input"
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        ></input>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            width: "100%",
          }}
        >
          <label
            htmlFor="image_input"
            className="upload_button"
            style={{ fontFamily: "Roboto, sans-serif", marginBottom: "4rem" }}
          >
            Upload
          </label>

          <button
            onClick={NextHandler}
            style={{ fontFamily: "Roboto, sans-serif", marginBottom: "1rem" }}
            className="next_button"
          >
            Next
          </button>
          <button onClick={props.prev} className="upload_button">
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
