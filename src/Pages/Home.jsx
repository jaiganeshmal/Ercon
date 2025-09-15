import React, { Suspense, useEffect } from 'react'
import Loader from '../Componants/Loader'
const Carousel = React.lazy(() => import('../Componants/Carousel'))
const Intro = React.lazy(() => import('../Componants/Intro'))
const ChooseSection = React.lazy(() => import('../Componants/ChooseSection'))
const IntroCategory = React.lazy(() => import('../Componants/IntroCategory'))
const AboutSection = React.lazy(() => import('../Componants/AboutSection'))
const BannerSection = React.lazy(() => import('../Componants/BannerSection'))
const SocialMedia = React.lazy(() => import('../Componants/SocialMedia'))
const DownloadDocument = React.lazy(() => import('../Componants/DownloadDocument'))


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Carousel />
        <Intro />
        <ChooseSection />
        <IntroCategory />
        <AboutSection />
        <DownloadDocument />
        <BannerSection />
        <SocialMedia />
      </Suspense>
    </>
  )
}

export default Home