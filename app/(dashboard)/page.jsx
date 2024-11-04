"use client";

import Card from "@/components/Card";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "@/components/DataTable";
import { AreaChartComp } from "@/components/AreaChart";
import { PieChartStyle1 } from "@/components/PIeChart";
import { PieChartStyle2 } from "@/components/PIeChartStyle2";
import { useRouter } from "next/navigation";
import React from "react";
import { fetchLinkedInDataRequest } from "@/lib/features/linkedInSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { username, details } = useSelector((state) => state.user);
  const { profileData, loading, error } = useSelector(
    (state) => state.linkedIn
  );

  React.useEffect(() => {
    if (!username) {
      router.push("/login");
    }
  }, [username, router]);

  React.useEffect(() => {
    dispatch(fetchLinkedInDataRequest(username));
  }, [dispatch, username]);

  if (loading) return <div className="text-center center">Loading...</div>;
  if (error && !profileData) return <div>Error: {error}</div>;
  if (!profileData) return null;

  const analytics = [
    {
      label: "New Cases",
      value: profileData?.["New Cases_text"] || 0,
    },
    {
      label: "New Deaths",
      value: profileData?.["New Deaths_text"] || 0,
    },
    {
      label: "Total Cases",
      value: profileData?.["Total Cases_text"] || 0,
    },
    {
      label: "Total Deaths",
      value: profileData?.["Total Deaths_text"] || 0,
    },
    {
      label: "Total Recovered",
      value: profileData?.["Total Recovered_text"] || 0,
    },
    {
      label: "Active Cases",
      value: profileData?.["Active Cases_text"] || 0,
    },
  ];

  const columns = [
    {
      accessorKey: "user",
      header: "User",
      cell: ({ row }) => {
        const user = row.getValue("user");
        return (
          <div className="start">
            <div className="w-8 h-8 mr-5 bg-gray-300 rounded-full" /> {user}
          </div>
        );
      },
    },
    {
      accessorKey: "commit",
      header: "Commit",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "action",
      header: "",
    },
  ];

  return (
    <main className="bg-blue-50 min-h-[calc(100vh-129px)] px-4 py-4 lg:px-8 xl:px-16 lg:py-8">
      <h3 className="text-lg font-medium text-gray-600 lg:text-2xl">
        Dashboard
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-4 lg:mt-10 gap-2.5 lg:gap-4">
        {analytics?.map((data, idx) => {
          return (
            <div
              key={idx}
              className="p-4 text-center border border-gray-300 bg-gray-50"
            >
              {data?.percent && (
                <p
                  className={`${
                    data?.percent?.startsWith("+")
                      ? " text-green-600 "
                      : " text-red-600"
                  } text-xs text-green-600 text-end end`}
                >
                  {data?.percent}%
                  {data?.percent?.startsWith("+") ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              )}
              <p className="mt-1 text-2xl font-semibold text-gray-500 lg:text-3xl">
                {data?.value}
              </p>
              <p className="pb-1 text-sm font-medium text-gray-500 lg:pb-2 lg:text-base">
                {data?.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid w-full gap-4 mt-4 lg:grid-cols-2 lg:mt-10">
        <Card label="Development Activity">
          <>
            <AreaChartComp chartData={details?.chartData || []} />
            <DataTable columns={columns} data={details?.commitsList || []} />
          </>
        </Card>

        <div>
          <p className="px-3 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm text-gray-600 bg-blue-100 border border-gray-300 rounded">
            <span className="font-semibold">Read our documentation</span> with
            code samples
          </p>

          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Card label="Chart Title">
              <PieChartStyle1 chartData={details?.pieoneData || []} />
            </Card>
            <Card label="Chart Title">
              <PieChartStyle2 chartData={details?.pietwoData || []} />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
