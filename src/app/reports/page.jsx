"use client";
import { GET_REPORTS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { useUser } from "@auth0/nextjs-auth0/client";

const ReportsTable = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Reporter",
      dataIndex: "reporter",
      key: "reporter",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Injuries",
      key: "injuries",
      children: [
        {
          title: "Body Part",
          dataIndex: "injuries",
          key: "body_part",
          render: (text, record) =>
            text.map((injury) => injury.body_part).join(", "), // Access body_part from each injury
        },
        {
          title: "Description",
          dataIndex: "injuries",
          key: "description",
          render: (text, record) =>
            text.map((injury) => injury.description).join(","), // Access text from the record parameter
        },
      ],
      render: (text, record) => {
        return (
          <div>
            {record.injuries.map((injury, index) => (
              <div key={index}>
                <strong>Body Part:</strong> {injury.body_part}
                <br />
                <strong>Description:</strong> {injury.description}
              </div>
            ))}
          </div>
        );
      },
    },
  ];
  const { data, loading, error } = useQuery(GET_REPORTS);
  console.log(data, loading);
  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }
const {user,isLoading} = useUser();
console.log(user)
if(!user){
    return(
        <h1>Not logged in</h1>
    )
}
  if(error){
    return(
      <h1>Error: ${error}</h1>
    )
  }
  return (
    <div className="p-20">
      {loading ? <></> : <Table dataSource={data.allReports} columns={columns} />}
    </div>
  );
};

export default ReportsTable;
