import { memo } from "react";
type TimeSelectorProps = {
  selectedTime: string;
  onTimeChange: (time: string) => void;
};

export default memo(function TimeSelector({
  selectedTime,
  onTimeChange,
}: TimeSelectorProps) {
  console.log("TimeSelector rendered");

  return (
    <div className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-white px-8 py-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <button
        onClick={() => onTimeChange("08:00")}
        disabled={selectedTime === "08:00"}
        className="h-12 w-18 rounded-lg bg-gray-200 disabled:border-emerald-400 disabled:bg-emerald-200 disabled:border-4 text-black text-lg"
      >
        08:00
      </button>

      <button
        onClick={() => onTimeChange("09:00")}
        disabled={selectedTime === "09:00"}
        className="h-12 w-18 rounded-lg bg-gray-200 disabled:border-emerald-400 disabled:bg-emerald-200 disabled:border-4 text-black text-lg"
      >
        09:00
      </button>

      <button
        onClick={() => onTimeChange("10:00")}
        disabled={selectedTime === "10:00"}
        className="h-12 w-18 rounded-lg bg-gray-200 disabled:border-emerald-400 disabled:bg-emerald-200 disabled:border-4 text-black text-lg"
      >
        10:00
      </button>

      <button
        onClick={() => onTimeChange("11:00")}
        disabled={selectedTime === "11:00"}
        className="h-12 w-18 rounded-lg bg-gray-200 disabled:border-emerald-400 disabled:bg-emerald-200 disabled:border-4 text-black text-lg"
      >
        11:00
      </button>
    </div>
  );
});
