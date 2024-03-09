const ButtonOutline = ({ text }) => {
	return (
		<div>
			<button className='px-7 py-6 hover:bg-gray-400 hover:text-black transition-all rounded-xl bg-transparent border border-gray-400 hover:scale-75'>
				{text}
			</button>
		</div>
	)
}

export default ButtonOutline
