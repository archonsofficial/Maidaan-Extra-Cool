// import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { GoArrowRight } from "react-icons/go";
import { faqs } from "@/config";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-12 ">
      <div className="flex flex-col items-center justify-center mb-5 text-white">
        <div className="bg-[#ffffff1a] text-[#cef23f] font-bold text-[13px] text-center px-5 py-2 rounded-full opacity-100">
          FREQUENTLY ASKED QUESTIONS
        </div>
        {/* <Chip className="bg-[#ffffff1a] text-[#cef23f] font-bold text-[13px] text-center px-5 py-2 rounded-full opacity-100">
          FREQUENTLY ASKED QUESTIONS
        </Chip> */}
        <p className="font-[Unbounded] text-[40px] font-normal leading-[49.6px] text-center">
          Have Questions?
        </p>
        <p className="text-[40px] font-light leading-[44.77px] text-center mb-6">
          We Have Answers!
        </p>
      </div>
      <div className="faq1 w-[85%] md:w-[55%] bg-[#ffffff1a] text-white rounded-2xl p-5">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3 border-b border-gray-500">
            <button
              className="flex justify-between items-center w-full text-white py-3 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              {/* <GoArrowDown
                className={`w-5 h-5 transition-transform transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              /> */}
              <div className={`w-5 h-5 border border-black rounded-md  bg-[#CEF23F] transition-transform transform ${
                  openIndex === index ? "rotate-90" : "rotate-0"
                }`}><GoArrowRight className=" text-black"/></div>
            </button>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 p-3" : "max-h-0"
              }`}
            >
              <p className="font-thin">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="faq1 ">
        <Accordion>
          {faqs.map((faq,index) => {
            return (
              <AccordionItem
              className="faqBox"
              aria-label={`Accordion ${index}`}
              title={
                <span className="text-white">
                  {faq.question}
                </span>
              }
              >
                <p className="font-thin">{faq.answer}</p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div> */}
    </div>
  );
}
