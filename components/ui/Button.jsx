const Button = ({ text }) => {
	return (
		<div>
			<button className='md:px-9 px-5 md:py-7 py-3 rounded-xl  bg-blue-500 hover:text-white hover:border hover:bg-transparent hover:scale-90 hover:border-blue-500 transition-all'>
				{text}
			</button>
		</div>
	)
}

export default Button
