import React from "react";
import { useSelector } from "react-redux";
import Button from "@/common/Components/Button/Button";
import phone from "@/common/images/black-phone.svg";
import Image from "next/image";
import Link from "next/link";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

interface ScheduleProps {
  handleFunction: () => any;
}

const Schedule = ({ handleFunction }: ScheduleProps) => {
  const branch = useSelector((state: any) => state.branch.branch);
  return (
    <div className="schedule-container">
      <div className="title py-3">
        <h3 className="text-[20px] text-primary font-bold">
          YOUR NEAREST FAVORITE STORE
        </h3>
      </div>
      {branch?.map((shop: any, index: number) => {
        const {
          address,
          branch_status,
          delivery,
          delivery_timings,
          email,
          miles,
          mobile,
          registration_no,
          takeaway,
          slug,
          takeaway_timings,
          title,
          zipcode,
          delivery_schedule,
          takeaway_schedule,
        } = shop;
        return (
          <div
            key={index}
            className="shop-details bg-white shadow-[0_0_12px_#0000004F] p-4"
          >
            <div className="shop-card-head flex items-center justify-between border-b-[1px] border-[#707070] pb-1">
              <div className="title">
                <h2 className="text-2xl text-primary font-bold capitalize">
                  {title}
                  <span className="text-[20px] text-secondary">
                    ({miles} miles)
                  </span>
                </h2>
                <p>
                  {address}, {zipcode}
                </p>
              </div>
              <Button
                title="Online Order"
                type="button"
                bgColor="bg-primary text-white rounded-sm"
                padding="py-2 px-6"
                handleFunction={handleFunction}
              />
            </div>
            <div className="phone-and-status flex items-center justify-between py-2 px-4 border-b-[1px] border-[#707070]">
              <div className="phone">
                <p className="text-sm">Telephone</p>
                <Link
                  href="tel:01293550470"
                  className="flex items-center text-[18px] font-[BebasKai]"
                >
                  <Image
                    src={phone}
                    alt="telephone"
                    className="w-[18px] mr-1"
                  />
                  01293550470
                </Link>
              </div>
              <div className="delivery">
                <p className="text-sm">
                  Delivery Service{" "}
                  {delivery === 1 &&
                  delivery_timings === "Open" &&
                  branch_status === "online" ? (
                    <span className="text-primary font-semibold">ONLINE</span>
                  ) : (
                    <span className="text-secondary font-semibold">
                      OFFLINE
                    </span>
                  )}
                </p>
                <h4 className="font-[BebasKai]">
                  {delivery === 1 &&
                  delivery_timings === "Open" &&
                  branch_status === "online"
                    ? "Yes"
                    : "No"}
                </h4>
              </div>
              <div className="takeaway">
                <p className="text-sm">
                  Delivery Service{" "}
                  {takeaway === 1 &&
                  takeaway_timings === "Open" &&
                  branch_status === "online" ? (
                    <span className="text-primary font-semibold">ONLINE</span>
                  ) : (
                    <span className="text-secondary font-semibold">
                      OFFLINE
                    </span>
                  )}
                </p>
                <h4 className="font-[BebasKai]">
                  {takeaway === 1 &&
                  takeaway_timings === "Open" &&
                  branch_status === "online"
                    ? "Yes"
                    : "No"}
                </h4>
              </div>
            </div>
            <div className="opening-schedule pt-4 px-4">
              <div className="row flex items-center justify-between">
                <h3 className="flex-1"></h3>
                <div className="flex-[1.3_1_0%] flex items-center justify-between">
                  <h3 className="text-sm font-bold text-primary flex-1 flex">
                    IN-STORE
                  </h3>
                  <h3 className="text-sm font-bold text-primary flex-1 flex justify-end">
                    DELIVERY
                  </h3>
                </div>
              </div>
              {days.map((day: any, index: number) => {
                let takeaway = takeaway_schedule.takeawayDays[day];
                let delivery = delivery_schedule.deliveryDays[day];
                return (
                  <div
                    key={index}
                    className="details flex items-center justify-between mt-3"
                  >
                    <p className="text-sm flex-1 capitalize">{day}</p>
                    <div className="flex-[1.3_1_0%] flex items-center justify-between">
                      <p className="text-sm flex-1 flex">
                        {takeaway.length > 0
                          ? takeaway.map((t: string) => t)
                          : "Closed"}
                      </p>
                      <p className="text-sm flex-1 flex justify-end">
                        {delivery.length > 0
                          ? delivery.map((t: string) => t)
                          : "Closed"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
