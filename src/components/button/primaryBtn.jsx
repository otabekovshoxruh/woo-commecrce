import classNames from "classnames"

export  function PrimaryBtn({ 
  onClick,
  className,
  children,
  ...props 
}) { const cx = classNames([
        "border-rose-600 rounded text-white bg-[#7854F7] tracking-wide duration-300 py-2 px-5 shadow-2xl hover:bg-blue-700 ", className]);
       
   return(
    <button onClick={onClick} className={cx} {...props} >
      {children}
    </button>
  );
}
