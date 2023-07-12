import { useState } from "react";
import Button from "../../Common/Button";
import Textarea from "../../Form/Textarea";
import { InputField } from "../../Form/InputField";

const WriteInquiry = () => {
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
      {!write ? (
        <div>
          <ol className="list-decimal mx-5">
            <li>
              <h6>Is it available for middle students ?</h6>
            </li>
          </ol>
          <p>Jire Middle School &nbsp; <span className="font-bold">Answered</span></p>
          <div className="bg-[#f3f3f3] p-3 sm:w-">
            <h6>Inquiry Content</h6>
            <div className="mb-4">
              <p className="mb-1 text-base">Is it Strong ?</p>
              <p className="mb-1 text-base">Then, middle school students available?</p>
            </div>
            <div className="border border-white"></div>
            <h6 className="pt-3">Answer</h6>
            <p className="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex justify-end my-4">
            <Button onClick={handleInquiry}>Write Inquiry</Button>
            <Button className="btn-white">More</Button>
          </div>
        </div>
      ) : (
        <div>
          {/*This is Product Inquiry code */}
          <h3 className="text-center text-xl md:text-2xl">Ask Product Inquiry</h3>
          <form>
              <div className="md:flex">
              <h3 className="mx-auto mb-0 md:pl-14 p-3 text-xl md:text-2xl">Title: </h3>
              <div className="w-full md:p-3 pl-4 md:pl-10">
              <InputField type="text" placeholder={""} className="w-full"/>
              </div>
              </div>
              <div className="md:flex">
              <h3 className="p-3 mb-0 text-xl md:text-2xl">Content: </h3>
              <div className="w-full md:p-3 pl-4 md:pl-10">
                    <Textarea placeholder={""} name={""}/>
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
