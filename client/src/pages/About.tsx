import QuestionsSection from "../components/About/QuestionsSection";
import WhyChooseUs from "../components/About/WhyChooseUs";
import { questionCategory, statsData, whyChooseUsData } from "../components/About/content";
import TrendingBlog from "../components/Blog/TrendingBlog";
import { blogDetails } from "../components/Blog/constant";
import CoreFeatureCard from "../components/Cards/CoreFeatureCard";
import { coreFeatureData } from "../components/Cards/CoreFeatureCard/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Stats from "../components/About/Stats";
import { offerSectionData } from "../components/Home/constants";
import OfferBanner from "../components/Home/OfferBanner";

export default function About() {
  return (
    <div>
      <BreadcrumbBanner title={"About"} />
      <OfferBanner {...offerSectionData} />
      <CoreFeatureCard data={coreFeatureData} />
      <Stats data={statsData}/>
      <QuestionsSection faqCategory={questionCategory}></QuestionsSection>
      <WhyChooseUs data={whyChooseUsData} />
      <TrendingBlog blogDetails={blogDetails} />
    </div>
  );
}
