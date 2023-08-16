import { useRef, useContext } from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { AppContext } from "../../App";

const Contact = () => {
  const { refs } = useContext(AppContext);
  const textArea = useRef();

  const autoExpand = () => {
    const scrollHeight = textArea.current.scrollHeight;
    if (scrollHeight >= 45) textArea.current.style.height = `${scrollHeight}px`;
  };
  return (
    <section ref={refs.contact} className="mb-5 px-8 md:px-0">
      <h2>Contact</h2>
      <div className="mt-5 md:px-8 lg:flex justify-evenly lg:space-x-3 ">
        <form>
          <h3 className="text-xl ">
            I'm open to discussing product ideas and partnership
          </h3>
          <div className=" flex flex-wrap gap-x-4 justify-between ">
            <div className="my-[10px] flex-grow">
              <label htmlFor="name" className="required">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Marcel Yu"
                required
              />
            </div>
            <div className="my-[10px] flex-grow ">
              <label htmlFor="email" className="required">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="marcelyu247@yahoo.com"
                required
              />
            </div>
          </div>
          <div className="my-[10px] ">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Partnership"
            />
          </div>
          <div className="my-[10px] pt-[10px]">
            <label htmlFor="message">Message</label>
            <textarea
              ref={textArea}
              id="message"
              className="textarea"
              name="message"
              onChange={autoExpand}
            />
          </div>
          <div className="w-full text-right pr-2 ">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>

        <div className="mt-10 md:mt-5 lg:mt-0">
          <a
            href="tel:+2348083931561"
            className="flex items-center w-fit text-white-200 hover:text-purple-400 mb-4"
          >
            <span className=" border border-white-400 mr-4 p-2 bg-purple-400 text-white-400">
              <PhoneOutlinedIcon />
            </span>
            <span>
              <h3 className="mb-0 text-base">Phone</h3>
              <p>+234 808 393 1561</p>
            </span>
          </a>

          <a
            href="mailto:queenumesi01@gmail.com"
            className="flex items-center w-fit text-white-200 hover:text-purple-400 mb-4"
          >
            <span className="border border-white-400 mr-4 p-2 bg-purple-400 text-white-400">
              <EmailOutlinedIcon />
            </span>
            <span>
              <h3 className="mb-0 text-base">Email</h3>
              <p>queenumesi01@gmail.com</p>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
