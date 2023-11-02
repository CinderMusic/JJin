import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { gsapText } from '../data/gsap'

const Gsap = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "플리 No.3"
            description="플리 No.3페이지입니다.">
           
            <section id='gsapPage' className={gsapPageClass}>
                <h2>😄플리 No.3</h2>
                <div className="video__inner">
                    <VideoCard videos={gsapText} />
                </div>
            </section>
        </Main>
    )
}

export default Gsap