"use client";

import { useCallback, useState } from "react";
import ParticipantSelector from "../components/ParticipantSelector";
import TimeSelector from "@/components/TimeSelector";
import { log } from "console";
const MIN_PARTICIPANTS = 1;
const MAX_PARTICIPANTS = 4;

export default function Home() {
  const [participants, setParticipants] = useState(1);
  const [selectedTime, setSelectedTime] = useState("10:00");

  const serviceName = "مشاوره";

  function showService() {
    const servicePrice = 500000;

    console.log(serviceName);
    console.log(servicePrice);
  }

  showService();

  // const availableTimes = ["10:00", "11:00", "12:00", "13:00", "14:00"];

  // const [morningTime, , noonTime, ...laterTimes] = availableTimes;
  // console.log("morningTime: ", morningTime);
  // console.log("noonTime: ", noonTime);
  // console.log("laterTimes: ", laterTimes);

  // const booking = {
  //   id: 101,
  //   customer: {
  //     name: "ali",
  //     phone: "09120000000",
  //   },
  //   service: {
  //     title: "مشاوره",
  //     duration: 30,
  //   },
  // };

  // const { id, customer, ...remaning } = booking;

  // console.log(id);
  // console.log(customer);
  // console.log(remaning);

  // const {
  //   customer,
  //   customer: { name = "no name" },
  // } = booking;
  // console.log(name);
  // console.log(customer);
  // const { phone = "ثبت نشده" } = customer;

  // const {
  //   customer: { name },
  //   service: { title, duration },
  // } = booking;
  // console.log(name);
  // console.log(title);
  // console.log(duration);

  function increaseParticipants() {
    setParticipants((current) => Math.min(current + 1, MAX_PARTICIPANTS));
  }

  function decreaseParticipants() {
    setParticipants((current) => Math.max(current - 1, MIN_PARTICIPANTS));
  }

  const handleTimeChange = useCallback((time: string) => {
    setSelectedTime(time);
  }, []);

  return (
    <main className="flex flex-col gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ParticipantSelector
        participants={participants}
        onIncrease={increaseParticipants}
        onDecrease={decreaseParticipants}
        minParticipants={MIN_PARTICIPANTS}
        maxParticipants={MAX_PARTICIPANTS}
      />
      <TimeSelector
        selectedTime={selectedTime}
        onTimeChange={handleTimeChange}
      />
    </main>
  );
}
