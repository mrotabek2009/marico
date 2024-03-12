import FlareCursor from '@/components/FlareCursor'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import favicon from './assets/favicon.png'
import Navbar from './components/Navbar'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500'],
})

export const Metadata = {
	metadataBase: new URL('https://marico-by-otabek.vercel.app/'),
	title: 'Marico — we help people to take control of their audience',
	description: "Take control of your audience, so you don't lose them.",
	authors: [
		{ name: 'Otabek Abdiraimov', url: 'https://marico-by-otabek.vercel.app/' },
	],
	icons: { icon: `${favicon}` },
	keywords:
		'marico, audience controlling, take control of audience, easy way to control the audience',
	openGraph: {
		title: 'Marico — we help people to take control of their audience',
		description: "Take control of your audience, so you don't lose them.",
		type: 'website',
		url: 'https://marico-by-otabek.vercel.app/',
		locale: 'en_EN',
		countryName: 'Uzbekistan',
		siteName: 'Marico',
		emails: 'otabek.bro2009@gmail.com',
	},
}

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang='en' className='containers !scroll-smooth'>
				<body className={`${poppins.classname} overflow-x-hidden`}>
					<div className='!overflow-hidden'>
						<NextTopLoader />
						<FlareCursor />
						<Navbar />
						{children}
					</div>
				</body>
			</html>
		</ClerkProvider>
	)
}
