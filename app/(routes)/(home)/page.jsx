import Experts from '@/app/components/Experts'
import Features from '@/app/components/Features'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import Step1 from '@/app/components/steps/Step1'
import Step2 from '@/app/components/steps/Step2'
import Step3 from '@/app/components/steps/Step3'

export default function Home() {
	return (
		<div>
			<Hero />
			<Features />
			<Step1 />
			<Step2 />
			<Step3 />
			<Experts />
			<Footer />
		</div>
	)
}
