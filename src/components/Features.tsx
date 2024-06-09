import Image from 'next/image';
import icon from '../../public/assets/Icon.png';
import BackSvg from '../../public/assets/banner/bg.svg';
import cube from '../../public/assets/cube-02.png';
import img1 from '../../public/assets/img1.png';
import img2 from '../../public/assets/img2.png';
import Mblsvg from '../../public/assets/mbl1.png';
import secondMbl from '../../public/assets/mbl2.png';
import ThirdSvg from '../../public/assets/mbl3.png';
import star from '../../public/assets/star.png';
import '../components/features.css';

export const Features: React.FC = () => {
    return (
        <section className="features min-h-screen flex flex-col items-center justify-center -mt-10" id="features">
            <div className="feature-container flex flex-col items-center justify-center">
                <div className="feature-frame flex flex-col md:flex-row items-center justify-center relative">
                    <div className="img-column mb-6 md:mb-0 md:mr-6">
                        <Image src={Mblsvg} alt="first" className="max-w-lg mx-auto" />
                    </div>
                    <div className="text-column text-center md:text-left">
                        <span className="feature-tagline text-[rgb(255,85,85)] font-bold">FEATURES</span>
                        <h1 className="text-4xl font-bold">Uifry Premium</h1>
                        <div className="txt-bx1 flex items-center mt-2.5 justify-center md:justify-start">
                            <span>
                                <Image src={star} alt="star" />
                            </span>
                            <h2 className="text-sm font-bold">&nbsp;&nbsp;Budgeting Intervals</h2>
                        </div>
                        <p className="text-sm">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className="txt-bx1 flex items-center mt-4 justify-center md:justify-start">
                            <span>
                                <Image src={cube} alt="cube" />
                            </span>
                            <h2 className="text-sm font-bold">&nbsp;&nbsp;Budgeting Intervals</h2>
                        </div>
                        <p className="text-sm">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className="txt-bx1 flex items-center mt-4 justify-center md:justify-start">
                            <span>
                                <Image src={icon} alt="icon" />
                            </span>
                            <h2 className="text-sm font-bold">&nbsp;&nbsp;Budgeting Intervals</h2>
                        </div>
                        <p className="text-sm">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div className="absolute back-glow" style={{ right: "-25%" }}>
                        <Image src={BackSvg} alt="back" />
                    </div>
                </div>

                <div className="feature-frame flex flex-col md:flex-row items-center justify-center relative">
                    <div className="text-column text-center md:text-left md:mr-6">
                        <span className="feature-tagline text-[rgb(255,85,85)] font-bold">ADVANTAGES</span>
                        <h1 className="text-4xl font-bold">Why Choose Uifry?</h1>
                        <div className="txt-bx1 flex items-center mt-2.5 justify-center md:justify-start">
                            <span>
                                <Image src={img1} alt="img1" />
                            </span>
                            <h2 className="text-md font-bold">&nbsp;Clever Notifications</h2>
                        </div>
                        <p className="mt-5 text-sm">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                    <div className="img-column mb-6 md:mb-0">
                        <Image src={secondMbl} alt="second" className="max-w-lg mx-auto" />
                    </div>
                </div>

                <div className="feature-frame flex flex-col md:flex-row items-center justify-center relative">
                    <div className="img-column mb-6 md:mb-0 md:mr-6">
                        <Image src={ThirdSvg} alt="third" className="max-w-lg mx-auto" />
                    </div>
                    <div className="text-column text-center md:text-left">
                        <div className="txt-bx1 flex items-center mt-2.5 justify-center md:justify-start">
                            <span>
                                <Image src={img2} alt="img2" />
                            </span>
                            <h2 className="text-md font-bold">&nbsp;Fully Customizable</h2>
                        </div>
                        <p className="mt-5 text-sm">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
            </div>
            <div className="-mr-96 mt-2">
            <Image src={star} alt='star' />
            </div>
        </section>
    );
};

export default Features;
