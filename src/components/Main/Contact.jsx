import { useContext } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { AppContext } from "../../App";

const Contact = () => {
  const { refs } = useContext(AppContext);

  return (
    <section
      ref={refs.contact}
      className=" contact my-5 px-8 md:py-4 md:px-40 lg:px-48"
    >
      <h3>
        Send a message <span className="wave">👋🏾</span>
      </h3>
      <div className="py-5 flex gap-y-3 gap-x-10 flex-wrap">
        <a
          href="tel:+2348083931561"
          className="flex items-center w-fit text-white-200 hover:text-purple-400"
        >
          <span className="btn mr-4 p-2 text-white-400">
            <PhoneIcon />
          </span>
          <span>
            <h3 className="mb-0 text-base">Phone</h3>
            <p>+234 808 393 1561</p>
          </span>
        </a>
        <a
          href="mailto:queenumesi01@gmail.com"
          className="flex items-center w-fit text-white-200 hover:text-purple-400"
        >
          <span className="btn mr-4 p-2 text-white-400">
            <EmailIcon />
          </span>
          <span>
            <h3 className="mb-0 text-base">Email</h3>
            <p>queenumesi01@gmail.com</p>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
