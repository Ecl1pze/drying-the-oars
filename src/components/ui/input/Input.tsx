import { useState } from 'react'
import styles from './Input.module.scss'

const Input: React.FC = () => {
	const [localSearch, setLocalSearch] = useState('')

	const onClickDelete = (): void => {
		setLocalSearch('')
	}

	return (
		<div className={styles.root}>
			<svg
				width='26.000000'
				height='26.000004'
				viewBox='0 0 26 26'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<desc>Created with Pixso.</desc>
				<defs>
					<clipPath id='clip35_1430'>
						<rect
							id='bx:bx-search-alt-2'
							rx='0.000000'
							width='25.000000'
							height='25.000000'
							transform='translate(0.500000 0.500000)'
							fill='white'
							fillOpacity='0'
						/>
					</clipPath>
				</defs>
				<rect
					id='bx:bx-search-alt-2'
					rx='0.000000'
					width='25.000000'
					height='25.000000'
					transform='translate(0.500000 0.500000)'
					fill='#FFFFFF'
					fillOpacity='0'
				/>
				<g clipPath='url(#clip35_1430)'>
					<path
						id='Vector'
						d='M20.6 18.39C20.1 17.9 19.6 17.4 19.12 16.89C18.72 16.48 18.48 16.18 18.48 16.18L15.44 14.73C16.66 13.35 17.33 11.58 17.33 9.75C17.33 5.56 13.93 2.16 9.75 2.16C5.56 2.16 2.16 5.56 2.16 9.75C2.16 13.93 5.56 17.33 9.75 17.33C11.65 17.33 13.4 16.61 14.73 15.44L16.18 18.48C16.18 18.48 16.48 18.72 16.89 19.12C17.31 19.52 17.86 20.05 18.39 20.6L19.86 22.11L20.51 22.81L22.81 20.51L22.11 19.86C21.7 19.46 21.15 18.92 20.6 18.39ZM9.75 15.16C6.76 15.16 4.33 12.73 4.33 9.75C4.33 6.76 6.76 4.33 9.75 4.33C12.73 4.33 15.16 6.76 15.16 9.75C15.16 12.73 12.73 15.16 9.75 15.16Z'
						fill='#000000'
						fillOpacity='0.300000'
						fillRule='nonzero'
					/>
				</g>
			</svg>
			<input
				type='text'
				placeholder='Поиск'
				value={localSearch}
				onChange={e => setLocalSearch(e.target.value)}
			/>
			{localSearch && (
				<button className={styles.delete} onClick={onClickDelete}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 25 25'
						fill='none'
						fillOpacity='0.300000'
						id='Close--Streamline-Majesticons'
						height='25'
						width='25'
					>
						<path
							stroke='#000000'
							strokeOpacity='0.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2.0833'
							d='M12.5 12.5 7.291666666666667 7.291666666666667m5.208333333333334 5.208333333333334 5.208333333333334 5.208333333333334m-5.208333333333334 -5.208333333333334 5.208333333333334 -5.208333333333334m-5.208333333333334 5.208333333333334 -5.208333333333334 5.208333333333334'
						></path>
					</svg>
				</button>
			)}
		</div>
	)
}
export default Input
