import Image from 'next/image';
import PhoneIcon from '../../public/assets/call.png';
import MailIcon from '../../public/assets/mail.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer dark:bg-gray-900" style={{ background: "white", width: "80%", margin: "0 auto" }}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="mt-3 mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3829 11.5942C23.1564 11.3741 22.8387 11.2741 22.5277 11.3253C22.2162 11.3762 21.9472 11.5718 21.8027 11.8524C21.3057 12.8179 20.6745 13.7051 19.9318 14.4895C20.0058 13.9229 20.0431 13.3529 20.0431 12.7814C20.0431 11.6848 19.8961 10.5564 19.6061 9.42704C18.6527 5.71752 16.1525 2.58042 12.7468 0.820189C12.4503 0.66699 12.097 0.672369 11.8053 0.834533C11.5136 0.996764 11.3226 1.2942 11.2964 1.62689C11.0309 4.99794 9.2945 8.06485 6.52981 10.0432C6.49322 10.0696 6.4569 10.0963 6.42057 10.1228C6.34534 10.1779 6.27441 10.23 6.20814 10.2737C6.19778 10.2806 6.18749 10.2876 6.17739 10.2948C4.43861 11.5398 3.00391 13.1992 2.0282 15.0944C1.03675 17.0221 0.534058 19.0907 0.534058 21.2426C0.534058 22.3389 0.681015 23.4673 0.970878 24.5969C2.50055 30.5507 7.85847 34.7089 14.0004 34.7089C21.4253 34.7089 27.4659 28.6679 27.4659 21.2426C27.4659 17.581 26.0159 14.1544 23.3829 11.5942Z" fill="#FF5555" />
                                <circle cx="13" cy="20.709" r="4" fill="white" />
                            </svg>
                            <span className='text-3xl font-bold'>&nbsp; Uifry</span>
                        </a>
                        <div className="mt-3 flex items-center">
                            <Image src={MailIcon} alt="mail" width={20} height={20} />
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Med", fontWeight: "500" }}>Help@Frybix.com</span>
                        </div>
                        <div className="mt-3 flex items-center">
                            <Image src={PhoneIcon} alt="phone" width={20} height={20} />
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Med", fontWeight: "500" }}>+1 234 456 678 89</span>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-black text-3xl font-bold" style={{fontFamily: "Clash Display Med", fontWeight: "500" }}>Links</h1>
                        <div className="mt-3">
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Home</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>About Us</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Bookings</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Blog</span>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-black text-3xl font-bold" style={{ fontFamily: "Clash Display Med", fontWeight: "500" }}>Legal</h1>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Terms of Use</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Privacy Policy</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Cookie Policy</span>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-black text-3xl font-bold" style={{fontFamily: "Clash Display Med", fontWeight: "500" }}>Product</h1>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Take Tour</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Live Chat</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Reviews</span>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-black text-3xl font-bold" style={{ fontFamily: "Clash Display Med", fontWeight: "500" }}>Newsletter</h1>
                        <div className="mt-3" style={{ display: "flex" }}>
                            <span className="text-black ml-2" style={{ fontFamily: "Clash Display Regular", fontWeight: "600", fontSize: "16px", marginLeft: "0px" }}>Stay Up to Date</span>
                        </div>
                        <div className="mt-3" style={{ display: "flex", marginTop: "20px" }}>
                            <input className="input-bx w-full md:w-24 p-2 border border-gray-300 rounded-md" type="text" placeholder="Your Email" required />
                            <button className="subscribe-bt text-white rounded-md p-2 bg-black ml-2">Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr style={{ marginTop: "8%" }} className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-center">
                    <span style={{ color: "black", fontFamily: "Clash Display Med", fontWeight: "500" }} className="sm:text-center dark:text-gray-400">Copyright 2022 uifry.com all rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
