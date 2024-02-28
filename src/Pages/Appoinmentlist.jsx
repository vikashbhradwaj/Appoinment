import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import Info from "./Data.json";
import { MdAccessTime } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

const Appoinmentlist = () => {
  return (
    <>
    <div className="container px-0 md:px-3">
    <div className="max-w-[1200px] mx-auto mt-5 bg-shadow p-5 rounded-xl ">
        {" "}
        {/* Adjusted padding here */}
        <div className="font-bold text-[#8D8DAA] text-xl py-3">
          <h1>Today's Appointment List</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="rounded-lg bg-[#FAFAFB] text-gray-500 uppercase text-[13px] leading-normal">
              <tr className="">
                <th className="py-3 px-6 text-left font-semibold text-gray-400">
                  PATIENTS
                </th>
                <th className="py-3 px-6 text-left font-semibold text-gray-400">
                  DATE
                </th>
                <th className="py-3 px-6 text-center font-semibold text-gray-400">
                  TIME
                </th>
                <th className="py-3 px-6 text-center font-semibold text-gray-400">
                  DOCTOR
                </th>
                <th className="py-3 px-6 text-center font-semibold text-gray-400">
                  INJURY
                </th>
                <th className="py-3 px-6 text-center font-semibold text-gray-400">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {Info.appointments.map((data, i) => (
                <tr
                  key={i}
                  className={
                    i !== Info.appointments.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[30px] h-[30px]"
                        src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                        alt="img"
                      />
                      <div className="flex flex-col">
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {data.patient_name}
                        </div>
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          +{data.mobile_number}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left font-semibold text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center m-0">
                        <BsCalendar4Week size={"17px"} />
                      </div>
                      <div>{data.appointment_date}</div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center font-semibold text-gray-400">
                    <div className="flex justify-center gap-2">
                      <div className="flex items-center m-0">
                        <MdAccessTime size={"17px"} />
                      </div>
                      <div>{data.appointment_time}</div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left font-semibold text-gray-400">
                    <div className="flex ml-0 md:ml-[5rem] ">
                       
                        <div className="flex items-center gap-2">
                        <img
                          className="w-[17px]"
                          src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"
                        />
                        <div>{data.doctor}</div>
                      </div>
                        
                      
                    </div>
                  </td>

                  <td className="font-semibold text-gray-700 my-4 p-2 text-sm flex justify-center w-fit mx-auto">
                    <div className="bg-[#E4ECF7] p-2 text-center rounded-lg">
                      {/* Assuming `data.injury` contains the text */}
                      {data.injury}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center font-semibold text-gray-200">
                    <div className="flex justify-center">
                      <BsThreeDotsVertical size={"20px"} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Appoinmentlist;
