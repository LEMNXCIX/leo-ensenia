import React from 'react'
import { Cardbox } from '../components/Cardbox'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'

export const Inicio = () => {
    return (
        <>
            <Navbar/>
            <Slider/>
            <Cardbox/>
            <Footer/>
        </>
    )
}
