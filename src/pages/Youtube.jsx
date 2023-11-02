import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "플리 No.5"
            description="플리 No.5">
            
            <section id='portPage' className={youtubePageClass}>
                <h2>😄 플리 No.5</h2>
                <div className="video__inner">
                    <VideoCard videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}

export default Youtube