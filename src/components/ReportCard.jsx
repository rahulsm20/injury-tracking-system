import React from "react";

const ReportCard = ({ datetime, id, reporter, injuries }, key) => {
  const date = new Date(parseInt(datetime));
  const formattedDate = date.toLocaleString();
  const mappedInjuries = injuries.map((injury, key) => {
    return (
      <div key={key}>
        <p className="flex gap-4">
          <span>{injury.body_part}</span>
          <div>
          <p className="flex gap-4">
          Description
          <span>{injury.description}</span>
          </p>
          </div>
        </p>
      </div>
    );
  });
  return (
    <div className="text-white bg-gray-900 rounded-xl p-5" key={key}>
      <p className="flex gap-2">
        <span>{id}</span>
        <span>{reporter}</span>
        <span>{formattedDate.split(",")[0]}</span>
      </p>
      {mappedInjuries}
    </div>
  );
};

export default ReportCard;
