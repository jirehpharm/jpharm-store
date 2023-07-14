import Button from "../../Common/Button";
import CKEditors from "../../Common/CKEditors";

export default function InquiryTable() {
    return (
        <div>
            <table className="flex lg:m-auto w-[500px] lg:w-[900px] ml-4 md:ml-[50px] md:w-[500px]">
                <thead>
                    <tr className="border border-slate-400">
                        <td className="bg-[#D6D6D6] md:w-[250px] h-[50px] text-[15px]">
                            Classification</td>
                        <td className="border border-slate-400">
                            <select className="m-2">
                                <option>Choose</option>
                                <option>Order</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="border border-slate-400">
                        <td className="bg-[#D6D6D6] text-[15px]">Email</td>
                        <td className="sm:flex border border-slate-400">
                            <div className="w-[240px]">
                                <input type="email" className="m-2" />
                            </div>
                            <input type="checkbox" value="mail" className="my-auto" /><span className="text-[15px] my-auto mx-2">Send Answer to Email</span>
                        </td>
                    </tr>
                    <tr className="border border-slate-400">
                        <td className="bg-[#D6D6D6] text-[15px]">Title</td>
                        <td className="border border-slate-400">
                            <div>
                                <input type="text" className="m-2" placeholder={""} />
                            </div>
                        </td>
                    </tr>
                    <tr className="border border-slate-400">
                        <td className="bg-[#D6D6D6] text-[15px]">Content</td>
                        <td className="border border-slate-400">
                            <CKEditors />
                        </td>
                    </tr>
                    <tr className="border border-slate-400">
                        <td className="bg-[#D6D6D6] text-[15px]">File</td>
                        <td className="border border-slate-400">
                            <input type="file" className="m-2 w-[105px]" />
                            <button className="bg-secondary rounded p-1">Add File</button>
                        </td>
                    </tr>
                </thead>
            </table>
            <div className="text-center my-10">
                <Button>Submit</Button>
                <Button variant="danger">Cancel</Button>
            </div>
        </div>
    )
}
