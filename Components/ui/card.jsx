import React from 'react'
import clsx from 'clsx'

export function Card({ className = '', ...props }) {
  return <div className={clsx('rounded-xl border border-slate-200 bg-white', className)} {...props} />
}

export function CardContent({ className = '', ...props }) {
  return <div className={clsx('p-6', className)} {...props} />
}


