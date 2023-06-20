import ClientsFeedBack from "../components/About/ClientsFeedBack";
import QuestionsSection from "../components/About/QuestionsSection";
import WhyChooseUs from "../components/About/WhyChooseUs";
import {
  questionCategory,
  whyChooseUsData,
  testimonialsData,
  statsData,
  partnersData,
} from "../components/About/content";
import TrendingBlog from "../components/Blog/TrendingBlog";
import { blogDetails } from "../components/Blog/constant";
import CoreFeatureCard from "../components/Cards/CoreFeatureCard";
import { coreFeatureData } from "../components/Cards/CoreFeatureCard/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Stats from "../components/About/Stats";
import { offerSectionData } from "../components/Home/constants";
import OfferBanner from "../components/Home/OfferBanner";
import Partners from "../components/About/Partners";

export default function About() {
  return (
    <div>
      <BreadcrumbBanner title={"About"} />
      <Partners partnersData={partnersData} />
      <OfferBanner {...offerSectionData} />
      <CoreFeatureCard data={coreFeatureData} />
      <Stats data={statsData} />
      <QuestionsSection faqCategory={questionCategory}></QuestionsSection>
      <ClientsFeedBack testimonialsData={testimonialsData} />
      <WhyChooseUs data={whyChooseUsData} />
      <TrendingBlog blogDetails={blogDetails} />
    </div>
  );
}
