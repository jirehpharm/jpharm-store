import { BsHouseHeart } from "react-icons/bs"
import { FaDumbbell, FaMountain } from "react-icons/fa"
import { TbWashGentle } from "react-icons/tb"
export default function Banner() {
  return (
    <section className="bg-[url(/placeholder/1920x623.png)] p-20">
      {/* <img src="/placeholder/1920x623.png" /> */}
      <div className="max-w-6xl mx-auto grid grid-cols-2">
        <div>
          <div>
            <h6>N95 Facial Covering Mask</h6>
            <h1>Grade A Safety Masks
              For Sale. Haurry Up!</h1>
            <p className="my-3">Over 39,000 people work for us in more than 70 countries all over the
              This breadth of global coverage, combined with specialist services</p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <ul>
                <li className="pb-3 flex items-center">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <BsHouseHeart className="text-white" size={20} />
                  </div>
                  Activated Carbon
                </li>
                <li className="pb-3 flex items-center">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <FaMountain className="text-white" size={20} />
                  </div>
                  Breathing Valve
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-3 flex items-center">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <FaDumbbell className="text-white" size={20} />
                  </div>
                  6 Layer Filteration
                </li>
                <li className="pb-3 flex items-center">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <TbWashGentle className="text-white" size={20} />
                  </div>
                  Rewashes & Reusable
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="#">View Products</a>
          </div>
        </div>

      </div>
    </section>
  )
}
