import React from 'react'
import s from './Separator.module.scss'

const Separator = () => {
	return (
		<svg
			className={s.separator}
			xmlns='http://www.w3.org/2000/svg'
			height='2'
			viewBox='0 0 1920 2'
			fill='none'
		>
			<path d='M0 1H1920' stroke='#E9E9E9' strokeLinecap='square' />
		</svg>
	)
}

export default Separator
