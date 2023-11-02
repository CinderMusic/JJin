import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { websiteText } from '../data/website'

const Website = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "플리 No.2"
            description="플리 No.2페이지입니다.">
                
            <section id='websitePage' className={websitePageClass}>
                <h2>😄 플리 No.2</h2>
                <div className="video__inner">
                    <VideoCard videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website