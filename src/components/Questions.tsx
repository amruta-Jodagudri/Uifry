// import Image from 'next/image';
// import frame from '../../public/assets/Frame.png';
// import BackSvg from '../../public/assets/features/back.svg';
// import Star from '../../public/assets/star.png';

// export const Questions: React.FC = () => {
//     return (
//         <section className="faq-section relative lg:py-20 flex items-center justify-center -mt-32" id="faq-section">
//             <div className="container mx-auto px-4">
//                 <div className="max-w-4xl mx-auto text-center">
//                     <div className="text-left mb-10 max-w-md mx-auto">
//                         <h4 className="text-lg text-[rgb(255,85,85)]">FAQ</h4>
//                         <h1 className="text-black font-bold text-3xl md:text-5xl">Frequently Asked Questions</h1>
//                     </div>
                    
//                     <div className="flex justify-center mb-6">
//                         <Image src={Star} alt="star" className="w-10" />
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//                         {Array(6).fill(null).map((_, index) => (
//                             <div key={index} className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-gray-100' : 'bg-transparent'} ${[0, 3, 4].includes(index)} text-black`}>
//                                 <div className="heading-card mb-3">
//                                     <h1 className="text-xl font-semibold">The Best Financial Accounting App Ever!</h1>
//                                 </div>
//                                 <p className={`mt-2 ${index % 2 === 0 ? '' : 'text-gray-500'}`}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <Image src={BackSvg} alt="back-svg" className="absolute z-[-1] -left-24 -mt-20" />

//                 <div className="flex justify-center mt-32 space-x-4">
//                     <div className="flex flex-col items-center">
//                         <Image src={Star} alt="star" className="w-8 mb-8" />
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <Image src={frame} alt="frame" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl" />
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <Image src={Star} alt="star" className="w-10" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Questions;



import Image from 'next/image';
import frame from '../../public/assets/Frame.png';
import BackSvg from '../../public/assets/banner/bg.svg';
import Star from '../../public/assets/star.png';

export const Questions: React.FC = () => {
    return (
        <section className="faq-section relative lg:py-20 flex items-center justify-center -mt-20" id="faq-section">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-left">
                    <div className="max-w-md">
                        <h4 className="text-lg text-[rgb(255,85,85)]">FAQ</h4>
                        <h1 className="text-black font-bold text-3xl md:text-5xl">Frequently Asked Questions</h1>
                    </div>
                    <div className="flex justify-center mb-6">
                        <Image src={Star} alt="star" className="w-10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {Array(6).fill(null).map((_, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg ${[0, 3, 4].includes(index) ? 'bg-[rgb(255,85,85)]' : ''} text-black`}
                            >
                                <div className="heading-card mb-3">
                                    <h1 className="text-xl font-semibold">The Best Financial Accounting App Ever!</h1>
                                </div>
                                <p className={`mt-2 ${index % 2 === 0 ? '' : 'text-gray-500'}`}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Image src={BackSvg} alt="back-svg" className="absolute z-[-1] -left-24 -mt-20" />

                <div className="flex justify-center mt-32 space-x-4">
                    <div className="flex flex-col items-center">
                        <Image src={Star} alt="star" className="w-8 mb-8" />
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={frame} alt="frame" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl" />
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={Star} alt="star" className="w-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;
