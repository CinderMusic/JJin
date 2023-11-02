import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { webdText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "플리 No.1"
            description="플리 No.1페이지입니다.">
                
            <section id='webdPage' className={webdPageClass}>
                <h2>😄 플리 No.1</h2>
                <div className="video__inner">
                    <VideoCard videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd