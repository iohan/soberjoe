import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect, useState } from 'react';

import { event } from 'nextjs-google-analytics';

export type formDataType = {
  hasAge: boolean | string;
  placement: string;
  description: string;
  timeproposal: string | number;
  email: string;
};

type ContactFormProps = {
  openSlot: number;
};

const schema = z.object({
  hasAge: z.literal('true'),
  placement: z.string(),
  timeproposal: z.string(),
  description: z.string().min(5),
  email: z.string().email(),
});

const formatOpenSlot = (openSlot: number) => {
  const ucaseFirstLetter = (word: string) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  };
  const date = new Date(openSlot);
  const weekday = ucaseFirstLetter(date.toLocaleString('sv-SE', { weekday: 'long' }));
  const day = date.toLocaleString('sv-SE', { day: 'numeric' });
  const month = ucaseFirstLetter(date.toLocaleString('sv-SE', { month: 'long' }));
  const time = date.toLocaleString('sv-SE', { hour: '2-digit', minute: '2-digit' });

  return weekday + ' ' + day + ' ' + month + ' ' + time;
};

export default function ContactForm({ openSlot }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<formDataType>({ defaultValues: { timeproposal: openSlot > 0 ? formatOpenSlot(openSlot) : '' }, resolver: zodResolver(schema) });

  const submitForm = (data: formDataType) => {
    setIsSubmitting(true);
    console.log('Response sent');
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      event('submit_form', {
        category: 'Contact',
        label: 'Boka tatuering',
      });
      if (res.status === 200) {
        console.log('Response succeeded!');
      }
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ hasAge: false, placement: '', timeproposal: '', description: '', email: '' });
    }
  }, [isSubmitSuccessful, reset]);

  if (formSubmitted) {
    return (
      <div className="mb-4 flex flex-col items-center text-3xl bg-green-dark/20 text-center py-5 px-5 lg:m-auto lg:w-1/2">
        <h3 className="mb-3">Tack f??r din bokningsf??rfr??gan!</h3>
        <p className="text-2xl">Jag kommer hantera den och ??terkomma till dig inom kort!</p>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit(data => submitForm(data))}>
        <div className="mb-4 flex flex-col items-center text-3xl">
          <div className="mb-4">??r du ??ver 18??r?</div>
          <div className="flex flex-row gap-x-5">
            <label>
              <input type="radio" className="input-radio" value="true" {...register('hasAge')} />
              Ja
            </label>
            <label>
              <input type="radio" className="input-radio" value="false" {...register('hasAge')} defaultChecked />
              Nej
            </label>
          </div>
          {errors.hasAge ? (
            <span className="mt-8 text-center text-lg italic text-red-300">Du m??ste vara ??ver 18 ??r f??r att boka tatueringstid!</span>
          ) : (
            <div className="mt-8 text-center text-lg italic text-slate-400">
              18 ??rs ??ldergr??ns vid tatuering <br className="lg:hidden" />
              oavsett m??lsman!
            </div>
          )}
        </div>

        <div className="lg:flex lg:justify-between lg:gap-x-10">
          <div className="mb-4 lg:basis-1/2">
            <div className="mb-2 text-3xl">Placering</div>
            <div>
              <input type="text" {...register('placement')} className="autofill:bg-blue-medium w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" />
              <div className="text-lg italic text-slate-400">T.ex. ??verarmen, Ryggen, Revben ???</div>
            </div>
          </div>
          <div className="mb-4 lg:basis-1/2">
            <div className="mb-2 text-3xl">Tidsf??rslag</div>
            <div>
              <input type="text" {...register('timeproposal')} className="autofill:bg-blue-medium w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" />
              <div className="text-lg italic text-slate-400">T.ex. Onsdagar efter kl. 13:00</div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="mb-2 text-3xl">Beskriv din id??</div>
            <div>
              <textarea {...register('description')} className="w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" rows={5}></textarea>
              {errors.description && <div className="text-red-300 text-lg">Ange dina ??nskem??l s?? underl??ttar du att tatueringen blir som du vill ha den.</div>}
              <div className="text-lg italic text-slate-400">Desta tydligare du kan beskriva din id?? desto enklare blir det f??r mig att uppn?? dina ??nskem??l.</div>
            </div>
          </div>
        </div>
        <div className="mb-12 lg:flex lg:justify-center">
          <div className="lg:basis-1/2">
            <div className="mb-2 text-3xl">E-postadress</div>
            <div>
              <input type="text" {...register('email')} className="autofill:bg-blue-medium w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" />
            </div>
            {errors.email && <span className="text-red-300 text-lg">Du m??ste ange en giltig e-postadress s?? jag kan ??terkoppla till dig.</span>}
          </div>
        </div>
        <div className="mb-8 text-lg lg:text-center">
          <p>N??r du f??r svar av mig kan du bli ombedd att skicka referensbilder. N??r vi v??l ??r ??verens kommer du beh??va erl??gga en deposition innan bokningen ??r genomf??rd.</p>
          <p>
            <a href="#" className="text-green-dark underline hover:text-green-medium hover:no-underline">
              L??s mer h??r om deposition.
            </a>
          </p>
        </div>
        <div className="lg:text-center">
          {isSubmitting ? (
            <div className="text-center uppercase">Skickar bokningsf??rfr??gan ...</div>
          ) : (
            <button type="submit" className="rounded-md bg-green-dark px-6 py-2 uppercase">
              Skicka in bokningsf??rfr??gan
            </button>
          )}
        </div>
      </form>
    );
  }
}
