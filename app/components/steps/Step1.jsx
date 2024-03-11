import Button from '@/components/ui/Button'
import ButtonOutline from '@/components/ui/ButtonOutline'
import Image from 'next/image'
import monitor from '../../assets/Screen.png'
import Animation from '../AnimationWrapper'

const Step1 = () => {
	return (
		<div className='mt-16 '>
			<Animation />
			<div className='flex flex-col gap-4 items-center' data-aos='zoom-out-up'>
				<p className='text-center text-2xl text-blue-500'>STEP 1</p>
				<h1 className='text-3xl md:text-7xl font-bold text-center mx-10'>
					Connect Your Content
				</h1>
				<h2 className='text-gray-400 text-center w-[300px] md:w-[800px]'>
					Bring all of your content together and get a Homepage that
					automatically updates whenever you create anywhere online.
				</h2>
				<ButtonOutline text={'View Avaliable Sources'} />
			</div>
			<div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-4 ml-10'>
				<div data-aos='fade-left'>
					<h3 className='text-2xl mb-10'>Your Homepage</h3>
					<h1 className='text-3xl md:text-7xl -ml-7 font-bold text-center w-[100%] mb-5 md:mb-10'>
						Your Content. All in <span className='text-blue-500'>One Spot</span>
					</h1>
					<p className='flex items-center gap-2 mb-7'>
						<span className='w-8 h-8 flex items-center justify-center p-3 bg-gray-700 rounded-full'>
							1
						</span>{' '}
						Bring all of your content together into one homepage.
					</p>
					<p className='flex items-center gap-2'>
						<span className='w-8 h-8 flex items-center justify-center p-3 bg-gray-700 rounded-full'>
							2
						</span>
						Your page automatically updates whenever you create.
					</p>
					<div className='flex gap-5 mt-10'>
						<Button text={'Get Started Now'} />
						<ButtonOutline text={'View A Demo'} />
					</div>
				</div>
				<div
					data-aos='fade-right'
					className='mx-auto lg:mx-0 flex items-center justify-center md:block'
				>
					<Image
						className='ml-24 overflow-x-hidden w-full'
						src={monitor}
						alt='monitor'
					/>
				</div>
			</div>
		</div>
	)
}

export default Step1
