import React from "react";

export const Create = () => {
  return (
    <div className="add">
        <h3 className="title">Add Movie</h3>
        <form>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Description"></textarea>
            <input type="submit" value="Save" />
        </form>
    </div>
  );
};
