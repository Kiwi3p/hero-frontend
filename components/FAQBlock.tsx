import Image from "next/image";
import faq from "../data/faq.json";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from 'react-html-parser';

const FAQBlock = () => (
  <>
    {faq.map((item, index) => {
      return (
        <div key={index} className="mx-12">
          <h2 className="telex text-2xl my-4">
            {/* <span className="purple telex ">Question: </span> */}
            {ReactHtmlParser(item.QUESTION)}
          </h2>
          
          <h2 className="dongle two-rem">
            <span className="purple">Answer: </span>
            {ReactHtmlParser(item.ANSWER)}
          </h2>
          <br/>
        </div>
      );
    })}
  </>
);

export default FAQBlock;
