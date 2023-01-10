import Head from 'next/head';
import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

const BokaTatueringstid = (props: { openSlot: number }): JSX.Element => {
  const { openSlot } = props;

  return (
    <>
      <Head>
        <title>Boka tatueringstid i Gävle</title>
        <meta name="description" content="Boka tatuerigstid hos Johan Östling i Gävle" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="p-5 lg:mr-[300px] lg:mb-10">
        <div className="m-auto max-w-screen-lg">
          <section className="pt-32 pb-20 lg:text-center">
            <h1 className="mb-10 inline-block border-b-4 border-green-dark pb-1 text-5xl uppercase lg:px-10">Boka Tatueringstid</h1>
            <p className="mb-4 text-3xl font-medium">Är du redo att tatuera dig?</p>
            <div className="text-left">
              <p className="mb-2">Fyll i formuläret längre ned på sidan med nödvändig information.</p>
              <p>Desto mer du kan beskriva din idé på motiv desto lättare är det för mig att uppnå det du önskar.</p>
              <p>Det går bra att skicka en bokningsförfrågan även om du inte riktigt har bestämt dig för motiv.</p>
              <p>Jag kan alltid hjälpa dig med det.</p>
            </div>
          </section>
          <section>
            <ContactForm openSlot={openSlot} />
          </section>
        </div>
      </div>
    </>
  );
};

export default BokaTatueringstid;
