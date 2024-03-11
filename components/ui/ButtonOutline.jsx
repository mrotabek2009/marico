const ButtonOutline = ({ text }) => {
	return (
		<div>
			<button className='md:px-9 px-5 md:py-5 py-3 text-gray-400 hover:bg-gray-400 hover:text-black transition-all rounded-xl bg-transparent border border-gray-400 hover:scale-90'>
				{text}
			</button>
		</div>
	)
}

export default ButtonOutline
