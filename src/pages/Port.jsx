import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { portfolioText } from '../data/portfolio'

const Port = () => {
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "플리 No.4"
            description="플리 No.4페이지입니다.">
            
            <section id='portPage' className={portPageClass}>
                <h2>🫣 플리 No.4</h2>
                <div className="video__inner">
                    <VideoCard videos={portfolioText} />
                </div>
            </section>
        </Main>
    )
}

export default Port