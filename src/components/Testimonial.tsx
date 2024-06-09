import Image from 'next/image';
import React from 'react';
import backBg from '../../public/assets/banner/bg.svg';
import star from '../../public/assets/star.png';
import img from '../../public/assets/testimonal/img.svg';
import usersec from '../../public/assets/testimonal/user-sec.svg';
import user from '../../public/assets/testimonal/user.svg';

const Testimonial: React.FC = () => {
    return (
        <section className="py-4" id="testimonial">
            <div className="text-center">
                <h1 className="text-black text-md font-bold">TESTIMONIAL</h1>
            </div>
            <div className="text-center items-center">
                <h2 className="text-black text-5xl m-auto font-bold w-96">What Our Users Say About Us?</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                    <div className="absolute -z-10" style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
                        <Image src={backBg} alt="back" layout="fill" objectFit="contain" />
                    </div>
                    <div className="w-full">
                        <Image src={img} alt="testimonial" width={600} height={400} layout="responsive" />
                    </div>
                </div>
                <div className="max-w-80 md:w-1/2 space-y-4">
                    <div className="text-center md:text-left">
                        <h3 className="text-black text-xl font-extrabold leading-8">
                            The Best Financial Accounting App Ever!
                        </h3>
                    </div>
                    <p className="mt-3 text-gray-700">
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                    </p>
                    <div className="flex items-center space-x-3">
                        <div>
                            <Image src={user} alt="user" width={40} height={40} />
                        </div>
                        <div className="mt-1 opacity-50">
                            <Image src={usersec} alt="user secondary" width={120} height={50} />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-black font-bold mt-3 text-lg">Nick Jonas</h4>
                    </div>
                </div>
            </div>
            <div className="ml-14 -mt-10">
            <Image src={star} alt='star' />
            </div>
        </section>
    );
};

export default Testimonial;
