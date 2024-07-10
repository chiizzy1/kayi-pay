import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const DeleteAccount = () => {
  return (
    <section className='pt-[150px] pb-[100px] bg-slate-50'>
      <div className='container container-width mx-auto w-full '>
        <h1 className='text-[48px] font-semibold leading-[60px] text-center mb-8'>Delete account request form</h1>
        <p className='text-[16px] leading-[25.5px] text-center text-gray-600 mb-12 w-full sm:w-1/2 mx-auto'>
          Please note that on successful submission our customer service department will reach out to you between 2 - 5
          business days to verify the accuracy of your request before deleting your account and all data associated with
          your account
        </p>
        <form className=''>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 '>
                <div className='w-full sm:w-1/2 mx-auto'>
                  <label htmlFor='firstname' className='block text-sm font-medium leading-6 text-gray-900'>
                    First Name
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                      <input
                        type='text'
                        name='firstname'
                        id='firstname'
                        autoComplete='firstname'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                        placeholder=''
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 mx-auto '>
                  <label htmlFor='lastname' className='block text-sm font-medium leading-6 text-gray-900'>
                    Last Name
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                      <input
                        type='text'
                        name='lastname'
                        id='lastname'
                        autoComplete='lastname'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                        placeholder=''
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 mx-auto '>
                  <label htmlFor='phonenumber' className='block text-sm font-medium leading-6 text-gray-900'>
                    Account Phone Number
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                      <input
                        type='tel'
                        name='phonenumber'
                        id='phonenumber'
                        autoComplete='phonenumber'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                        placeholder=''
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 mx-auto '>
                  <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                    Email
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                        placeholder=''
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 mx-auto'>
                  <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900'>
                    Reason why you want to delete your acccount
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                      <textarea
                        id='about'
                        name='about'
                        rows={3}
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 mx-auto'>
                  <Button type='button' className='w-full'>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DeleteAccount;
