const Button = ({ text }) => {
	return (
		<div>
			<button className='px-7 py-6 rounded-xl  bg-blue-500 hover:text-white hover:border hover:bg-transparent hover:scale-75 hover:border-blue-500 transition-all'>
				{text}
			</button>
		</div>
	)
}

export default Button
