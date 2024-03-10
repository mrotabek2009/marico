/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import experts from '../assets/Experts.png'
import people from '../assets/People.png'
import Animation from './AnimationWrapper'

const Experts = () => {
	return (
		<div>
			<Animation />
			<div>
				<h1
					data-aos='fade-up'
					className='text-2xl lg:text-7xl font-bold text-center mx-20'
				>
					Experts Agree
				</h1>
				<Image
					data-aos='fade-down'
					className='mt-5 mb-32'
					src={experts}
					alt='experts'
				/>
			</div>
			<div>
				<div className='relative mt-5' data-aos='zoom-in'>
					<h1 className='text-xl lg:text-5xl pt-20 font-bold text-center'>
						We've helped over 1,000 creators reclaim control of their audience.
					</h1>
					<div className='absolute overflow-hidden flex items-center justify-center top-0 left-0 w-full -z-10'>
						<Image src={people} alt='people' className='overflow-hidden' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experts
