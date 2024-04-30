import React from 'react'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
}

function Input(props: Props) {
  return (
    <div className="mb-5">
      <label className="mb-3 block text-base font-bold text-white" >
        { props.label }
      </label>
      <input
        {...props}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  )
}

export default Input