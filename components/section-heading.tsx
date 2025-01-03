import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode
    }

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3l font-bold text-gray-800">{children}
    </h2>
  )
}
