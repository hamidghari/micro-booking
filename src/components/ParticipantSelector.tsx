type ParticipantSelectorProps = {
  participants: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minParticipants: number;
  maxParticipants: number;
};

export default function ParticipantSelector({
  participants,
  onIncrease,
  onDecrease,
  minParticipants,
  maxParticipants,
}: ParticipantSelectorProps) {
  return (
    <div className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-white px-8 py-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <button
        onClick={onIncrease}
        disabled={participants >= maxParticipants}
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-2xl font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 dark:disabled:bg-zinc-700"
      >
        +
      </button>

      <div className="flex min-w-20 flex-col items-center gap-1">
        <span className="text-3xl font-bold text-zinc-900 dark:text-white">
          {participants}
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">نفر</span>
      </div>

      <button
        onClick={onDecrease}
        disabled={participants <= minParticipants}
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-2xl font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 dark:disabled:bg-zinc-700"
      >
        -
      </button>
    </div>
  );
}
