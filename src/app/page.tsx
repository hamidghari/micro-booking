"use client";

import { useCallback, useState } from "react";
import ParticipantSelector from "../components/ParticipantSelector";
import TimeSelector from "@/components/TimeSelector";
const MIN_PARTICIPANTS = 1;
const MAX_PARTICIPANTS = 4;

export default function Home() {
  const [participants, setParticipants] = useState(1);
  const [selectedTime, setSelectedTime] = useState("10:00");

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
