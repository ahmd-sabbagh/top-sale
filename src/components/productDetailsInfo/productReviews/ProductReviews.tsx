import React from "react";
import AddComment from "./AddComment";
import UserComments from "./UserComments";

const ProductReviews = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 p-4 border border-color border-t-0">
      <AddComment />
      <UserComments />
    </div>
  );
};

export default ProductReviews;
