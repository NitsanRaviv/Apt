import React from 'react'
import clsx from 'clsx'

export function Dialog({ open, onOpenChange, children }) {
  React.useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onOpenChange?.(false) }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/60" onClick={() => onOpenChange?.(false)} />
      {children}
    </div>
  )
}

export function DialogContent({ className = '', ...props }) {
  return (
    <div
      className={clsx('relative z-10 w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl', className)}
      {...props}
    />
  )
}


