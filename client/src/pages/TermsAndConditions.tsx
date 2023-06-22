interface Info {
  id: string;
  content: string;
}
const List = (props: Info) => {
  const { id, content } = props;

  return (
    <li className="flex space-x-2">
      <p className="text-xs xl:text-sm text-light mb-0">{id}</p>
      <p
        className="text-xs xl:text-sm text-light mb-0"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </li>
  );
};

export default function TermsAndCondition() {
  return (
    <div className="mx-auto max-w-6xl my-8">
      <div className="border-b-2 text-center">
        <h4 className="pl-3 text-xl sm:text-3xl">Terms and Conditions</h4>
      </div>
      <div className="p-5 bg-[#F8F8F8]">
        <div className=" border-2 p-6 bg-white">
          <div>
            <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
              Article 1 (Purpose)
            </h6>
            <br />
            <p className="text-xs xl:text-sm text-light">
              These terms and conditions govern the Internet-related services (
              <span>
                hereinafter referred to as “services”) provided by the Irefarm
              </span>
              Cyber
              <span>​​Mall (hereinafter referred to as the “mall”) </span>
              <span>operated by the company (e-commerce operator). </span>
              <span>
                The purpose is to stipulate the rights, obligations and
                responsibilities of the cyber mall and users in using the
                website.
              </span>
            </p>
            <p className="text-xs xl:text-sm text-light">
              ※「E-commerce transactions using PC communication, wireless, etc.,
              are subject to these Terms and Conditions unless they are contrary
              to their nature.」
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 2 (Definition)
              </h6>
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`“Mall” means that Irefarm Co., Ltd. may trade goods and
                    services using information and communication facilities such
                    as computers to provide goods or services (hereinafter
                    referred to as “goods, etc.”) to users. It refers to a
                    virtual business place set up so that it can be used, and is
                    also used as a business operator operating a cyber mall.`}
                />
                <List
                  id={"②"}
                  content={`“User” refers to members and non-members who access the
                    “mall” and receive the services provided by the “mall” in
                    accordance with these terms and conditions.`}
                />
                <List
                  id={"③"}
                  content={`'Member' refers to a person who has registered as a member
                    of the "Mall" and can continue to use the services provided
                    by the "Mall".`}
                />
                <List
                  id={"④"}
                  content={`'Non-member' refers to a person who uses the services
                    provided by the "mall" without subscribing to membership.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 3 (Explanation, explanation and revision of terms and
                conditions)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`“Mall” refers to the contents of
              these terms and conditions, trade name and representative name,
              business address (including the address where consumer complaints
              can be handled), and phone number. Facsimile transmission number,
              e-mail address, business registration number, mail-order business
              report number, personal information manager, etc. are posted on
              the initial service screen (front) of the 00 cybermall so that
              users can easily recognize them. However, the contents of the
              terms and conditions can be viewed by the user through the
              connection screen`}
                />
                <List
                  id={"②"}
                  content={`“The mall provides a separate connection
              screen or pop-up screen so that users can understand important
              contents such as subscription withdrawal, delivery responsibility,
              refund conditions, etc. should be saved.`}
                />
                <List
                  id={"③"}
                  content={`“Mall” refers to the
              「Act on Consumer Protection in Electronic Commerce」,
              「Regulation of Terms and Conditions Act」, 「Framework Act on
              Electronic Documents and Electronic Commerce」, 「Electronic
              Financial Transaction Act」, 「Electronic Signature Act」, 「Using
              Information and Communication Network」 These Terms and Conditions
              may be amended to the extent that they do not violate related laws
              such as the Promotion and Information Protection Act, the
              「Door-to-Door Sales Act」, and the 「Framework Act on
              Consumers」.`}
                />
                <List
                  id={"④"}
                  content={`If the "mall" revises the terms and conditions, the
              date of application and the reason for the revision shall be
              specified and announced along with the current terms and
              conditions on the initial screen of the mall from 7 days before
              the effective date to the day before the effective date. However,
              if the contents of the agreement are changed unfavorably to the
              user, it will be notified with a grace period of at least 30 days
              in advance. In this case, the "mall" clearly compares the content
              before and after the revision and displays it so that users can
              easily understand.`}
                />
                <List
                  id={"⑤"}
                  content={`If the "mall" revises the terms and
              conditions, the revised terms and conditions apply only to the
              contracts concluded after the effective date, and the terms and
              conditions before the revision are applied to the contracts
              already concluded before that. However, if a user who has already
              entered into a contract transmits the intention to be subject to
              the provisions of the amended terms and conditions to the "mall"
              within the notice period of the amended terms and conditions under
              paragraph 3 and receives the consent of the "mall", the provisions
              of the amended terms and conditions apply. It's possible.`}
                />
                <List
                  id={"⑥"}
                  content={`Matters not specified in these Terms and Conditions and
              interpretation of these Terms and Conditions shall be governed by
              the Consumer Protection Act in Electronic Commerce, etc., the Act
              on Regulation of Terms and Conditions, the Consumer Protection
              Guidelines in Electronic Commerce, etc. set by the Fair Trade
              Commission, and related laws or commercial practices. follow`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 4 (Provision and Change of Service)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`“Mall” performs the following tasks. 
                  <ul>
                    <li>1. Provision of information on goods or services and conclusion of a purchase contract</li>
                    <li>2. Delivery of goods or services for which a purchase contract has been concluded</li>
                    <li>3. Other tasks designated by the "Mall"</li>
                  </ul>`}
                />
                <List
                  id={"②"}
                  content={`"Mall" is out of stock of goods or
              services or changes in technical specifications etc., the contents
              of goods or services to be provided may be changed by contracts to
              be concluded in the future. In this case, the contents of the
              changed goods or services and the delivery date are specified and
              immediately notified to the place where the contents of the
              current goods or services are posted.`}
                />
                <List
                  id={"③"}
                  content={`If the contents of the
              service contracted with the user to be provided by the "mall" are
              changed for reasons such as out of stock or change in technical
              specifications, the reason is immediately notified to the address
              where the user can be notified.`}
                />
                <List
                  id={"④"}
                  content={`In the case of the preceding
              paragraph, the "Mall" compensates for damages suffered by the
              user. However, this is not the case if the "Mall" proves that
              there is no intention or negligence.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 5 (Suspension of Service)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`"Mall" may temporarily suspend the provision of service in the
              event of maintenance, replacement, breakdown, or loss of
              communication of information and communication facilities such as
              computers.`}
                />
                <List
                  id={"②"}
                  content={`"Mall" compensates for damages suffered by users or
              third parties due to temporary suspension of service provision due
              to the reason in Paragraph 1. However, this is not the case if the
              "Mall" proves that there is no intention or negligence.`}
                />
                <List
                  id={"③"}
                  content={`In the
              event that the service cannot be provided due to the conversion of
              business items, abandonment of business, integration between
              companies, etc., the "mall" notifies the user in the manner set
              forth in Article 8 and the consumer according to the conditions
              originally suggested by the "mall". reward to However, if the
              "mall" does not notify the compensation standards, etc., the
              mileage or reserves of users are paid to the user in kind or cash
              equivalent to the currency value used in the "mall".`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 6 (Membership Registration)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`A user applies for membership registration by expressing his/her
              intention to agree to these Terms and Conditions after filling out
              membership information according to the registration form set by
              the “Mall”.`}
                />
                <List
                  id={"②"}
                  content={`"Mall" registers as a member of the users who have
              applied for membership as in Paragraph 1, unless they fall under
              any of the following subparagraphs.  
              <ul>
              <li>1. If the applicant for
              membership has previously lost membership in accordance with
              Article 7 (3) of these Terms and Conditions, however, as a person
              who has passed 3 years since the loss of membership in accordance
              with Article 7 (3), consent to re-registration as a member of the
              “Mall” Exceptions are made in cases where</li>
              <li>2. If there is
              falsehood, omission, or typo in the registration details</li>
              <li>3. If it is judged that registering as a member is significantly
              impeded by the technology of the "mall"</li>
              </ul>
              `}
                />
                <List
                  id={"③"}
                  content={`The time of
              establishment of the membership contract is determined by the
              consent of the "mall" to the member to the point at which it is
              reached.`}
                />
                <List
                  id={"④"}
                  content={`If there is a change in the information registered at
              the time of membership registration, the member must notify the
              change within a considerable period of time by modifying member
              information to the "mall".`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 7 (Withdrawal of Membership and Loss of Qualification,
                etc.)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`Members may request withdrawal at any time to the "Mall", and
              the "Mall" will process the withdrawal immediately.`}
                />
                <List
                  id={"②"}
                  content={` If a member
              falls under any of the following reasons, "mall" may limit or
              suspend membership.
              <ul>
                <li>1. If false information is registered when applying for membership</li>
                <li>2. If the payment for goods purchased using the “mall” or other debts borne by the member in relation to the use of the “mall” are not paid on due date</li>
                <li>3. Other  people 4. In the case of threatening the order of e-commerce, such as interfering with the use of the "mall" or stealing the information</li>
                <li>4. In case the "mall" is prohibited by the law or these terms and conditions, or in violation of public order and morals`}
                />
                <List
                  id={"③"}
                  content={`The "mall" is a member
              After the qualification is restricted or suspended, if the same
              act is repeated twice or more, or if the cause is not corrected
              within 30 days, the "Mall" may lose membership.`}
                />
                <List
                  id={"④"}
                  content={`If the "mall"
              loses membership, membership registration is canceled. In this
              case, the member is notified of this, and a period of at least 30
              days or more is set before membership registration is canceled to
              give the member an opportunity to explain.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 8 (Notification to Members)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`If the "mall" notifies the member, it can be done to the e-mail
              address designated by the member in advance with the "mall".`}
                />
                <List
                  id={"②"}
                  content={`"Mall" can be substituted for individual notices by posting on the
              "Mall" bulletin board for more than one week in case of notice to
              unspecified members. However, individual notices are given for
              matters that have a significant impact on the member's own
              transaction.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 9 (Purchase Request)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`“Mall” users apply for purchases on the “Mall” by the following
              or similar methods, and the “Mall” must provide each of the
              following information in an easy-to-understand manner when the
              user applies for purchase. 
              <ul> 
                <li>1. Search and select goods, etc.</li>
                <li>2. Enter the recipient's name, address, phone number, e-mail address (or mobile phone number), etc.</li>
                <li>3. Contents of the terms and conditions, services for which the right to
                withdraw is limited, costs such as shipping and installation fees
                Confirmation of contents related to burden</li>
                <li>4. Agree to these terms and conditions and indicate confirmation or rejection
                of the items in subparagraph 3 above (eg, mouse click) </li>
                <li>5. Request for purchase of goods, etc. Consent  </li>
                <li>6. Selection of payment method</li>
              </ul>`}
                />
                <List
                  id={"②"}
                  content={`If the "mall" needs to provide or entrust the
              purchaser's personal information to a third party, the purchaser's
              consent must be obtained when applying for the actual purchase,
              and comprehensive consent is not obtained in advance when signing
              up for membership. At this time, the "mall" must specify to the
              purchaser the items of personal information provided, the
              recipient, the purpose of using the personal information of the
              recipient, and the period of retention and use. However, if there
              are other provisions in the relevant laws, such as the case of
              consignment of personal information processing pursuant to Article
              25, Paragraph 1 of the 「Act on Promotion of Information and
              Communications Network Utilization and Information Protection,
              etc.」, it shall be followed.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 10 (Establishment of Contract)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`"Mall" may not accept the purchase request as in Article 9 if it
              falls under any of the following items. However, in the case of
              signing a contract with a minor, the minor or legal representative
              must notify that the contract can be canceled if the consent of
              the legal representative is not obtained. 
                <ul>
                  <li>
                    1. If there is falsehood, omission, or typo in the application
                  </li>
                  <li>
                    2. In case a minor purchases goods and services prohibited by
                    the Youth Protection Act, such as cigarettes and
                    alcohol If it is judged that there is
                  </li>
                </ul>`}
                />
                <List
                  id={"②"}
                  content={`The contract is deemed to have been
              concluded when the consent of the "mall" reaches the user in the
              form of confirmation of receipt in Article 12 (1).`}
                />
                <List
                  id={"③"}
                  content={`The "Mall"'s
              declaration of intent to accept must include information on the
              confirmation of the user's purchase request, whether or not it is
              available for sale, correction and cancellation of the purchase
              request, etc.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 11 (Payment method)
              </h6>{" "}
              <br />
              The payment method for goods or services purchased in the "mall"
              can be made by any of the following methods. However, "Mall"
              cannot collect any nominal fee in addition to the price of goods,
              etc. for the user's payment method.
              <ul className="list-inside list-decimal">
                <li>
                  Various account transfers such as phone banking, internet
                  banking, mail banking, etc.
                </li>
                <li>
                  Payment by various cards such as prepaid cards, debit cards,
                  credit cards, etc.
                </li>
                <li> Online deposit without a bankbook</li>
                <li>Payment by electronic money</li>
                <li>Payment upon receipt</li>
                <li>Mileage Payment by points paid by “mall”</li>
                <li>
                  Payment by gift certificate contracted with “mall” or
                  recognized by “mall”
                </li>
                <li>Payment by other electronic payment methods, etc.</li>
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 12 (Notification of Receipt Confirmation. Change and
                Cancellation of Purchase Request)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`"Mall" notifies the user of receipt confirmation when there is a
              user's purchase request.`}
                />
                <List
                  id={"②"}
                  content={`The user who has received the
              acknowledgment notice may request change or cancellation of the
              purchase application immediately after receiving the
              acknowledgment notice if there is a discord between the
              expressions of intent, and the "mall" may request the request
              without delay if there is a request from the user prior to
              delivery. should be processed accordingly. However, if the payment
              has already been made, the provisions of Article 15 regarding
              withdrawal of subscription shall be followed.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 13 (Supply of goods, etc.)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`"Mall" is custom-made to deliver goods within 7 days from the
              date the user makes a subscription, unless there is a separate
              agreement with the user regarding the supply period of goods, etc.
              Take other necessary measures such as packaging. However, if the
              "Mall" has already received all or part of the payment for goods,
              etc., measures will be taken within 3 business days from the date
              of receipt of all or part of the payment. At this time, the "mall"
              takes appropriate measures so that the user can check the supply
              procedure and progress of goods, etc.`}
                />
                <List
                  id={"②"}
                  content={`"Mall" specifies the
              delivery method, the person who pays the delivery cost by method,
              and the delivery period by method for the goods purchased by the
              user. If the "mall" exceeds the contracted delivery period, it
              must compensate the user for damages caused by it. However, this
              is not the case if the "Mall" proves that there is no intention or
              negligence.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 14 (Refund)
              </h6>{" "}
              <br />
              If the "mall" cannot deliver or provide the goods for which the
              user has applied for purchase due to reasons such as out of stock,
              notify the user of the reason without delay, and if the goods have
              been paid in advance, We will refund or take necessary measures
              for refund within 3 business days from the date of payment.
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 15 (Withdrawal of Subscription, etc.)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`A user who has entered into a contract with the "mall" for the
              purchase of goods, etc. must submit a written document regarding
              the contents of the contract pursuant to Article 13, Paragraph 2
              of the 「Act on Consumer Protection in Electronic Commerce, Etc.」
              Subscription can be withdrawn within 7 days from the date of
              receipt (if the supply of goods, etc. is delayed from the time the
              written notice was received, it refers to the date the goods, etc.
              are supplied or the supply of goods, etc. begins). However, if the
              「Consumer Protection Act in Electronic Commerce, Etc.」
              stipulates otherwise regarding the withdrawal of subscription, the
              provisions of the same law shall apply.`}
                />
                <List
                  id={"②"}
                  content={`Users cannot return or
              exchange goods, etc. if they fall under any of the following
              subparagraphs.
              <ul>
                <li>1. If goods are lost or damaged due to reasons attributable to the user (however, if the packaging, etc. is
                damaged to check the contents of goods, etc., the subscription can be withdrawn)</li>
                <li>2. Goods due to use or partial consumption by the user</li>
                <li>3. If the value of goods, etc. has significantly decreased to such an extent that resale is difficult over time</li>
                <li>4. If the goods, etc. with the same performance can be duplicated, if the packaging of the original goods, etc. is damaged</li>
              </ul>`}
                />
                <List
                  id={"③"}
                  content={`In the case of Items 2
              through 4 of Paragraph 2, if the "mall" did not specify in advance
              the fact that withdrawal of subscription is restricted in a place
              where consumers can easily find out or provide trial products, the
              user's withdrawal of subscription, etc. This is not limited.`}
                />
                <List
                  id={"④"}
                  content={`Notwithstanding the provisions of paragraphs 1 and 2, if the
              contents of the goods, etc. are different from the contents of the
              display or advertisement or the contents of the contract are
              performed differently, within 3 months from the date of supply of
              the goods, etc., or the date on which the user knows the fact Or,
              you can withdraw your subscription within 30 days from the date
              you were able to know.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 16 (Effect of withdrawal of subscription, etc.)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`"Mall" refunds the goods already paid within 3 business days
              when goods are returned from the user. In this case, when the
              "mall" delays the refund of goods, etc. to the user, the delay
              rate calculated by multiplying the delayed interest rate (deletion
              of parentheses) stipulated in Article 21-2 of the Enforcement
              Decree of the Consumer Protection Act in Electronic Commerce, etc.
              for the delay period Late interest is paid.`}
                />
                <List
                  id={"②"}
                  content={`In refunding the
              above amount, when the user pays for goods, etc. with a payment
              method such as credit card or electronic money, the "Mall" stops
              the claim for goods, etc. without delay from the business operator
              who provided the payment method. or request to cancel.`}
                />
                <List
                  id={"③"}
                  content={`In the
              case of subscription withdrawal, etc., the user shall bear the
              cost required to return the goods supplied. "Mall" does not claim
              a penalty or compensation for damages to the user for reasons such
              as withdrawal of subscription. However, if the contents of goods,
              etc. are different from the displayed or advertised contents or
              the contents of the contract are fulfilled differently, and the
              subscription is canceled, etc., the cost required to return the
              goods, etc. shall be borne by the “mall”.`}
                />
                <List
                  id={"④"}
                  content={`If the user pays the
              shipping cost when receiving goods, etc., the "mall" clearly
              indicates who will bear the cost when the subscription is
              withdrawn so that the user can easily understand.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 17 (Personal Information Protection)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`"Mall" collects the minimum personal information to the extent
              necessary to provide services when collecting user's personal
              information.`}
                />
                <List
                  id={"②"}
                  content={`“Mall” does not collect information necessary for
              the fulfillment of the purchase contract in advance when signing
              up for membership. However, this is not the case when minimum
              specific personal information is collected in the case where
              identity verification is required prior to the purchase contract
              to fulfill obligations under the relevant laws and regulations.`}
                />
                <List
                  id={"③"}
                  content={`"Mall" notifies the user of the purpose and obtains consent when
              collecting and using the user's personal information.`}
                />
                <List
                  id={"④"}
                  content={`"Mall"
              cannot use the collected personal information for any purpose
              other than the purpose, and when a new purpose of use occurs or
              when it is provided to a third party, the user is notified of the
              purpose and consent is obtained during the use/provision stage.
              However, exceptions are made in cases where the relevant laws and
              regulations stipulate otherwise.`}
                />
                <List
                  id={"⑤"}
                  content={`If the "mall" is required to
              obtain the user's consent pursuant to paragraphs 2 and 3, the
              identity of the person in charge of personal information
              protection (affiliation, name and phone number, other contact
              information), purpose of collection and use of information, third
              The matters stipulated in Article 22, Paragraph 2 of the 「Act on
              Promotion of Information and Communications Network Utilization
              and Information Protection, etc.」, such as matters related to the
              provision of information to users (recipient, purpose of
              provision, and contents of information to be provided), must be
              specified or notified in advance, and users may withdraw this
              consent at any time.`}
                />
                <List
                  id={"⑥"}
                  content={`Users may request to view and correct errors
              on their personal information possessed by the "Mall" at any time,
              and the "Mall" is obligated to take necessary measures without
              delay. If a user requests correction of an error, the "mall" does
              not use the personal information until the error is corrected.`}
                />
                <List
                  id={"⑦"}
                  content={`For the protection of personal information, the “Mall” shall limit
              the person who handles the user's personal information to a
              minimum, and the user's personal information, including credit
              cards and bank accounts, is lost, stolen, leaked, provided to a
              third party without consent, or altered. We take full
              responsibility for any damages caused by users.`}
                />
                <List
                  id={"⑧"}
                  content={`“Mall” or a
              third party who receives personal information from it destroys the
              personal information without delay when the purpose of collecting
              or receiving personal information is achieved.`}
                />
                <List
                  id={"⑨"}
                  content={`“Mall” does not
              set the consent section for the collection, use, and provision of
              personal information to a pre-selected one. In addition, the
              services restricted when the user refuses to consent to the
              collection, use, and provision of personal information are
              specified in detail, and services such as membership registration
              are made on the grounds of the user's refusal to consent to the
              collection, use, and provision of non-essential personal
              information. We do not limit or refuse offers.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 18 (Obligations of “Mall”)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`“Mall” does not engage in acts prohibited by the law and this
              Agreement or contrary to public order and morals, and does its
              best to provide goods and services continuously and stably as
              stipulated in this Agreement. Must do.`}
                />
                <List
                  id={"②"}
                  content={`"Mall" must have a
              security system to protect users' personal information (including
              credit information) so that users can safely use Internet
              services.`}
                />
                <List
                  id={"③"}
                  content={`The “Mall” shall be responsible for compensating users
              for damages caused by unreasonable display or advertisement
              prescribed in Article 3 of the 「Act on Fair Display and
              Advertisement」 for products or services.`}
                />
                <List
                  id={"④"}
                  content={`"Mall" does not send
              commercial e-mails for commercial purposes that users do not want.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 19 (Member's obligations regarding ID and password)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`Members are responsible for managing ID and password, except for
              the case of Article 17.`}
                />
                <List
                  id={"②"}
                  content={`Members must not let a third party use
              their ID and password.`}
                />
                <List
                  id={"③"}
                  content={`If a member recognizes that his/her ID
              and password are stolen or used by a third party, he or she must
              immediately notify the "mall" and follow the instructions of the
              "mall".`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 20 (Obligations of Users)
              </h6>{" "}
              <br />
              Users shall not engage in the following acts.
              <ul className="list-decimal list-inside">
                <li>
                  Registration of false information when applying or changing
                </li>
                <li>Stealing other people's information</li>
                <li>Changing information posted on the "mall"</li>
                <li>
                  Sending or posting information (computer programs, etc.) other
                  than the information set by the "mall"
                </li>
                <li>
                  Infringement of intellectual property rights such as copyright
                  of “Mall” or other third parties
                </li>
                <li>
                  Acts that damage the reputation of “Mall” or other third
                  parties or interfere with business
                </li>
                <li>
                  Obscene or violent messages, video, voice, or other violations
                  of public order and morals The act of disclosing or posting
                  information on the mall
                </li>
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 21 (Relationship between connected “mall” and connected
                “mall”)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`The upper “mall” and the lower “mall” are hyperlinked (e.g., the
              subject of hyperlinks includes text, pictures, and moving images),
              etc. When linked, the former is referred to as the Linking “Mall”
              (website) and the latter is referred to as the Linked “Mall”
              (Website).`}
                />
                <List
                  id={"②"}
                  content={`If the connection “mall” is specified on the initial
              screen of the connection “mall” or the pop-up screen at the time
              of connection, the meaning that it does not take responsibility
              for guarantees for transactions with users by goods independently
              provided by the connected “mall” We are not responsible for
              guaranteeing the transaction.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 22 (Ownership of Copyright and Restriction on Use)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`Copyright and other intellectual property rights for the works
              created by the “Mall” belong to the “Mall”.`}
                />
                <List
                  id={"②"}
                  content={`The user may use the
              information for which intellectual property rights are attributed
              to the “mall” among the information obtained by using the “mall”
              for commercial purposes by copying, transmitting, publishing,
              distributing, broadcasting or other methods without the prior
              consent of the “mall” You must not let yourself use it.`}
                />
                <List
                  id={"③"}
                  content={`"Mall"
              must notify the user when using the copyright belonging to the
              user according to the agreement.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 23 (Dispute Resolution)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`The "mall" installs and operates a damage compensation
              handling organization to reflect legitimate opinions or complaints
              raised by users and to compensate for the damage.`}
                />
                <List
                  id={"②"}
                  content={`The "mall"
              handles complaints and opinions submitted by users with priority.
              However, if prompt processing is difficult, the user will be
              immediately notified of the reason and processing schedule.`}
                />
                <List
                  id={"③"}
                  content={`If
              there is a user's request for damage relief in relation to an
              e-commerce dispute that occurred between the "mall" and the user,
              it may be subject to mediation by the Fair Trade Commission or a
              dispute mediation agency requested by the mayor/provincial
              governor.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              <h6 className="mb-0 border-l-2 border-secondary pl-3 text-sm sm:text-base lg:text-lg">
                Article 24 (Jurisdiction and Governing Law)
              </h6>{" "}
              <br />
              <ul className="list-none list-inside">
                <List
                  id={"①"}
                  content={`A lawsuit regarding an e-commerce dispute between the
              "Mall" and a user shall be governed by the user's address at the
              time of the lawsuit, and if there is no address, the district
              court having jurisdiction over the residence shall have exclusive
              jurisdiction. However, if the user's address or residence is not
              clear at the time of filing the complaint or if the user is a
              foreign resident, the complaint shall be brought to the competent
              court under the Civil Procedure Act.`}
                />
                <List
                  id={"②"}
                  content={`Korean law applies to
              e-commerce lawsuits filed between the "Mall" and users.`}
                />
              </ul>
            </p>
            <p className="text-xs xl:text-sm text-light">
              Addendum (Effective Date) These terms and conditions are effective
              from the month of the year. Addendum (Effective Date) These terms
              and conditions are effective from the month of the year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
