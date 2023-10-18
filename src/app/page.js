"use client";
import { CREATE_REPORT } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { BodyComponent } from "reactjs-human-body";
import { useRouter } from 'next/navigation';
import { useUser } from "@auth0/nextjs-auth0/client";
const Page = () => {
    const {user,error,isLoading} = useUser();
    if(isLoading){
      return(
        <h1>Loading...</h1>
        )
      }
      
      const router = useRouter()
      const [formData, setFormData] = useState({
        reporter: "",
        date: "",
        time: "",
        injuries: {},
      });
      const [processing,setProcessing]  = useState(false);

  const handleBodyPartClick = (partName) => {
    setFormData((prevData) => {
      const updatedInjuries = { ...prevData.injuries };
      const propertyExists = updatedInjuries.hasOwnProperty(partName)
      if(!propertyExists){
          updatedInjuries[partName] = "";
      }
      else {
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
    setProcessing(true)
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
      .then(() => router.push('/reports'))
      .catch((err)=>{
        setProcessing(false)
        console.log(err)
      })
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
            placeholder="Date"
            type="date"
            className="p-2 rounded-lg text-black"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          ></input>
          <input
            name="time"
            id="time"
            placeholder="Time"
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
            <button type="submit" className="bg-blue-600 rounded-xl w-min p-2">
              {processing ? <img src='/loading.svg'/>:<></>}
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
