"use client";

import Card from "@/components/Card";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import DataTable from "@/components/DataTable";
import { AreaChartComp } from "@/components/AreaChart";
import { PieChartStyle1 } from "@/components/PIeChart";
import { PieChartStyle2 } from "@/components/PIeChartStyle2";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  const { details } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (!details) {
      router.push("/login");
    }
  }, [details, router]);

  const analytics = [
    {
      label: "New Tickets",
      value: details?.analytics?.newTickets?.value,
      percent: details?.analytics?.newTickets?.percent,
    },
    {
      label: "Closed Today",
      value: details?.analytics?.closedToday?.value,
      percent: details?.analytics?.closedToday?.percent,
    },
    {
      label: "New Replies",
      value: details?.analytics?.newReplies?.value,
      percent: details?.analytics?.newReplies?.percent,
    },
    {
      label: "Followers",
      value: details?.analytics?.followers?.value,
      percent: details?.analytics?.followers?.percent,
    },
    {
      label: "Daily Earnings",
      value: details?.analytics?.dailyEarnings?.value,
      percent: details?.analytics?.dailyEarnings?.percent,
    },
    {
      label: "Products",
      value: details?.analytics?.products?.value,
      percent: details?.analytics?.products?.percent,
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
      <h3 className="text-lg lg:text-2xl font-medium text-gray-600">
        Dashboard
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-4 lg:mt-10 gap-2.5 lg:gap-4">
        {analytics?.map((data, idx) => {
          return (
            <div
              key={idx}
              className="p-4 text-center border border-gray-300 bg-gray-50"
            >
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
              <p className="mt-1 text-2xl lg:text-4xl font-semibold text-gray-500">
                {data?.value}
              </p>
              <p className="pb-1 lg:pb-2 text-sm lg:text-base font-medium text-gray-500">
                {data?.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid w-full lg:grid-cols-2 mt-4 lg:mt-10 gap-4">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mt-4 gap-4">
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
