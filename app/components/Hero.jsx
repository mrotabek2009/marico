import Button from '@/components/ui/Button'
import ButtonOutline from '@/components/ui/ButtonOutline'
import Image from 'next/image'
import text from '../assets/text.svg'

const Hero = () => {
	return (
		<div className='text-center w-full flex gap-10 flex-col items-center my-24'>
			<h1 className='xl:text-[112px] text-[40px] font-bold'>
				Own your audience.
			</h1>
			<Image
				className='w-[500px] xl:w-[1200px]'
				src={text}
				width={1200}
				height={700}
				alt='text'
			/>
			<h2 className='mx-[100px] text-[20px] xl:text-[30px] w-[300px] md:w-[500px]'>
				Turn your audience into email and text message subscribers.
			</h2>
			<div className='flex gap-5'>
				<Button text={'Get Started Now'} />
				<ButtonOutline text={'View A Demo'} />
			</div>
		</div>
	)
}

export default Hero
