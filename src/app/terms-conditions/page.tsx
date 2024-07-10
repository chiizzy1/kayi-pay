import Link from 'next/link';

const TermsConditions = () => {
  return (
    <section className='pt-[150px] pb-[100px] bg-slate-50'>
      <div className='container container-width mx-auto w-full '>
        <h1 className='text-[48px] font-semibold leading-[60px] text-center mb-8'>Terms &amp; Conditions</h1>

        <p className='text-sm font-semibold leading-[28px] mb-4 text-gray-500'>
          <span>Last Updated: 05 October 2023</span>
        </p>
        <ol start={1} className='list-decimal'>
          <li>
            <h6 className='font-semibold text-[20px]'>Acceptance of Terms</h6>
          </li>
        </ol>
        <p>
          <span>
            By using the services provided by Kayi App, you agree to be bound by these Terms and Conditions. If you do
            not agree to these terms, please refrain from using our services.
          </span>
        </p>

        <ol start={2} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Eligibility</h6>
          </li>
        </ol>
        <p>
          <span>To use our services, you must:</span>
        </p>
        <ul className='data-list'>
          <li>
            <span>Be at least 18 years old or the legal age of majority in your jurisdiction.</span>
          </li>
          <li>
            <span>Provide accurate and up-to-date information during registration.</span>
          </li>
          <li>
            <span>Comply with all applicable laws and regulations.</span>
          </li>
        </ul>

        <ol start={3} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Account Registration</h6>
          </li>
        </ol>
        <ul className='data-list'>
          <li>
            <span>
              To access certain features of our services, you may be required to create an account. You are responsible
              for maintaining the confidentiality of your account information.
            </span>
          </li>
          <li>
            <span>You are solely responsible for all activities that occur under your account.</span>
          </li>
          <li>
            <span>You must promptly notify us of any unauthorized use of your account.</span>
          </li>
        </ul>

        <ol start={4} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Services</h6>
          </li>
        </ol>
        <ul className='data-list'>
          <li>
            <span>
              Our services may include financial products, payment processing, and related features. We reserve the
              right to modify, suspend, or terminate any aspect of our services at any time.
            </span>
          </li>
          <li>
            <span>
              We do not provide financial advice, and our services should not be considered as financial advice or
              recommendations.
            </span>
          </li>
        </ul>

        <ol start={5} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Financial Transactions</h6>
          </li>
        </ol>
        <ul className='data-list'>
          <li>
            <span>
              When using our services for financial transactions, you agree to provide accurate and complete
              information.
            </span>
          </li>
          <li>
            <span>You are responsible for all transactions initiated through your account.</span>
          </li>
          <li>
            <span>We may impose transaction limits and fees, which will be disclosed to you before processing.</span>
          </li>
        </ul>

        <ol start={6} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Privacy and Data</h6>
          </li>
        </ol>
        <ul className='data-list'>
          <li>
            <span>Our Privacy and Data Safety Policies, available at </span>
            <span>
              <Link className='text-primary' href={'/privacy-policy'}>
                https://kayi.ng/privacy-policy
              </Link>
            </span>{' '}
            and{' '}
            <span>
              <Link className='text-primary' href={'/data-safety'}>
                https://kayi.ng/data-safety
              </Link>
            </span>
            <span>
              , explains how we collect, use, and protect your personal information. By using our services, you consent
              to the practices described in the Privacy Policy.
            </span>
          </li>
        </ul>

        <ol start={7} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Prohibited Activities</h6>
          </li>
        </ol>
        <p>
          <span>You agree not to:</span>
        </p>
        <ul className='data-list'>
          <li>
            <span>Use our services for illegal or fraudulent activities.</span>
          </li>
          <li>
            <span>Use our services to harass, defame, or harm others.</span>
          </li>
          <li>
            <span>Attempt to circumvent our security measures or access data not intended for you.</span>
          </li>
          <li>
            <span>Interfere with the operation of our services or use automated systems.</span>
          </li>
        </ul>

        <ol start={8} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Intellectual Property</h6>
          </li>
        </ol>
        <ul className='data-list'>
          <li>
            <span>
              All content and materials on our website and mobile applications, including logos, trademarks, and
              software, are owned or licensed by us and are protected by intellectual property laws.
            </span>
          </li>
          <li>
            <span>You may not use, copy, or reproduce our intellectual property without our express permission.</span>
          </li>
        </ul>

        <ol start={9} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Termination</h6>
          </li>
        </ol>
        <p>
          <span>
            We reserve the right to suspend or terminate your account or access to our services at our discretion, with
            or without notice, for any reason, including violations of these Terms and Conditions.
          </span>
        </p>

        <ol start={10} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Limitation of Liability</h6>
          </li>
        </ol>
        <ul className='data-list'>
          <li>
            <span>
              We are not liable for any direct, indirect, incidental, special, or consequential damages arising from
              your use of our services.
            </span>
          </li>
          <li>
            <span>Our liability is limited to the maximum extent permitted by Nigerian law.</span>
          </li>
        </ul>

        <ol start={11} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Governing Law and Jurisdiction</h6>
          </li>
        </ol>
        <p>
          <span>
            These Terms and Conditions are governed by and construed in accordance with the laws of Nigeria. Any
            disputes arising out of or related to these Terms and Conditions will be subject to the exclusive
            jurisdiction of the courts in Nigeria.
          </span>
        </p>

        <ol start={12} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Changes to Terms and Conditions</h6>
          </li>
        </ol>
        <p>
          <span>
            We may update these Terms and Conditions from time to time. Any changes will be posted on our website, and
            the revised terms will be effective immediately.
          </span>
        </p>

        <ol start={13} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Contact Us</h6>
          </li>
        </ol>
        <p>
          <span>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</span>
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
        <p>
          <span></span>
        </p>
      </div>
    </section>
  );
};

export default TermsConditions;
