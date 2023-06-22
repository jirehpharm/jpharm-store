import Button from "../Common/Button";
import { InputField } from "../Form/InputField";

export default function AccountDetails() {
  return (
    <form>
      <div className="grid md:grid-cols-2 gap-8 mx-3">
        <label>
          First Name:
          <InputField placeholder={""} className="mt-2"/>
        </label>
        <label>
          Last Name:
          <InputField placeholder={""} className="mt-2"/>
        </label>
        <label>
          Display Name:
          <InputField placeholder={"Ethan"} className="mt-2"/>
        </label>
        <label>
          Email:
          <InputField placeholder={"example@example.com"} className="mt-2"/>
        </label>
      </div>
      <div className="mt-8 border border-borderColor p-10">
        <h3 className="font-normal">PASSWORD CHANGE</h3>
        <label className="block my-6">

          Current password (leave blank to leave unchanged):
          <InputField placeholder={""} className="mt-2"/>
        </label>
        <label className="block my-6">
          New password (leave blank to leave unchanged):
          <InputField placeholder={""} className="mt-2"/>
        </label>
        <label className="block my-6">
          Confirm new password:
          <InputField placeholder={"Ethan"} className="mt-2"/>
        </label>
      </div>
      <Button className="mt-8">SAVE CHANGES</Button>
    </form>
  );
}
