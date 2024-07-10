import Link from 'next/link';

const DataSafety = () => {
  return (
    <section className='pt-[150px] pb-[100px] bg-slate-50'>
      <div className='container container-width mx-auto w-full '>
        <h1 className='text-[48px] font-semibold leading-[60px] text-center mb-8'>Data Safety Policy</h1>
        <p className='text-sm font-semibold leading-[28px] mb-4 text-gray-500'>
          <span>Effective Date: 12 October 2023</span>
        </p>
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
            This Data Safety Policy (hereinafter referred to as the &quot;Policy&quot;) outlines the data collection,
            usage, and sharing practices of Kayi App (hereinafter referred to as the &quot;App&quot;), a financial
            technology application developed for use in Nigeria. We are committed to safeguarding the privacy and
            security of your personal and financial information.
          </span>
        </p>

        <ol start={2} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Data Collection</h6>
          </li>
        </ol>
        <p className='mb-2'>
          <span>a. </span>
          <span className='font-semibold'>Information We Collect:</span>
          <span>
            &nbsp;The App collects and processes personal and financial information, which may include, but is not
            limited to, the following:
          </span>
        </p>
        <p className='mb-1'>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Name</span>
        </p>
        <p className='mb-1'>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Contact information (email, phone number, address)</span>
        </p>
        <p className='mb-1'>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>National identification number or tax identification number</span>
        </p>
        <p className='mb-1'>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Bank account details</span>
        </p>
        <p className='mb-1'>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Transaction history</span>
        </p>
        <p className='mb-1'>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Location data</span>
        </p>
        <p className='mb-1'>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Device information (e.g., device type, operating system)</span>
        </p>
        <p className='mt-2'>
          <span>b. </span>
          <span className='font-semibold'>Sources of Data:</span>
          <span>&nbsp;We collect data from the following sources:</span>
        </p>
        <p>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Information provided by you during the account registration process.</span>
        </p>
        <p>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Transaction data generated when you use the App.</span>
        </p>
        <p>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Data collected through cookies and similar tracking technologies.</span>
        </p>
        <p>
          <span>&#8729;</span>
          <span>&nbsp;</span>
          <span>Information obtained from third-party financial institutions with your consent.</span>
        </p>

        <ol start={3} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Data Usage</h6>
          </li>
        </ol>
        <p className='mb-2'>
          <span>The data collected is used for the following purposes:</span>
        </p>
        <p className='mb-2'>
          <span>a. </span>
          <span className='font-semibold'>Account Setup and Maintenance:</span>
          <span>&nbsp;We use your information to create and manage your account.</span>
        </p>
        <p className='mb-2'>
          <span>b. </span>
          <span className='font-semibold'>Transaction Processing:</span>
          <span>
            &nbsp;We process your transactions and maintain a record of your financial activities through the App.
          </span>
        </p>
        <p className='mb-2'>
          <span>c. </span>
          <span className='font-semibold'>Customer Support:</span>
          <span>&nbsp;To provide customer support and respond to your inquiries.</span>
        </p>
        <p className='mb-2'>
          <span>d. </span>
          <span className='font-semibold'>Security and Fraud Prevention:</span>
          <span>&nbsp;To detect and prevent fraudulent activities and unauthorized access to your account.</span>
        </p>
        <p className='mb-2'>
          <span>e. </span>
          <span className='font-semibold'>Improvement of Services:</span>
          <span>
            &nbsp;We analyze data to improve our services, including user experience, security, and overall
            functionality.
          </span>
        </p>
        <p className='mb-2'>
          <span>f. </span>
          <span className='font-semibold'>Legal Compliance:</span>
          <span>
            &nbsp;To comply with applicable laws and regulations, including reporting financial transactions to
            regulatory authorities.
          </span>
        </p>

        <ol start={4} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Data Sharing</h6>
          </li>
        </ol>
        <p className='mb-2'>
          <span>a. </span>
          <span className='font-semibold'>Third-Party Service Providers:</span>
          <span>
            &nbsp;We may share your data with third-party service providers who assist us with services such as payment
            processing, customer support, and data analytics. These service providers are contractually bound to
            safeguard your data and are only allowed to use it for the purposes specified in our agreements with them.
          </span>
        </p>
        <p className='mb-2'>
          <span>b. </span>
          <span className='font-semibold'>Legal Obligations:</span>
          <span>
            &nbsp;We may disclose your data in response to legal requests, court orders, or other legal processes, or to
            comply with applicable laws and regulations.
          </span>
        </p>
        <p className='mb-2'>
          <span>c. </span>
          <span className='font-semibold'>Business Transfers:</span>
          <span>
            &nbsp;In the event of a merger, acquisition, or sale of our business assets, your data may be transferred to
            a new entity. We will notify you in such a circumstance.
          </span>
        </p>

        <ol start={5} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Data Security</h6>
          </li>
        </ol>
        <p>
          <span>
            We employ industry-standard security measures to protect your data, including encryption, access controls,
            and regular security assessments. However, please be aware that no system is completely secure, and while we
            take reasonable precautions, we cannot guarantee the absolute security of your data.
          </span>
        </p>

        <ol start={6} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Data Retention</h6>
          </li>
        </ol>
        <p>
          <span>
            We will retain your data for as long as necessary for the purposes described in this Policy or as required
            by applicable laws and regulations.
          </span>
        </p>

        <ol start={7} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Your Rights</h6>
          </li>
        </ol>
        <p>
          <span>
            You have the right to access, correct, or delete your personal data. For requests regarding your data or to
            exercise any of your rights, please contact our data protection officer at data.protection@kayi.ng
          </span>
        </p>

        <ol start={8} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'> Updates to this Policy</h6>
          </li>
        </ol>
        <p>
          <span>
            We may update this Policy from time to time. You will be notified of significant changes, and the updated
            Policy will be published on our website.
          </span>
        </p>

        <ol start={9} className='list-decimal mt-6'>
          <li>
            <h6 className='font-semibold text-[20px]'>Contact Information</h6>
          </li>
        </ol>
        <p>
          <span>
            For questions, concerns, or requests related to this Policy, please contact our data protection officer at
            data.protection@kayi.ng
          </span>
        </p>
        <p>
          <span>
            By using the App, you agree to the terms of this Data Safety Policy. If you do not agree with this Policy,
            please refrain from using the App.
          </span>
        </p>
        <p>
          <span>&nbsp;</span>
        </p>
        <p>
          <span>&nbsp;</span>
        </p>
        <p>
          <span></span>
        </p>
      </div>
    </section>
  );
};

export default DataSafety;
