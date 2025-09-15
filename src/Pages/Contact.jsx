import React, { useEffect } from "react";
import background_img from "../assets/Contact/img1.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { images37, images38, images39 } from "../assets/global";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full h-auto">
        <div className="min-h-screen  bg-[#EDF2F7] flex flex-col lg:flex-row justify-center lg:gap-4 gap-10 py-10 px-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:w-[40%] w-full p-4 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Want to Achieve your Trading Targets? Get in touch with us.
            </h1>
            <p className="text-gray-600">
              Drop us a line if you want to discuss about our B2B import export
              services worldwide. Our service professionals are open to
              communication.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-[#E0E0E0] p-4 rounded-full">
                <MdOutlineEmail size={40} className="text-gray-800" />
              </div>
              <div>
                <p className="text-gray-600">EMAIL US</p>
                <a href="" className="text-lg font-bold">
                  erconpk@erconme.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <hr className="w-24" />
              <p className="text-sm"> Connect with us:</p>
            </div>
            <div className="flex items-center">
              <p className="p-2 rounded-md">
                <FaFacebookF size={25} />
              </p>
              <p className="bg-[#9B4EDA] p-2 rounded-md">
                <BsTwitterX size={25} className="text-white" />
              </p>
              <p className="p-2 rounded-md">
                <FaLinkedin size={25} />
              </p>
              <p className="p-2 rounded-md">
                <FaInstagram size={25} />
              </p>
              <p className="p-2 rounded-md">
                <IoBasketballOutline size={25} />
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
           className="lg:w-[45%] w-full bg-white rounded-xl p-6 space-y-6">
            <div className="space-y-2">
              <h1 className="text-gray-800 text-2xl font-bold">
                Request A Quote — let’s work together.
              </h1>
              <p className="md:w-[80%] text-sm text-gray-600 ">
                Got a project? Drop me a line if you want to work together on
                something exciting. Or do you need our help? Feel free to
                contact us.
              </p>
            </div>
            <div className="space-y-4 w-full">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[#42526B] text-sm">Name</p>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="border border-[#42526B] rounded-md p-2  placeholder:text-[#42526B] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[#42526B] text-sm">Email</p>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="border border-[#42526B] rounded-md p-2  placeholder:text-[#42526B] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <p className="text-[#42526B] text-sm">Subject</p>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-[#42526B] rounded-md p-2  placeholder:text-[#42526B] outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-[#42526B] text-sm">Email</p>
                <textarea
                  placeholder="Email address"
                  className="border border-[#42526B] rounded-md p-2  placeholder:text-[#42526B] outline-none resize-none h-44"
                ></textarea>
              </div>
              <button className="bg-[#9B4EDA] hover:bg-[#540097] duration-300 cursor-pointer text-white px-8 py-2 rounded-md">
                Request a Quote
              </button>
            </div>
            <div></div>
          </motion.div>
        </div>

        {/* <div className='min-h-[150vh]' style={{ backgroundImage: `url(${background_img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
        </div> */}

        <div className="w-full flex flex-col md:flex-row md:gap-0 gap-6 justify-between items-center md:p-0 p-4 mt-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
           className="md:w-[50%] w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2542006.8996040835!2d-0.155225!3d51.523698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1755329563926!5m2!1sen!2sus"
              className="border-none w-full h-[80vh] rounded-xl"
              loading="lazy"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
           className="md:w-[45%] w-full rounded-xl shadow-xl flex flex-col items-center hover:border-t-4 hover:border-[#0FA14B] duration-200 p-10">
            <img src={images37} alt="picture" className="w-72" />
            <h1 className="text-2xl font-bold mb-6 text-center">
              ERCON GROUP OF INDUSTRIES (lahore)
            </h1>
            <div className="max-w-sm ">
              <div className="space-y-2">
                <div className="space-x-9">
                  <strong>Phone:</strong>
                  <a
                    href="tel:+00924235955877"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    0092-42-35955877
                  </a>
                </div>
                <div className="space-x-10">
                  <strong>Email:</strong>
                  <a
                    href="mailto:erconpk@erconme.com"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    erconpk@erconme.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <strong>Location:</strong>
                  <p className="text-gray-600 inline-block">
                    6.2km from Liliyani Toll plazaMutafabad Bayron, Near Pakki
                    Haveli and Madina Steel Mills, Lahore Kassur Road, Kasur
                    Punjab
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:gap-0 gap-6 justify-between items-center my-10 md:p-0 p-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
           className="md:w-[50%] w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2542006.8996040835!2d-0.155225!3d51.523698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1755329563926!5m2!1sen!2sus"
              className="border-none w-full h-[80vh] rounded-xl"
              loading="lazy"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
           className="md:w-[45%] w-full rounded-xl shadow-xl flex flex-col items-center hover:border-t-4 hover:border-[#0FA14B] duration-200 p-10">
            <img src={images38} alt="picture" className="w-72" />
            <h1 className="text-2xl font-bold mb-6 text-center">
              Ercon Middle East Industries F.Z.E
            </h1>
            <div className="max-w-sm ">
              <div className="space-y-2">
                <div className="space-x-9">
                  <strong>Phone:</strong>
                  <a
                    href="tel:+97165388386"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    971 6 5388386
                  </a>
                </div>
                <div className="space-x-14">
                  <strong>Fax:</strong>
                  <a
                    href="tel:+97167427939"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    971 6 7427939
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <strong>Location:</strong>
                  <p className="text-gray-600 inline-block">
                    P.O.Box 3026. Ajman. Ajman Free Zone Ajman. Ajman . United
                    Arab Emirates. erconme1@eim.ae
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:gap-0 gap-6 justify-between items-center my-10  md:p-0 p-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
           className="md:w-[50%] w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2542006.8996040835!2d-0.155225!3d51.523698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1755329563926!5m2!1sen!2sus"
              className="border-none w-full h-[80vh] rounded-xl"
              loading="lazy"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
           className="md:w-[45%] w-full rounded-xl shadow-xl flex flex-col items-center hover:border-t-4 hover:border-[#0FA14B] duration-200 p-10">
            <img src={images39} alt="picture" className="w-72" />
            <h1 className="text-2xl font-bold mb-6 text-center">
              Ercon Middle East Industries Saudia Co. (Riyadh)
            </h1>
            <div className="max-w-sm ">
              <div className="space-y-2">
                <div className="space-x-9">
                  <strong>Phone:</strong>
                  <a
                    href="tel:+00966114980016"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    00966 11 4980016
                  </a>
                </div>
                <div className="space-x-14">
                  <strong>Fax:</strong>
                  <a
                    href="tel:+00966114980804"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    00966 11 4980804
                  </a>
                </div>
                <div className="space-x-10">
                  <strong>Email:</strong>
                  <a
                    href="mailto:erconpk@erconme.com"
                    className="text-gray-600  hover:text-blue-500"
                  >
                    erconpk@erconme.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <strong>Location:</strong>
                  <p className="text-gray-600 inline-block">
                    Ercon Middle East Industries Saudia Co. (Riyadh) P.O.Box
                    2783. Al Riyadh Number 11461. 2nd Industrial Area, Phase -2.
                    Street-180 Al Kharj Road, AL Riyadh. Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
