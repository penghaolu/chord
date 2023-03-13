import React from "react";

const Detail = (props) => {
  const name = props.option.name;
  console.log(props.option);
  return (
    <div className="offset-md-1 col-sm-4">
      <div className="row col-sm-12 px-0">
        <img src={props.option.album.images[0].url} alt={name}></img>
      </div>
      <div className="row col-sm-12 px-0">
        <label htmlFor={name} className="form-label col-sm-12">
          {name}
        </label>
      </div>
      <div className="row col-sm-12 px-0">
        <label
          htmlFor={props.option.artists[0].name}
          className="form-label col-sm-12"
        >
          {props.option.artists[0].name}
        </label>
      </div>
    </div>
  );
};

export default Detail;
