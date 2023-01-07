import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect, useState } from 'react';

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
        <h3 className="mb-3">Tack för din bokningsförfrågan!</h3>
        <p className="text-2xl">Jag kommer hantera den och återkomma till dig inom kort!</p>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit(data => submitForm(data))}>
        <div className="mb-4 flex flex-col items-center text-3xl">
          <div className="mb-4">Är du över 18år?</div>
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
            <span className="mt-8 text-center text-lg italic text-red-300">Du måste vara över 18 år för att boka tatueringstid!</span>
          ) : (
            <div className="mt-8 text-center text-lg italic text-slate-400">
              18 års åldergräns vid tatuering <br className="lg:hidden" />
              oavsett målsman!
            </div>
          )}
        </div>

        <div className="lg:flex lg:justify-between lg:gap-x-10">
          <div className="mb-4 lg:basis-1/2">
            <div className="mb-2 text-3xl">Placering</div>
            <div>
              <input type="text" {...register('placement')} className="autofill:bg-blue-medium w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" />
              <div className="text-lg italic text-slate-400">T.ex. Överarmen, Ryggen, Revben …</div>
            </div>
          </div>
          <div className="mb-4 lg:basis-1/2">
            <div className="mb-2 text-3xl">Tidsförslag</div>
            <div>
              <input type="text" {...register('timeproposal')} className="autofill:bg-blue-medium w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" />
              <div className="text-lg italic text-slate-400">T.ex. Onsdagar efter kl. 13:00</div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="mb-2 text-3xl">Beskriv din idé</div>
            <div>
              <textarea {...register('description')} className="w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" rows={5}></textarea>
              {errors.description && <div className="text-red-300 text-lg">Ange dina önskemål så underlättar du att tatueringen blir som du vill ha den.</div>}
              <div className="text-lg italic text-slate-400">Desta tydligare du kan beskriva din idé desto enklare blir det för mig att uppnå dina önskemål.</div>
            </div>
          </div>
        </div>
        <div className="mb-12 lg:flex lg:justify-center">
          <div className="lg:basis-1/2">
            <div className="mb-2 text-3xl">E-postadress</div>
            <div>
              <input type="text" {...register('email')} className="autofill:bg-blue-medium w-full rounded-xl border-4 border-green-dark bg-blue-medium py-2 px-3 outline-none" />
            </div>
            {errors.email && <span className="text-red-300 text-lg">Du måste ange en giltig e-postadress så jag kan återkoppla till dig.</span>}
          </div>
        </div>
        <div className="mb-8 text-lg lg:text-center">
          <p>När du får svar av mig kan du bli ombedd att skicka referensbilder. När vi väl är överens kommer du behöva erlägga en deposition innan bokningen är genomförd.</p>
          <p>
            <a href="#" className="text-green-dark underline hover:text-green-medium hover:no-underline">
              Läs mer här om deposition.
            </a>
          </p>
        </div>
        <div className="lg:text-center">
          {isSubmitting ? (
            <div className="text-center uppercase">Skickar bokningsförfrågan ...</div>
          ) : (
            <button type="submit" className="rounded-md bg-green-dark px-6 py-2 uppercase">
              Skicka in bokningsförfrågan
            </button>
          )}
        </div>
      </form>
    );
  }
}
