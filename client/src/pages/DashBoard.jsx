import React, { useEffect, useState } from "react";
import PlusIconCard from "../components/PlusIconCard";
import FormCard from "../components/FormCard";
import { Link, useNavigate } from "react-router-dom";

function DashBoard() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    let currUser = localStorage.getItem("user");
    currUser = JSON.parse(currUser);
    setUser(currUser);
  }, []);

  return (
    <>
      <div className="flex w-full items-center justify-center gap-5  py-6 flex-wrap bg-gradient-to-r from-green-500 to-blue-600">
        <Link to={"/user/build-form/survey"}>
          <PlusIconCard bgColor={"#166534"} text={"Create a Survey Form"} />
        </Link>
        <Link to={"/user/build-form/quiz"}>
        <PlusIconCard bgColor={"#312E81"} text={"Create a Quiz Form"} />
        </Link>
      </div>
      <div className="text-4xl font-semibold my-6 border-2 max-w-fit mx-auto px-4 py-2 shadow-md rounded-md text-gray-800">
        Your Forms
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4 pt-2">
        <FormCard
          formType={"quiz"}
          title={"CR Election Form"}
          createdAt={Date.now()}
        />
        <FormCard
          formType={"survey"}
          title={"CR Election Form for ICE 2020 Batch Students"}
          createdAt={Date.now()}
        />
        <FormCard
          formType={"survey"}
          title={"CR Election Form for ICE 2020 Batch Students"}
          createdAt={Date.now()}
        />
        <FormCard
          formType={"survey"}
          title={"CR Election Form for ICE 2020 Batch Students"}
          createdAt={Date.now()}
        />
      </div>
    </>
  );
}

export default DashBoard;
