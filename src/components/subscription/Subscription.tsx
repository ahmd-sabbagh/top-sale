import React from "react";
import Subscrip from "./Subscrip";
import Form from "./Form";
import Applications from "./Applications";

const Subscription = () => {
  return (
    <section className="bg-[#F8F8F8] py-6 mt-12 md:mt-14">
      <div className="container">
        <div className="flex items-center flex-wrap justify-center gap-6">
          <Subscrip />
          <Form />
          <Applications />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
