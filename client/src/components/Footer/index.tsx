import SocialLinks from "../SocialLinks";

const navigation = [
  {
    name: "Company",
    list: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "All Products", href: "#" },
      { name: "Location Map", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Conntact Us", href: "#" },
    ]
  },
  {
    name: "Services",
    list: [
      { name: "Order tracking", href: "#" },
      { name: "Wish List", href: "#" },
      { name: "Login", href: "#" },
      { name: "My Account", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Promotional Offers", href: "#" },
    ]
  },
  {
    name: "Custome Care",
    list: [
      { name: "Login", href: "#" },
      { name: "My account", href: "#" },
      { name: "Wish List", href: "#" },
      { name: "Order tracking", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact us", href: "#" },
    ]
  }
]

export default function Footer() {
  return (
    <div>
      <footer className="ltn__footer-area bg-primary text-white pt-28">
        <div className="grid grid-cols-2 md:grid-cols-3   lg:grid-cols-7 gap-4 p-9">

          <div className="col-span-2">
            <img src="/logos/logo-2.png" />
            <p className=" text-white py-3 m-0">Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
            <div>
              <ul>
                <li>
                  <p className=" text-white">Brooklyn, New York, United States</p>
                </li>
                <li>
                  <p><a className=" text-white" href="tel:+0123-456789">+0123-456789</a></p>
                </li>
                <li>
                  <p><a className=" text-white" href="mailto:example@example.com">example@example.com</a></p>
                </li>
              </ul>
            </div>
            <SocialLinks color="white" />
          </div>

          {navigation.map((category: any, index: number) => (
            <div key={index} ><h4 className="text-white">{category.name}</h4>
              <ul className="mt-6">
                {category.list.map((items: any, index: number) => (
                  <li key={index} className="mb-6">
                    <a href={items.href} className=" text-white">{items.name}</a>
                  </li>
                ))}
              </ul >
            </div>
          ))}

          <div className="col-span-2">
            <div>
              <h4 className=" text-white">Newsletter</h4>
              <p className=" text-white">Subscribe to our weekly Newsletter and receive updates via email.</p>
              <div className="pb-4">
                <form action="#">
                  <input type="email" name="email" placeholder="Email*" className="bg-white p-3" />
                  <button type="submit" className="bg-secondary p-3">Submit</button>
                </form>
              </div>
              <h5 className="text-white">We Accept</h5>
              <img src="/payment.png" alt="Payment Image" />
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
