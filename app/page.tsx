"use client";
import { useEffect, useState } from "react";
import AreaGraph from "./component/AreaGraph";
import { Calendar, Coin, List, Script, Shop, User } from "./component/Icon";

export type DataType = { month: string; amount: number }[];

const countAllAmount = (list: DataType): number => {
  let total = 0;
  list.forEach((item) => {
    total += item.amount;
  });
  return total;
};

const event: { date: string; title: string }[] = [
  {
    date: "Jan 16, 2024 - 05:30 - Jan 19, 2024 - 5:29",
    title: "Celebrating Our Team Member's Birthday",
  },
  {
    date: "Jan 16, 2024 - 05:30 - Jan 19, 2024 - 5:29",
    title: "Celebrating Our Team Member's Birthday",
  },
  {
    date: "Jan 18, 2024 - 05:30 - Jan 20, 2024 - 5:29",
    title: "Sales Strategy Brainstorming Sessoin",
  },
  {
    date: "Jan 19, 2024 - 05:30 - Jan 20, 2024 - 5:29",
    title: "Department Heads Summit",
  },
  {
    date: "Jan 19, 2024 - 05:30 - Jan 20, 2024 - 5:29",
    title: "Department Heads Summit",
  },
  {
    date: "Jan 19, 2024 - 05:30 - Jan 20, 2024 - 5:29",
    title: "Department Heads Summit",
  },
  {
    date: "Jan 19, 2024 - 05:30 - Jan 20, 2024 - 5:29",
    title: "Department Heads Summit",
  },
];

const companiesData: DataType = [
  {
    month: "Jan",
    amount: 8,
  },
  {
    month: "Feb",
    amount: 12,
  },
  {
    month: "Mar",
    amount: 7,
  },
  {
    month: "Apr",
    amount: 13,
  },
  {
    month: "May",
    amount: 8,
  },
  {
    month: "Jun",
    amount: 14,
  },
];

const contactData: DataType = [
  {
    month: "Jan",
    amount: 12,
  },
  {
    month: "Feb",
    amount: 5,
  },
  {
    month: "Mar",
    amount: 13,
  },
  {
    month: "Apr",
    amount: 6,
  },
  {
    month: "May",
    amount: 12,
  },
  {
    month: "Jun",
    amount: 8,
  },
];

const totalDealsData: DataType = [
  {
    month: "Jan",
    amount: 3,
  },
  {
    month: "Feb",
    amount: 4,
  },
  {
    month: "Mar",
    amount: 20,
  },
  {
    month: "Apr",
    amount: 12,
  },
  {
    month: "May",
    amount: 4,
  },
  {
    month: "Jun",
    amount: 8,
  },
];

const dealsData = [
  { month: "Jan 2023", price1: 2, price2: 3 },
  { month: "Feb 2023", price1: 4, price2: 3 },
  { month: "Mar 2023", price1: 5, price2: 7 },
  { month: "Apr 2023", price1: 6, price2: 5 },
  { month: "May 2023", price1: 8, price2: 9 },
  { month: "Jun 2023", price1: 12, price2: 11 },
  { month: "Jul 2023", price1: 10, price2: 14 },
  { month: "Aug 2023", price1: 14, price2: 13 },
  { month: "Sep 2023", price1: 18, price2: 15 },
  { month: "Oct 2023", price1: 20, price2: 22 },
  { month: "Nov 2023", price1: 25, price2: 21 },
  { month: "Dec 2023", price1: 30, price2: 27 },
  { month: "Jan 2024", price1: 33, price2: 35 },
  { month: "Feb 2024", price1: 40, price2: 38 },
  { month: "Mar 2024", price1: 50, price2: 45 },
];

