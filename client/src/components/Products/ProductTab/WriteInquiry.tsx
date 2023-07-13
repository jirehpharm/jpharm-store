import { useState } from "react";
import Button from "../../Common/Button";
import Textarea from "../../Form/Textarea";
import { InputField } from "../../Form/InputField";
import { IInquiryProps } from "./types";

interface IInquiry {
  data: IInquiryProps[];
}

const WriteInquiry = (props: IInquiry) => {
  const { data } = props;
  const [write, setWrite] = useState(false);
  const [product, setProduct] = useState(true);

  const handleInquiry = () => {
    setWrite(true);
    setProduct(false);
  };

  const onclickWrite = () => {
    setWrite(false);
    setProduct(true);
  }

  return (
    <div className="bg-white md:p-[3px] mx-auto">
      {!write || product ? (
        <div>
          <ol className="list-decimal mx-5 text-base">
            {data?.map((item, idx) => (
              <div key={idx} className="mb-10">
                <li>
                  <h6 className="text-base font-normal mb-0">{item.question}</h6>
                </li>
                <p className="text-xs my-2">Jire Middle School &nbsp; <span className="font-normal text-xs">Answered</span></p>
                <div className="bg-[#f3f3f3] p-3 sm:w-">
                  <h6 className="font-normal text-base">Inquiry Content</h6>
                  <div className="mb-4">
                    <p className="mb-1 text-base font-normal">{item.content}</p>
                  </div>
                  <div className="border border-white"></div>
                  <h6 className="pt-3 text-base font-normal">Answer</h6>
                  <p className="font-normal text-base">{item.answer}</p>
                </div>
              </div>
            ))}
          </ol>
          <div className="flex justify-end my-4">
            <Button className="text-base font-normal" onClick={handleInquiry}>Write Inquiry</Button>
            <Button className="btn-white text-lg font-normal">More</Button>
          </div>
        </div>
      ) : (
        <div>
          {/*This is Product Inquiry code */}
          <h3 className="text-center text-base md:text-2xl font-normal leading-8">Ask Product Inquiry</h3>
          <form>
            <div className="md:flex">
              <h3 className="mx-auto mb-0 md:pl-14 p-3 text-base md:text-2xl font-normal">Title: </h3>
              <div className="w-full md:p-3 pl-4 md:pl-10">
                <InputField type="text" placeholder={""} className="w-full" />
              </div>
            </div>
            <div className="md:flex">
              <h3 className="p-3 mb-0 text-base md:text-2xl font-normal">Content: </h3>
              <div className="w-full md:p-3 pl-4 md:pl-10">
                <Textarea placeholder={""} name={""} />
              </div>
            </div>
          </form>
          <div className="flex justify-end my-4">
            <Button>Done</Button>
            <Button variant="danger" onClick={onclickWrite}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteInquiry;