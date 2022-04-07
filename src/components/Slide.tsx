import React from 'react'
import banner from '../assets/image/banner1.png'
type Props = {}

const Slide = (props: Props) => {
    return (
        <section className="slider">
    <a href="#"><img src={banner} /></a>
</section>

    )
}

export default Slide