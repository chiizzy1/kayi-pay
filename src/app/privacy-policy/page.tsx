import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <section className='pt-[150px] pb-[100px] bg-slate-50'>
      <div className='container container-width mx-auto w-full '>
        <h1 className='text-[48px] font-semibold leading-[60px] text-center mb-8'>Privacy Policy</h1>
        <p className='text-sm font-semibold leading-[28px] mb-4 text-gray-500'>
          <span>Last Updated: 05 October 2023</span>
        </p>
        <ol start={1} className='list-decimal'>
          <li>
            <h6 className='font-semibold text-[20px]'>Introduction</h6>
          </li>
        </ol>
        <p>
          <span>
            Thank you for choosing Kayi App. We are committed to protecting your privacy and safeguarding your personal
            information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when
            you use our services.
          </span>
        </p>
        <ol start={2} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Information We Collect</h6>
          </li>
        </ol>
        <p>
          <span>We may collect the following types of information:</span>
        </p>
        <ul className=''>
          <li className='mb-2'>
            <span className='font-semibold'>Personal Information:</span>
            <span>
              &nbsp;We may collect personal information such as your name, contact information (email address, phone
              number, physical address), date of birth, and government-issued identification details when you sign up
              for our services.
            </span>
          </li>
          <li className='mb-2'>
            <span className='font-smibold'>Financial Information:</span>
            <span>
              &nbsp;To provide our services, we may collect financial information, such as bank account details,
              transaction history, and payment card information.
            </span>
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Usage Data:</span>
            <span>
              &nbsp;We may collect information about your interactions with our website and mobile applications,
              including log data, IP address, browser type, and pages visited.
            </span>
          </li>
        </ul>
        <ol start={3} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>How We Use Your Information</h6>
          </li>
        </ol>
        <p>
          <span>We may use your information for the following purposes:</span>
        </p>
        <ul>
          <li className='mb-2'>
            <span className='font-semibold'>Service Provision:</span>
            <span>
              &nbsp;To provide and maintain our services, including processing transactions and facilitating financial
              activities.
            </span>
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Customer Support:</span>
            <span>&nbsp;To respond to your inquiries and provide customer support.</span>
          </li>
          <li className='mb-2'>
            <span className='font-semi-bold'>Security:</span>
            <span>&nbsp;To protect against fraud, unauthorized access, and other illegal activities.</span>
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Marketing:</span>
            <span>&nbsp;To send you promotional and marketing communications (you can opt-out at any time).</span>
          </li>
        </ul>
        <ol start={4} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Disclosure of Your Information</h6>
          </li>
        </ol>
        <p>
          <span>We may share your information with:</span>
        </p>
        <ul>
          <li className='mb-2'>
            <span className='font-semibold'>Service Providers:</span>
            <span>
              &nbsp;We may share your information with third-party service providers who assist us in delivering our
              services.
            </span>
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Legal Requirements:</span>
            <span>
              &nbsp;We may disclose your information if required by law or to protect our rights, privacy, safety, or
              property.
            </span>
          </li>
        </ul>
        <ol start={5} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Data Security</h6>
          </li>
        </ol>
        <p>
          <span>
            We implement technical and organizational measures to protect your information from unauthorized access,
            disclosure, alteration, and destruction. While no data transmission over the internet can be entirely
            secure, we will do our utmost best to secure your{' '}
            <Link href={'/'} className='text-primary'>
              data
            </Link>
            .
          </span>
        </p>

        <ol start={6} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Your Rights</h6>
          </li>
        </ol>
        <p>
          <span>You have the following rights regarding your personal information:</span>
        </p>
        <ul>
          <li className='mb-2'>
            <span className='font-semibold'>Access:</span>
            <span>&nbsp;You can request access to your personal information.</span>
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Rectification:</span>
            <span>&nbsp;You can request corrections to your inaccurate or incomplete personal information.</span>
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Deletion:</span>
            <span>
              &nbsp;You can request the{' '}
              <Link href={'/delete-account'} className='text-primary'>
                deletion
              </Link>{' '}
              of your personal information under certain circumstances.
            </span>
          </li>
          <li className='mb-2'>
            <span className='font-semibold'>Withdrawal of Consent:</span>
            <span>
              &nbsp;You can withdraw your consent for processing your data when we rely on your consent as the legal
              basis for processing.
            </span>
          </li>
        </ul>
        <ol start={7} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Changes to this Privacy Policy</h6>
          </li>
        </ol>
        <p>
          <span>
            We may update this Privacy Policy from time to time to reflect changes in our practices. Any updates will be
            posted on our website, and the revised policy will be effective immediately.
          </span>
        </p>
        <ol start={8} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Contact Us</h6>
          </li>
        </ol>
        <p>
          <span>
            If you have any questions, concerns, or requests related to your privacy or this Privacy Policy, please
            contact us at:
          </span>
        </p>
        <p>
          <span>61, Maganda Road, Nasarawa, Kano, Nigeria</span>
        </p>
        <p>
          <span>0800-000-KAYI (0800-000-5294) </span>
        </p>
        <p>
          <span>help@kayi.ng</span>
        </p>
        <ol start={9} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Governing Law and Jurisdiction</h6>
          </li>
        </ol>
        <p>
          <span>
            This Privacy Policy is governed by and construed in accordance with the laws of Nigeria. Any disputes
            arising out of or relating to this Privacy Policy will be subject to the exclusive jurisdiction of the
            courts in Nigeria.
          </span>
        </p>
        <p>
          <span>By using our services, you consent to the practices outlined in this Privacy Policy.</span>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
