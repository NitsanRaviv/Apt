import React from 'react'
import clsx from 'clsx'

export function Badge({ className = '', ...props }) {
  return (
    <span
      className={clsx('inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700', className)}
      {...props}
    />
  )
}


