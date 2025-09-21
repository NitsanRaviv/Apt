import React from 'react'
import clsx from 'clsx'

export const Button = React.forwardRef(function Button(
  { className = '', variant = 'default', size = 'md', ...props },
  ref
) {
  const base = 'inline-flex items-center justify-center font-medium focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-slate-300 text-slate-900 hover:bg-slate-50',
    ghost: 'text-slate-700 hover:bg-slate-100'
  };
  const sizes = {
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-10 px-4 text-sm rounded-lg',
    lg: 'h-12 px-6 text-base rounded-xl',
    icon: 'h-10 w-10 rounded-full'
  };

  return (
    <button ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props} />
  );
});


