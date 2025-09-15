import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  imaages29,
  imaages30,
  imaages31,
  imaages32,
  imaages33,
  imaages34,
  imaages35,
  imaages36,
} from "../assets/global";

const About = () => {
  const [activeTab, setActiveTab] = useState("typeTestedEnclosures");

  const tabContent = {
    typeTestedEnclosures: {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages29} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold"> Type Tested Enclosures</h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            When it comes to sheet metal fabrication, ERCON INDUSTRIES takes it
            very acutely, forming the metal sheets with aid of latest
            technologies & applied sciences, and in result getting the right
            solutions for the customer stern needs. The vast expreience and
            technical approach of our team helped our clients to get the right
            solutions they are looking for, whether they are short at space,
            ground realities are involved, tough environment of Middle East, our
            team alwasys studied the requirement and designed the products which
            are in accordance with international standards & meet these
            aforementioned challenges as well.
          </p>
        </>
      ),
    },
    "MV/LVSwitchgear": {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages30} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold"> MV/LVSwitchgear</h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            Our Switchgear division has expertise in designing an integration of
            LV & MV switchgear and capable to integrate as per IEC,ASTA and NEMA
            Standards.We are flexible in design and selection of components as
            per customer requirements, Ecron has expertise in manufacturing high
            quality package Substations,MDBs,SMBBs,FDBs,LCPsP,PF Panels, AHU
            Panels, Motor control centers,intelligent MCC & Draw out type MCCs.
          </p>
        </>
      ),
    },
    automation: {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages29} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold"> Automation</h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            ERCON INDUSTRIES Automation provides Automation solutions and
            complex control and instrumentation requirements in the market.
            Ercon is having highly skilled and expreiencd engineering
            professional to meet all complex control and engineering solutions
            in the industries, which includes PLC, SCADA and different Remote
            control solutions with RTU and latest telemetry systems.
          </p>
        </>
      ),
    },
    solarSystem: {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages29} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold">Solar System</h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            With operations rooted in Pakistan and the UAE, we ensure smooth
            coordination, on-time shipments, and responsive communication — so
            your sourcing experience is professional and stress-free from start
            to finish.
          </p>
          <p className="text-justify text-gray-800 ">
            In an industry crowded with choices, we stand out by offering proven
            technology, expert execution, and uncompromised quality ensuring our
            clients get the most efficient and dependable solar systems tailored
            to their needs.
          </p>
        </>
      ),
    },
    cableManagemantSystem: {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages29} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold">
            {" "}
            Cable Managemant System (Cable Trays and Ladder)
          </h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            <strong> ERCON GI and Hot-Dip Galvanized Cable Trays </strong> are
            engineered using premium-grade steel and advanced fabrication
            methods to ensure strength, reliability, and long service life. Each
            tray is protected through a high-quality galvanization
            process—either pre-galvanized or hot-dip—for superior corrosion
            resistance.
          </p>
          <p className="mt-4 text-justify text-gray-800 ">
            For enhanced durability and aesthetics, our cable trays are finished
            with <strong> high-performance powder coating,</strong> ensuring a
            smooth, resilient surface that withstands harsh environments and
            extends product lifespan.
          </p>
          <p className="mt-4 text-justify text-gray-800 ">
            Designed to meet stringent industry standards, ERCON cable trays
            provide safe, organized, and long-lasting cable management solutions
            across industrial, commercial, and infrastructure sectors.
          </p>
        </>
      ),
    },
    busway: {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages29} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold">Busway (Megaduct)</h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            At United East West, we bring you a premium range of leather jackets
            and apparel that combine fashion, functionality, and unmatched
            durability. Our leather goods are crafted to reflect timeless
            elegance and cater to a global audience seeking quality with a
            modern edge.
          </p>
          <p className="text-justify text-gray-800 ">
            From classic leather jackets to stylish outerwear and wearable
            fashion pieces, our apparel selection is designed to appeal to
            fashion retailers, distributors, and private brands looking for
            ready-to-export products that reflect premium craftsmanship and
            consistent quality.
          </p>
          <p className="text-justify text-gray-800 ">
            Whether you’re expanding a clothing line, stocking boutique
            collections, or entering new markets, our fashionable, long-lasting
            leather products are tailored to meet commercial demands with ease
            and reliability. Every piece we deliver is quality-checked,
            export-ready, and aligned with international standards
          </p>
          <p className="text-justify text-gray-800 ">
            With operations rooted in Pakistan and the UAE, we ensure smooth
            coordination, on-time shipments, and responsive communication — so
            your sourcing experience is professional and stress-free from start
            to finish.
          </p>
          <h1 className="font-semibold ">Why Choose United East West?</h1>
          <ul className="text-justify text-gray-800 list-disc  list-inside mt-4">
            <li>Elegant, export-quality leather jackets & apparel</li>
            <li>Reliable sourcing from established production hubs</li>
            <li>Global delivery support tailored for B2B buyers</li>
            <li>Commitment to quality, style, and long-term partnerships</li>
          </ul>
          <p className="text-justify text-gray-800 mt-4">
            With operations rooted in Pakistan and the UAE, we ensure smooth
            coordination, on-time shipments, and responsive communication — so
            your sourcing experience is professional and stress-free from start
            to finish.
          </p>
        </>
      ),
    },
    electricalCabinets: {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages31} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold">Meter Security Boxes</h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            At United East West, we are committed to supporting the healthcare
            industry by providing access to high-quality medical and healthcare
            tools sourced from Pakistan and the UAE. We serve the needs of
            hospitals, clinics, and medical suppliers across international
            markets with products that meet safety and performance standards.
          </p>
          <p className="text-justify text-gray-800 ">
            Our offerings include essential tools and devices required for
            everyday medical procedures, diagnostics, and patient care. We
            export all necessary surgical equipment to facilitate medical
            clinics and hospitals, ensuring they are equipped to deliver
            effective treatment and care.
          </p>
          <p className="text-justify text-gray-800 ">
            From general-purpose instruments to specialized healthcare tools,
            our products are carefully selected to ensure durability, precision,
            and hygiene — helping healthcare providers deliver quality outcomes
            with confidence.
          </p>
          <p className="text-justify text-gray-800 ">
            With United East West, you get a professional export partner that
            values reliability, compliance, and long-term relationships. Let us
            help you equip your healthcare operations with trusted medical
            solutions that make a difference.
          </p>
        </>
      ),
    },
    sheetMetalFabrication: {
      title: (
        <div className="flex items-center  border-b border-gray-600 pb-4 mix-blend-multiply">
          <img src={imaages32} alt="icon" className="w-20 " />
          <h1 className="text-lg font-semibold">LV Service Boxes</h1>
        </div>
      ),
      content: (
        <>
          <p className="mt-6 text-justify text-gray-800 ">
            At United East West, we bring you a premium range of leather jackets
            and apparel that combine fashion, functionality, and unmatched
            durability. Our leather goods are crafted to reflect timeless
            elegance and cater to a global audience seeking quality with a
            modern edge.
          </p>
          <p className="text-justify text-gray-800 ">
            From classic leather jackets to stylish outerwear and wearable
            fashion pieces, our apparel selection is designed to appeal to
            fashion retailers, distributors, and private brands looking for
            ready-to-export products that reflect premium craftsmanship and
            consistent quality.
          </p>
          <p className="text-justify text-gray-800 ">
            Whether you’re expanding a clothing line, stocking boutique
            collections, or entering new markets, our fashionable, long-lasting
            leather products are tailored to meet commercial demands with ease
            and reliability. Every piece we deliver is quality-checked,
            export-ready, and aligned with international standards.
          </p>
          <p className="text-justify text-gray-800 ">
            With operations rooted in Pakistan and the UAE, we ensure smooth
            coordination, on-time shipments, and responsive communication — so
            your sourcing experience is professional and stress-free from start
            to finish.
          </p>
          <h1 className="font-semibold ">Why Choose United East West?</h1>
          <ul className="text-justify text-gray-800 list-disc  list-inside mt-4">
            <li>Elegant, export-quality leather jackets & apparel</li>
            <li>Reliable sourcing from established production hubs</li>
            <li>Global delivery support tailored for B2B buyers</li>
            <li>Commitment to quality, style, and long-term partnerships</li>
          </ul>
          <p className="text-justify text-gray-800 mt-4">
            With operations rooted in Pakistan and the UAE, we ensure smooth
            coordination, on-time shipments, and responsive communication — so
            your sourcing experience is professional and stress-free from start
            to finish.
          </p>
        </>
      ),
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full bg-[#F1F2F3] md:p-10 p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:w-[80%] mx-auto space-y-6 "
        >
          <h1 className="text-4xl font-bold text-center">Our About</h1>
          <p className="text-gray-800 text-justify">
            Established in 2012, ERCON Industries (Pvt.) Limited is an
            associated company of the ERCON Group located in UAE and KSA, an
            industry leader in power distribution and switchgear solutions since
            2002. As part of the Group’s strategic expansion in Pakistan, ERCON
            Industries specializes in the manufacturing of LV/MV switchgear,
            power distribution systems, and sheet metal fabrication.
          </p>
          <p className="text-gray-800 text-justify">
            With a modern production facility, advanced machinery, and a skilled
            technical team, the company delivers high-quality,
            standards-compliant solutions to public and private sector clients.
            Backed by the strength and legacy of the ERCON Group, ERCON
            Industries continues to contribute to national infrastructure and
            industrial growth.
          </p>
        </motion.div>

        <div className="w-full my-10 flex flex-col md:flex-row justify-center gap-6">
          <div className="md:w-xs w-full flex flex-col p-4">
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab("typeTestedEnclosures")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2 "
            >
              <img
                src={imaages29}
                alt="icon"
                className="size-16 object-cover"
              />
              MV Type Tested switchgear
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab("MV/LVSwitchgear")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2"
            >
              <img
                src={imaages30}
                alt="icon"
                className="size-16 object-cover"
              />
              Medium voltage switchgear
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab("automation")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2"
            >
              <img
                src={imaages33}
                alt="icon"
                className="size-16 object-cover"
              />
              Automation
            </motion.button>
            <motion.button  
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab("solarSystem")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2"
            >
              <img
                src={imaages34}
                alt="icon"
                className="size-16 object-cover"
              />
              Solar Energy System
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setActiveTab("cableManagemantSystem")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2"
            >
              <img
                src={imaages35}
                alt="icon"
                className="size-16 object-cover"
              />
              Cable Managemant System <br /> (Cable Trays and Ladder)
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab("busway")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2"
            >
              <img
                src={imaages36}
                alt="icon"
                className="size-16 object-cover"
              />
              Busway (Megaduct)
            </motion.button>
             <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab("electricalCabinets")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2"
            >
              <img
                src={imaages31}
                alt="icon"
                className="size-16 object-cover"
              />
             Electrical Cabinets
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab("sheetMetalFabrication")}
              className="flex items-center justify-start mix-blend-multiply font-semibold text-gray-600 hover:text-black focus:text-black cursor-pointer border-b-2 border-gray-400 py-2"
            >
              <img
                src={imaages32}
                alt="icon"
                className="size-16 object-cover"
              />
              Sheet Metal Fabrication
            </motion.button>
          </div>

          <div className="bg-white rounded-xl w-full md:w-[50%] p-6  lg:pr-16 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h2>{tabContent[activeTab].title}</h2>
                <p>{tabContent[activeTab].content}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
