import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/video/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main 
            title="Cinder Music" 
            description="Cinder Music에 오신것을 환영합니다."
        >
            <Today videos={todayText} id='today' />
            <Developer videos={developerText} title='😪 추천 채널을 소개합니다.' id='developer' />
            <VideoSlider videos={webdText} title='😮 플리 No.1' id='web' />
            <VideoSlider videos={websiteText} title='😛 플리 No.2' id='website' />
            <VideoSlider videos={gsapText} title='🤓 플리 No.3' id='gsap' />
            <VideoSlider videos={portfolioText} title='🤗 플리 No.4' id='portfolio' />
            <VideoSlider videos={youtubeText} title='😱 플리 No.5' id='youtube' />
        </Main>
    )
}

export default Home