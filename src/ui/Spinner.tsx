

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-96 ">
      <div
        className="
          w-16 aspect-square rounded-full
          border-[5px]
          border-transparent
          border-t-brand-600
          border-r-brand-400
          border-b-brand-200
          animate-spin
          shadow-brand
        "
      />
    </div>
  )
}
