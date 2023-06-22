import * as Dialog from "@radix-ui/react-dialog";
import { HiOutlineXMark } from "react-icons/hi2";

const Modal = ({
  ModalTrigger,
  ModalTitle,
  ModalContent,
}: {
  ModalTrigger: React.ReactElement;
  ModalTitle: React.ReactElement;
  ModalContent: React.ReactElement;
}) => {
  console.log(ModalTrigger);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <a>{ModalTrigger}</a>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 z-[40] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-w-[100vw] md:max-h-[100vh] w-[90vw] md:max-w-[40vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[40] ">
          <Dialog.Title className="text-mauve12 m-0 text-lg font-medium ">
            {ModalTitle}
          </Dialog.Title>
          {ModalContent}
          <Dialog.Close asChild>
            <button
              className="text-black font-bold text-lg hover:text-red-500 absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center"
              aria-label="close"
            >
              <HiOutlineXMark />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
