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
                    <InputField type="text" placeholder={""}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span>Content:</span>
                    </td>
                    <td>
                    <Textarea placeholder={""} name={""} />
                    </td>
                </tr>
            </table>
        </form>
        <div className="flex justify-end items center my-4">
        <Button>Done</Button>
        <Button>Cancel</Button>
        </div>
    </div>
  )
}

export default ProductInquiry;