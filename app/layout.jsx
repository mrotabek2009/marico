import FlareCursor from '@/components/ui/FlareCursor'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500'],
})

export const metadata = {
	title: 'Marico — control your audience.',
	description: 'Claim control of your audience.',
}

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang='en' className='container'>
				<body className={poppins.className}>
					<FlareCursor />
					<Navbar />
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
