import CoreFeatureCard from "../components/Cards/CoreFeatureCard";
import { coreFeatureData } from "../components/Cards/CoreFeatureCard/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";

export default function About() {
  return (
    <div>
      <BreadcrumbBanner title={"About"} />
      <CoreFeatureCard data={coreFeatureData}/>
    </div>
  )
}
