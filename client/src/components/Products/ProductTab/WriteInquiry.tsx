import { useState } from "react";
import Button from "../../Common/Button";
import Textarea from "../../Form/Textarea";
import { InputField } from "../../Form/InputField";

const WriteInquiry = () => {
  const [write, setWrite] = useState(false);
  const [,setProduct] = useState(true);
  
  const handleInquiry = () => {
    setWrite(true);
    setProduct(false);
  };
  const onclickWrite = () => {
    setWrite(false);
    setProduct(true);
  }

  return (
    <div className="bg-white p-5 mx-auto">
      {!write ? (
        <div>
          <ol className="list-decimal mx-5">
            <li>
              <h6>Is it available for middle students ?</h6>
            </li>
          </ol>
          <p>Jire Middle School</p>
          <h6>Answered</h6>
          <div className="bg-[#f3f3f3] p-3 h-">
            <h6>Inquiry Content</h6>
            <p>Is it Strong ?</p>
            <p>Then, middle school students available?</p>
            <div className="border"></div>
            <p>Answer</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
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
          <h3 className="text-center">Ask Product Inquiry</h3>
          <form>
            <table className="mx-auto w-[800px]">
              <tr>
                <td>
                  <span>Title:</span>
                </td>
                <td>
                  <div className="w-[85%]">
                    <InputField type="text" placeholder={""} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Content:</span>
                </td>
                <td>
                  <div className="w-[85%]">
                    <Textarea placeholder={""} name={""} />
                  </div>
                </td>
              </tr>
            </table>
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
