"use client";
import { CREATE_REPORT } from "@/graphql/mutations";
import { GET_REPORT_BY_ID } from "@/graphql/queries";
import parseDate from "@/utils/parseDate";
import { useMutation, useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BodyComponent } from "reactjs-human-body";
const Page = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!user) {
    return <h1>Please login to access this feature</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  const date = new Date()
  const {formattedDate,formattedTime} = parseDate(date)

  const [formData, setFormData] = useState({
    reporter: "",
    date: formattedDate,
    time: formattedTime,
    injuries: {},
  });

  const [processing, setProcessing] = useState(false);
  const params = useSearchParams();
  const id = params.get("report_id");

  const {
    data,
    loading,
    error: queryError,
  } = useQuery(GET_REPORT_BY_ID, {
    variables: { reportId: id },
  });

  let bodyMap = {};
  let item = [];
  if (id) {
    if (loading) {
      console.log("fetching...");
    }
    if (queryError) {
      console.log(queryError);
    }
    if (data && data.report) {
      item = data.report;
      let injury = {};
      for (injury of item.injuries) {
        if (!bodyMap[injury.body_part]) {
          bodyMap[injury.body_part] = {};
        }
        bodyMap[injury.body_part].selected = true;
      }
    }

    if (item) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 justify-center items-center text-sm md:text-base">
          <div>
            <p>{item.id}</p>
            <p>Reported by: {item.reporter}</p>
            <p>Reported date: {item.date} (YYYY-MM-DD)</p>
            <p>Reported time: {item.time}</p>
            {item &&
              item.injuries &&
              item.injuries.map((injury) => {
                return (
                  <div className="p-5">
                    <p className="bg-red-500 rounded-t-xl p-2">
                      {injury.body_part}
                    </p>
                    <p className="bg-white text-black rounded-b-xl p-2">
                      {injury.description}
                    </p>
                  </div>
                );
              })}
          </div>
          {Object.keys(bodyMap).length > 0 ? (
            <div>
              <BodyComponent partsInput={bodyMap} />
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    }
  }

  const router = useRouter();

  const handleBodyPartClick = (partName) => {
    setFormData((prevData) => {
      const updatedInjuries = { ...prevData.injuries };
      const propertyExists = updatedInjuries.hasOwnProperty(partName);
      if (!propertyExists) {
        updatedInjuries[partName] = "";
      } else {
        delete updatedInjuries[partName];
      }
      return {
        ...prevData,
        injuries: updatedInjuries,
      };
    });
  };

  const handleDescriptionChange = (partName, value) => {
    setFormData((prevData) => {
      const updatedInjuries = { ...prevData.injuries };
      updatedInjuries[partName] = value;
      return {
        ...prevData,
        injuries: updatedInjuries,
      };
    });
  };

  const [createReport] = useMutation(CREATE_REPORT);

  const onSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    if (
      formData.reporter === "" ||
      formData.date === "" ||
      Object.keys(formData.injuries).length === 0
    ) {
      alert("Please enter all required fields");
    } else {
      const input = {
        reporter: formData.reporter,
        date: formData.date,
        time: formData.time,
        injuries: Object.keys(formData.injuries).map((partName) => ({
          body_part: partName,
          description: formData.injuries[partName],
        })),
      };
      createReport({ variables: { input } })
        .then(() => router.push("/reports"))
        .catch((err) => {
          setProcessing(false);
        });
      setProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mt-5">Injury Report</h1>
      <div className="grid grid-cols-1 p-20 md:grid-cols-2">
        <BodyComponent
          partsInput={{
            head: { show: true },
            leftShoulder: { show: true },
            rightShoulder: { show: true },
            leftArm: { show: true },
            rightArm: { show: true },
            chest: { show: true },
            stomach: { show: true },
            leftLeg: { show: true },
            rightLeg: { show: true },
            leftHand: { show: true },
            rightHand: { show: true },
            leftFoot: { show: true },
            rightFoot: { show: true },
          }}
          onClick={(partName) => handleBodyPartClick(partName)}
        />
        <form className="mt-20 flex flex-col gap-2" onSubmit={onSubmit}>
          <input
            name="reporter"
            id="reporter"
            placeholder="Reporter"
            className="p-2 rounded-lg text-black"
            onChange={(e) =>
              setFormData({ ...formData, reporter: e.target.value })
            }
          ></input>
          <input
            name="date"
            id="date"
            value={formData.date}
            placeholder="Date"
            type="date"
            className="p-2 rounded-lg text-black"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          ></input>
          <input
            name="time"
            id="time"
            placeholder="Time"
            value={formData.time}
            type="time"
            className="p-2 rounded-lg text-black"
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          <h2 className="text-2xl">Selected Body Parts</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            {Object.keys(formData.injuries).map((partName) => (
              <div className="flex flex-col" key={partName}>
                <li
                  key={partName}
                  className="p-1 flex items-center rounded-t-xl bg-red-600 text-white"
                >
                  {partName}
                </li>
                <input
                  placeholder="Add description"
                  className="p-1 rounded-b-xl text-black"
                  onChange={(e) =>
                    handleDescriptionChange(partName, e.target.value)
                  }
                />
              </div>
            ))}
          </ul>
          {Object.keys(formData.injuries).length > 0 ? (
            <button
              type="submit"
              className="bg-blue-600 rounded-xl w-min p-2 flex"
            >
              {processing ? <img src="/loading.svg" /> : <></>}
              Submit
            </button>
          ) : (
            <></>
          )}
          <span className="opacity-50">
            Click on selected body part to deselect
          </span>
        </form>
      </div>
    </div>
  );
};

export default Page;
