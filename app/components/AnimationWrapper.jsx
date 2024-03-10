'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'

const Animation = () => {
	React.useEffect(() => {
		AOS.init()
	}, [])
	return null
}

export default Animation
