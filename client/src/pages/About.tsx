import ClientsFeedBack from "../components/About/ClientsFeedBack";
import QuestionsSection from "../components/About/QuestionsSection";
import { questionCategory, testimonialsData } from "../components/About/content";
import CoreFeatureCard from "../components/Cards/CoreFeatureCard";
import { coreFeatureData } from "../components/Cards/CoreFeatureCard/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";

export default function About() {
  return (
    <div>
      <BreadcrumbBanner title={"About"} />
      <CoreFeatureCard data={coreFeatureData} />
      <ClientsFeedBack testimonialsData={testimonialsData} />
      <QuestionsSection faqCategory={questionCategory}></QuestionsSection>
    </div>
  );
}
