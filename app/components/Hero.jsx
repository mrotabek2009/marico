import Button from '@/components/ui/Button'
import ButtonOutline from '@/components/ui/ButtonOutline'
import Image from 'next/image'
import text from '../assets/text.svg'
import Animation from './AnimationWrapper'

const Hero = () => {
	return (
		<div className='text-center w-full flex gap-10 flex-col items-center my-24'>
			<Animation />
			<h1 data-aos='fade-up' className='xl:text-[112px] text-[40px] font-bold'>
				Own your audience.
			</h1>
			<Image
				data-aos='fade-up'
				className='w-[500px] xl:w-[1200px]'
				src={text}
				width={1200}
				height={700}
				alt='text'
			/>
			<h2
				className='mx-[100px] text-[20px] xl:text-[30px] w-[300px] md:w-[500px]'
				data-aos='zoom-out'
			>
				Turn your audience into email and text message subscribers.
			</h2>
			<div className='flex gap-5'>
				<Button text={'Get Started Now'} />
				<ButtonOutline text={'View A Demo'} />
			</div>
			<div className='flex items-center gap-2' data-aos='zoom-in'>
				<div class='relative h-[20px] w-[20px]'>
					<span class='animate-ping left-0 absolute w-full h-full inline-flex rounded-full bg-green-400 opacity-75'></span>
					<div class='block h-[20px] w-[20px] rounded-full bg-green-400'></div>
				</div>
				<p className='text-gray-400 text-[15px] lg":text-[20px]'>
					<span className='text-white font-bold'>1000+</span> creators have
					already started
				</p>
			</div>
		</div>
	)
}

export default Hero
