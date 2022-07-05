const buttons = [
  { action: "0", className: "btn-0" },
  { action: "1", className: "btn-1" },
  { action: "2", className: "btn-2" },
  { action: "3", className: "btn-3" },
  { action: "4", className: "btn-4" },
  { action: "5", className: "btn-5" },
  { action: "6", className: "btn-6" },
  { action: "7", className: "btn-7" },
  { action: "8", className: "btn-8" },
  { action: "9", className: "btn-9" },
  { action: ".", className: "btn-dec" },
  { action: "C", className: "btn-c dark" },
  { action: "MR", className: "btn-mr dark" },
  { action: "M+", className: "btn-mp dark" },
  { action: "/", className: "btn-div contrast" },
  { action: "*", className: "btn-mul contrast" },
  { action: "-", className: "btn-sub contrast" },
  { action: "+", className: "btn-add contrast" },
  { action: "=", className: "btn-eql contrast" },
];

export function Calculator({ display, dispatch }) {
  return (
    <div className="calc">
      <div className="display">{display}</div>
        {buttons.map(({ action, className }) => (
          <button
            key={action}
            type="button"
            className={className}
            onClick={() => dispatch(action)}
          >
            {action}
          </button>
        ))}
    </div>
  );
}
