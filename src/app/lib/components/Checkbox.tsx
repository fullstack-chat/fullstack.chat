import React from 'react'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
}

function Checkbox(props: Props) {
  return (
    <div className="flex gap-4 items-center">
      <input {...props}
        type="checkbox"
        className="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5" />
      <label className="block text-base font-medium text-white" >
        { props.label }
      </label>
    </div>
  )
}

export default Checkbox