import BannerF from ".././components/Banners/bannerF"
import BannerS from ".././components/Banners/bannerS"
import BannerT from ".././components/Banners/bannerT"
import SectionProject from ".././components/Section"
import HeroSlider from ".././components/Hero/hero"

import ".././style/index.css"

const Main = () => {
    return (
        <div style={{ maxWidth: "100%", alignItems: "center", justifyContent: "center" }}>
            <HeroSlider />
            <BannerF />
            <BannerS />
            <BannerT />
            <SectionProject />
        </div>
    )
}

export default Main;