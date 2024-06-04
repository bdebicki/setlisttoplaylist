import React, { ChangeEvent } from 'react'

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	value?: string
	defaultValue?: string
	placeholder?: string
}

export const Input = ({
	onChange,
	value,
	defaultValue,
	placeholder,
}: Props) => {
	return (
		<input
			type="text"
			onChange={onChange}
			value={value}
			defaultValue={defaultValue}
			placeholder={placeholder}
			className="border"
		/>
	)
}
