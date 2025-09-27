import React from 'react'
import clsx from 'clsx'

export const Input = React.forwardRef(function Input({ className = '', ...props }, ref) {
  return (
    <input
      ref={ref}
      className={clsx('h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500', className)}
      {...props}
    />
  );
});


