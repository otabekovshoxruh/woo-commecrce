export default function secondaryBtn({ onClick, children, ...props }) {
    return (
      <button onClick={onClick} {...props} className="border-rose-600 rounded text-white bg-[#7854F7] tracking-wide duration-300 py-5 px-10 shadow-2xl hover:bg-blue-700  ">
        {children}
      </button>
    );
  }
  
