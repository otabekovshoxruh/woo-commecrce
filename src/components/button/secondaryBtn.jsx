import classNames from "classnames"

export  function Secondary({ 
  onClick,
  className,
  children,
  ...props 
}) { const cx = classNames([
        "border-rose-600 rounded text-white  tracking-wide duration-300 py-2 px-3 shadow-2xl  ", className]);
       
   return(
    <button onClick={onClick} className={cx} {...props} >
      {children}
    </button>
  );
}
