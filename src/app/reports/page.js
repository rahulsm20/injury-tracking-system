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
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: "Reporter",
      dataIndex: "reporter",
      key: "reporter",
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      responsive:['md'],
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      responsive:['lg'],
      showOnResponse: true,
      showOnDesktop: true,
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
            text.map((injury) => injury.body_part).join(", "),
        },
        {
          title: "Description",
          dataIndex: "injuries",
          key: "description",
          render: (text, record) =>
            text.map((injury) => injury.description).join(","),
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
      showOnResponse: true,
      showOnDesktop: true,
    },
  ];
  const { data, loading, error } = useQuery(GET_REPORTS);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const { user, isLoading } = useUser();
  if (!user) {
    return <h1>Please log in to continue</h1>;
  }
  if (error) {
    return <h1>Error: ${error}</h1>;
  }
  if (!data) {
    return <h1>Failed to fetch data</h1>;
  }
  return (
    <div className="md:p-20 p-5">
      {loading ? (
        <></>
      ) : (
        <Table
          dataSource={data.allReports}
          columns={columns}
          pagination={false}
          mobileBreakPoint={768}
        />
      )}
    </div>
  );
};

export default ReportsTable;
