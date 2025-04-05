import { Dashboard } from "./Icon";

export default function Sidebar() {
  return (
    <>
      <div className="w-[300px] bg-[#ffffff] h-full fixed bottom-0 top-0 pt-[100px] px-6 lg:block hidden">
        <button className="flex gap-3 items-center w-full hover:bg-[#e7f5ff] rounded-lg p-3 cursor-pointer transition-all">
          <Dashboard width={20} height={20} fill="#2277f7" />
          <p className="font-medium text-[#2277f7]">Dashboard</p>
        </button>
      </div>
    </>
  );
}
