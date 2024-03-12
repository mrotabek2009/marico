import Button from '@/components/ui/Button'
import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import dot from '../assets/Dot.png'
import logo from '../assets/favicon.png'
import logo2 from '../assets/logo.png'

const Footer = () => {
	return (
		<div className='mt-[30%]' data-aos='zoom-out'>
			<div className='flex flex-col items-center justify-center gap-5'>
				<Link href={'/'}>
					<Image src={logo} alt='logo' width={100} height={100} />
				</Link>
				<h1 className='text-3xl md:text-7xl font-bold text-center mx-10'>
					Get Started Now
				</h1>
				<h2>Setup is easy and takes under 5 minutes.</h2>
				<Button text={'Get Started Now'} />
				<div className='flex items-center gap-2' data-aos='zoom-in'>
					<Image src={dot} alt='dot' />
					<p className='text-gray-400 text-[15px] lg:text-[20px]'>
						<span className='text-white font-bold'>1000+</span> creators have
						already started
					</p>
				</div>
			</div>
			<div className='flex-col gap-4 md:gap-0 text-center md:text-start md:flex-row flex justify-between mt-10'>
				<div className='mx-auto md:mx-0'>
					<Image src={logo2} alt='logo2' />
					<p className='text-gray-400 hover:text-blue-600 transition-all cursor-pointer'>
						info@marico.co
					</p>
				</div>
				<div className='items-center justify-center gap-[28px] flex'>
					<Link className='hover:text-blue-600 transition-all' href='/'>
						About
					</Link>
					<Link className='hover:text-blue-600 transition-all' href='/'>
						Pricing
					</Link>
					<Link className='hover:text-blue-600 transition-all' href='/'>
						Blog
					</Link>
					<SignInButton className='hover:text-blue-600 transition-all' />
				</div>
			</div>
		</div>
	)
}

export default Footer
