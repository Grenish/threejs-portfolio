import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="w-full flex justify-center h-10 items-center">
      <p className="text-secondary text-[12px]">
        <span>Grenish</span> @ <span>2023</span> | <span>Made with passion</span>
      </p>
    </div>
  );
};

export default SectionWrapper(Footer, "");
