// import Button from "../../Common/Button";

import Button from "../../Common/Button";
import { InputField } from "../../Form/InputField";
import Textarea from "../../Form/Textarea";

function ProductInquiry() {
  return (
    <div>
        <h3 className="text-center">Ask Product Inquiry</h3>
        <form>
            <table className="mx-auto w-[800px]">
                <tr>
                    <td>
                    <span>Title:</span>
                    </td>
                    <td>
                        <div className="w-[85%]">
                    <InputField type="text" placeholder={""}/>
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
        <Button variant="danger">Cancel</Button>
        </div>
    </div>
  )
}

export default ProductInquiry;