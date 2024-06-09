import Image from 'next/image';
import TapeSvg from '../../public/assets/advert.png';
import ArrowSvg from '../../public/assets/arrow.png';
import BackImg from '../../public/assets/banner/bg.svg';
import BannerImg1 from '../../public/assets/banner/iphone.svg';
import { Data } from './Data';

export const HeroSection: React.FC = () => {
    return (
        <section className="banner overflow-hidden flex justify-center items-center min-h-screen" id="banner">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                <div className="heading flex-1">
                    <div className="header-info relative">
                        <div className="mt-16 ml-0 md:ml-12">
                            <h1 className="text-black text-4xl md:text-4xl lg:text-5xl font-extrabold max-w-md mx-auto md:mx-0">{Data.hero.subheadline}</h1>
                            <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
                                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu
                                adipiscing sociis arcu lorem porttitor.
                            </p>
                            <div className="banner-btn-grp mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start">
                                <button className="btn bg-black text-white py-2 px-4 rounded-lg flex items-center hover:bg-gray-800 transition">
                                    Get Started
                                    <span className="ml-2">
                                        <Image src={ArrowSvg} alt="arrow" width={24} height={24} />
                                    </span>
                                </button>
                                <div className="watch-video flex items-center mt-4 sm:mt-0 sm:ml-4">
                                    <svg
                                        className="icon w-8 h-8 mr-2"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                                        <path
                                            d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                                            fill="black"
                                            stroke="black"
                                        />
                                    </svg>
                                    <span className="text text-black font-medium">Watch Video</span>
                                </div>
                            </div>
                        </div>
                        <div className="back-img-container absolute -top-32 left-1/2 transform -translate-x-1/2 w-70 h-auto max-w-full overflow-hidden">
                            <Image src={BackImg} alt="backimg" objectFit="cover" />
                        </div>
                    </div>
                    <div className="tape-img relative mt-10 md:mt-0 md:flex-1 max-w-full">
                        <Image
                            src={TapeSvg}
                            alt="tape-img"
                            className="w-96 h-auto mx-auto md:mx-0 max-w-full"
                        />
                    </div>
                </div>
                <div className="img md:-mt-10 md:-mr-16 md:flex-1">
                    <Image
                        src={BannerImg1}
                        alt="banner-img1"
                        className="max-w-md md:max-w-lg sm:max-w-sm h-auto mx-auto md:mx-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
