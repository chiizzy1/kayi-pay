import { FC } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { faqs } from '@/constants';

const FAQ: FC = () => (
  <section className='pt-[150px] pb-[100px] bg-slate-50'>
    <div className='container container-width mx-auto w-full'>
      <h1 className='text-[48px] font-semibold leading-[60px] text-center mb-8'> Frequently Asked Questions</h1>

      <p className='text-[20px] leading-[25.5px] text-center text-gray-600 mb-12'>
        Find answers to all your queries about our service.
      </p>
      <Accordion type='single' collapsible className='w-full mt-[24px]'>
        {faqs.map(({ id, content, heading }) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger>{heading}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