const activity = [
  {
    image: "goldman.png",
    date: "Dec 22, 2023 - 01:34",
    title: "Michael Scott moved Fantastic Metal Chicken deal to WON.",
  },
  {
    image: "netflix.png",
    date: "Dec 23, 2023 - 14:20",
    title: "Pam Beesly created a new lead for Elegant Silver Elephant.",
  },
  {
    image: "netflix.png",
    date: "Dec 24, 2023 - 09:15",
    title: "Jim Halpert assigned a task to Dwight Schrute for Bronze Tiger Co.",
  },
  {
    image: "meta.png",
    date: "Dec 25, 2023 - 16:45",
    title: "Stanley Hudson updated the status of Rapid Blue Whale to PENDING.",
  },
  {
    image: "goldman.png",
    date: "Dec 26, 2023 - 11:05",
    title: "Angela Martin archived the Golden Panda partnership deal.",
  },
  {
    image: "netflix.png",
    date: "Dec 27, 2023 - 08:50",
    title: "Kevin Malone added a note to the Mega Shark project.",
  },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="p-8 lg:pl-[332px] pt-[117px] flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 flex-col xl:flex-row">
            <div className="flex items-start gap-4 bg-white p-3 rounded-lg flex-1 ">
              <div className="bg-[#e7f5ff] p-3.5 rounded-full">
                <Shop width={20} height={20} fill="#2277f7" />
              </div>
              <div>
                <p className="font-medium">Number of companies</p>
                <p className="text-[40px] font-bold">
                  {countAllAmount(companiesData)}
                </p>
              </div>
              <div className="w-full h-[100px]">
                {isClient ? (
                  <AreaGraph
                    precise={false}
                    fill="#2277f7"
                    stroke="#1c488a"
                    data={companiesData}
                    id="colorCompany"
                    dataKey="amount"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-3 rounded-lg flex-1">
              <div className="bg-[#e3ffcc] p-3.5 rounded-full">
                <User width={20} height={20} fill="#97e05c" />
              </div>
              <div>
                <p className="font-medium">Number of contacts</p>
                <p className="text-[40px] font-bold">
                  {countAllAmount(contactData)}
                </p>
              </div>
              <div className="w-full h-[100px]">
                {isClient ? (
                  <AreaGraph
                    precise={false}
                    fill="#97e05c"
                    stroke="#528529"
                    data={contactData}
                    id="colorContact"
                    dataKey="amount"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-3 rounded-lg flex-1">
              <div className="bg-[#ffeccc] p-3.5 rounded-full">
                <Script width={20} height={20} fill="#fabf5c" />
              </div>
              <div>
                <p className="font-medium">Total deals in pipeline </p>
                <p className="text-[40px] font-bold">
                  {countAllAmount(totalDealsData)}
                </p>
              </div>
              <div className="w-full h-[100px]">
                {isClient ? (
                  <AreaGraph
                    precise={false}
                    fill="#fabf5c"
                    stroke="#a3772e"
                    data={totalDealsData}
                    id="colorDeal"
                    dataKey="amount"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="bg-white flex flex-col rounded-lg flex-1">
              <div className="flex gap-6 p-6 border-b-2 border-gray-100">
                <Calendar width={20} height={20} fill="#1c1c1c" />
                <p className="text-[18px] font-bold">Upcoming events </p>
              </div>
              <div className="p-3 box-border h-[500px]">
                <div className="px-6 py-3 h-full overflow-auto">
                  {event.map((item, index) => {
                    return (
                      <div
                        className={
                          "flex items-start p-4 gap-3 " +
                          (index != event.length - 1
                            ? "border-b-2 border-gray-100"
                            : "")
                        }
                        key={index}
                      >
                        <div className="bg-[#2277f7] w-[10px] h-[10px] rounded-full mt-[7px] shrink-0"></div>
                        <div className="flex flex-col gap-2">
                          <p className="font-medium">{item.date}</p>
                          <p className="text-[18px] font-bold">{item.title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 flex-2">
              <div className="bg-white flex flex-col rounded-lg">
                <div className="flex gap-6 p-6 border-b-2 border-gray-100">
                  <Coin width={20} height={20} fill="#1c1c1c" />
                  <p className="text-[18px] font-bold">Deals</p>
                </div>
                <div className="w-full lg:h-[500px] p-6">
                  {isClient ? (
                    <AreaGraph
                      precise={true}
                      fill="#97e05c"
                      fillSecond="#e85858"
                      stroke="#528529"
                      strokeSecond="#992828"
                      data={dealsData}
                      id="one"
                      idSecond="two"
                      dataKey="price1"
                      dataKeySecond="price2"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="flex gap-6 p-6 border-b-2 border-gray-100">
            <List width={20} height={20} fill="#1c1c1c" />
            <p className="text-[18px] font-bold">Upcoming events </p>
          </div>
          <div className="p-3 box-border h-[500px]">
            <div className="px-6 py-3 h-full overflow-auto">
              {activity.map((item, index) => {
                return (
                  <div
                    className={
                      "flex lg:flex-row flex-col items-start p-4 gap-5 " +
                      (index != event.length - 1
                        ? "border-b-2 border-gray-100"
                        : "")
                    }
                    key={index}
                  >
                    <img
                      src={item.image}
                      className="bg-[#2277f7] w-[50px] h-[50px] rounded-lg mt-[7px] shrink-0"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-[18px]">{item.date}</p>
                      <p className="text-[18px] font-bold">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
