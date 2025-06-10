import { useReducer } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="plasmo-fc-flex plasmo-fc-flex-row plasmo-fc-items-center plasmo-fc-px-4 plasmo-fc-py-2 plasmo-fc-text-sm plasmo-fc-rounded-lg plasmo-fc-transition-all plasmo-fc-border-none
      plasmo-fc-shadow-lg hover:plasmo-fc-shadow-md
      active:plasmo-fc-scale-105 plasmo-fc-bg-slate-50 hover:plasmo-fc-bg-slate-100 plasmo-fc-text-slate-800 hover:plasmo-fc-text-slate-900">
      Count:
      <span className="plasmo-fc-inline-flex plasmo-fc-items-center plasmo-fc-justify-center plasmo-fc-w-8 plasmo-fc-h-4 plasmo-fc-ml-2 plasmo-fc-text-xs plasmo-fc-font-semibold plasmo-fc-rounded-full">
        {count}
      </span>
    </button>
  )
}
