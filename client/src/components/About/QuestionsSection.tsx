import Faq, { IFaqDataPorps } from "../Faq";

export default function QuestionsSection({ faqCategory }: { faqCategory: IFaqDataPorps[] }) {
  return (
    <div className="sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto my-20">
      <h1 className="mb-10 text-center">Some Questions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Faq faqCategory={faqCategory} />
        <div className="flex justify-center">
          <img src="/placeholder/about-page-faq.jpg" alt="" className="" />
        </div>
      </div>
    </div>
  );
}
