import Animation from './AnimationWrapper'

/* eslint-disable react/no-unescaped-entities */
const Features = () => {
	return (
		<div>
			<Animation />
			<h1
				className='text-3xl md:text-7xl font-bold text-center mx-10'
				data-aos='fade-up'
			>
				Why Creators Love Marico
			</h1>
			<div className='text-center grid lg:grid-cols-3 grid-cols-1'>
				<div className='mt-16' data-aos='fade-left'>
					<h3 className='text-[25px] mb-2'>🙂Reduced Anxiety</h3>
					<p className='text-gray-400'>
						Never worry about losing your audience.
					</p>
				</div>
				<div className='mt-16' data-aos='fade-center'>
					<h3 className='text-[25px] mb-2'>😀Lower Workload</h3>
					<p className='text-gray-400'>
						Just share one link. We'll handle the rest.{' '}
					</p>
				</div>
				<div className='mt-16' data-aos='fade-right'>
					<h3 className='text-[25px] mb-2'>🥳More Time</h3>
					<p className='text-gray-400'>Spend less time on marketing tools </p>
				</div>
			</div>
		</div>
	)
}

export default Features
