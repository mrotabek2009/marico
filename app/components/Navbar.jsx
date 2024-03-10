'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

	return (
		<div className='text-gray-400 md:px-[120px] pt-4 flex items-center justify-between'>
			<Link href='/'>
				<Image src={logo} alt='LOGO' />
			</Link>
			<div className='items-center gap-[28px] hidden md:flex'>
				<DropdownMenu>
					<DropdownMenuTrigger className='flex min-w-fit items-center hover:text-blue-500 transition-all'>
						Use Cases{' '}
						<ChevronDown className='hover:rotate-180 transition-all' />
					</DropdownMenuTrigger>
					<DropdownMenuContent className='text-gray-400'>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='hover:text-blue-600'>
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem className='hover:text-blue-600'>
							Billing
						</DropdownMenuItem>
						<DropdownMenuItem className='hover:text-blue-600'>
							Team
						</DropdownMenuItem>
						<DropdownMenuItem className='hover:text-blue-600'>
							Subscription
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Link className='hover:text-blue-600 transition-all' href='/'>
					About
				</Link>
				<Link className='hover:text-blue-600 transition-all' href='/'>
					Pricing
				</Link>
				<Link className='hover:text-blue-600 transition-all' href='/'>
					Blog
				</Link>
			</div>

			<div className='flex md:hidden'>
				<Sheet>
					<SheetTrigger>☰</SheetTrigger>
					<SheetContent className='backdrop-blur-sm'>
						<div className='items-center gap-[38px] flex flex-col mt-10'>
							<DropdownMenu>
								<DropdownMenuTrigger className='flex min-w-fit items-center hover:text-blue-500 transition-all'>
									Use Cases{' '}
									<ChevronDown className='hover:rotate-180 transition-all' />
								</DropdownMenuTrigger>
								<DropdownMenuContent className='text-gray-400 backdrop-blur-xl'>
									<DropdownMenuSeparator />
									<DropdownMenuItem className='hover:text-blue-600'>
										Profile
									</DropdownMenuItem>
									<DropdownMenuItem className='hover:text-blue-600'>
										Billing
									</DropdownMenuItem>
									<DropdownMenuItem className='hover:text-blue-600'>
										Team
									</DropdownMenuItem>
									<DropdownMenuItem className='hover:text-blue-600'>
										Subscription
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<Link className='hover:text-blue-600 transition-all' href='/'>
								About
							</Link>
							<Link className='hover:text-blue-600 transition-all' href='/'>
								Pricing
							</Link>
							<Link className='hover:text-blue-600 transition-all' href='/'>
								Blog
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>

			<div className='gap-3 hidden md:flex'>
				<SignedOut>
					<SignInButton />
					<SignUpButton className='p-2.5 text-white rounded-xl bg-[#306EF7] hover:border hover:border-[#306EF7] hover:text-white hover:scale-75 hover:bg-transparent transition-all' />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</div>
	)
}

export default Navbar
