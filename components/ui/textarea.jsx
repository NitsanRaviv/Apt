import React from 'react'
import clsx from 'clsx'

export const Textarea = React.forwardRef(function Textarea({ className = '', ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={clsx('min-h-[100px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500', className)}
      {...props}
    />
  );
});


