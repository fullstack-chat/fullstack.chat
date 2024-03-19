import React, { ReactNode } from 'react'

type Props = {
  title?: string
  children: ReactNode
  className?: string
}

function UiCard({ title, children, className }: Props) {
  return (
    <div className={`bg-gradient-to-tl from-[#1B1923] border-t-2 border-[#222222] rounded-xl p-3`}>
      { title && (
        <div className="mb-2 font-semibold">
          { title }
        </div>
      )}
      <div className={className}>
        { children }
      </div>
    </div>
  )
}

export default UiCard