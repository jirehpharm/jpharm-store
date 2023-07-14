import Button from "../../Common/Button";
import CKEditors from "../../Common/CKEditors";

export default function InquiryTable() {
    return (
        <div className="m-10 sm:m-[10]">
            <div className="grid grid-cols-3 mx-auto max-w-3xl ">
                <p className="border h-full bg-[#d6d6d6] p-2 flex items-center text-[14px]">
                    Classification
                </p>
                <div className="col-span-2 border ">
                    <select className="m-2 text-[14px] border-borderColor">
                        <option>Choose</option>
                        <option>Order</option>
                    </select>
                </div>
                <p className="border h-full bg-[#d6d6d6] p-2 flex items-center text-[14px]">
                    Email
                </p>
                <div className="md:flex space-x-2 col-span-2 border ">
                    <div className="w-[240px] lg:flex lg:space-x-5 items-center">
                        <input type="email" className="m-2 w-[full] border border-borderColor" />
                    </div>
                    <input type="checkbox" value="mail" className="my-auto" />
                    <span className="my-auto mx-2 text-[14px]">Send Answer to Email</span>
                </div>
                <p className="border h-full bg-[#d6d6d6] p-2 flex items-center text-[14px]">
                    Title
                </p>
                <div className="col-span-2 border">
                    <input type="text" className="m-2 border-borderColor" placeholder={""} />
                </div>
                <p className="border h-full bg-[#d6d6d6] p-2 flex items-center text-[14px]">
                    Content
                </p>
                <div className="col-span-2 border p-2">
                    <CKEditors />
                </div>
                <p className="border h-full bg-[#d6d6d6] p-2 flex items-center text-[14px]">
                    File
                </p>
                <div className="border col-span-2 space-x-2 pb-3 p-2 flex items-center">
                    <input type="file" className=" text-[14px] border-borderColor" />
                    <button className="bg-secondary rounded p-1 text-[14px]">Add File</button>
                </div>
            </div>
            <div className="text-center my-10">
                <Button>Submit</Button>
                <Button variant="danger">Cancel</Button>
            </div>
        </div >
    )
}
