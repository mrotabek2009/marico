import Button from '@/components/ui/Button'
import Image from 'next/image'
import screen from '../../assets/Mobile.png'
import Animation from '../AnimationWrapper'

const Step2 = () => {
	return (
		<div>
			<div className='flex flex-col gap-4'>
				<p className='text-center text-2xl text-blue-500'>STEP 2</p>
				<h1 className='text-3xl lg:text-7xl font-bold text-center mx-10'>
					Connect Your Content
				</h1>
				<h2 className='mx-auto text-gray-400 text-center w-[300px] lg:w-[800px]'>
					Bring all of your content together and get a Homepage that
					automatically updates whenever you create anywhere online.
				</h2>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
				<div data-aos='fade-up' className='bg-[#0D0D0D]'>
					<Animation />
					<p className='pl-4 pt-3 text-2xl text-green-500'>One Link</p>
					<h1 className='pl-4 py-5 text-[#919191] text-5xl'>
						ALL You Create. <br />
						<span className='text-white'>One Link</span>
					</h1>
					<Image className='pl-20' src={screen} alt='Screen' />
				</div>
				<div data-aos='fade-down' className='bg-[#0D0D0D]'>
					<Animation />
					<p className='pl-4 pt-3 text-2xl text-green-500'>
						Collect Subscribers
					</p>
					<h1 className='pl-4 py-5 text-[#919191] text-5xl mt-20'>
						Emails. <br /> <span>Phone #s.</span> <br />
						<span className='text-white mt-20'>All Yours.</span>
					</h1>
				</div>
			</div>
			<div className='flex items-center justify-center my-10'>
				<Button text={'Get Started'} />
			</div>
		</div>
	)
}

export default Step2
