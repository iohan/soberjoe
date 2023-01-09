import React, { Dispatch, SetStateAction } from 'react';
import CalendarData from '../components/calendar/CalendarData';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

const ledigaTider = (props: { setOpenSlot: Dispatch<SetStateAction<number>> }) => {
  let { setOpenSlot } = props;

  return (
    <>
      <Head>
        <title>Lediga tatueringstider i Gävle</title>
        <meta name="description" content="Lediga tatueringstider hos Johan Östling i Gävle" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="gtag">
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K3QN783NQ0" strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K3QN783NQ0');
`}
        </Script>
      </div>

      <div className="p-5 lg:mr-[300px]">
        <div className="m-auto max-w-screen-lg">
          <section className="pt-32 pb-20 lg:text-center">
            <h1 className="mb-10 inline-block border-b-4 border-green-dark pb-1 text-5xl uppercase lg:px-10">Lediga tider</h1>
            <div className="text-left">
              <p className="mb-2 text-3xl font-medium">Ibland uppstår det att kunder får förhinder med kort varsel och lediga tider blir tillgängliga.</p>
              <p>
                I listan nedan kan du se tatueringstider som är bokningsbara inom kort. Listan uppdateras dagligen så hittar du ingen tid som passar ditt schema ber jag dig kontakta mig eller
                återkomma vid ett senare tillfälle.
              </p>
            </div>
          </section>
          <CalendarData setOpenSlot={setOpenSlot} />
        </div>
      </div>
      <div className="lg:relative lg:z-10 lg:mb-40 lg:py-20 lg:before:absolute lg:before:-top-24 lg:before:-z-10 lg:before:h-full lg:before:w-full lg:before:skew-y-2 lg:before:bg-blue-medium lg:after:absolute lg:after:-bottom-10 lg:after:-z-10 lg:after:h-full lg:after:w-full lg:after:-skew-y-2 lg:after:bg-blue-medium">
        <div className="p-5 lg:mr-[300px]">
          <div className="m-auto max-w-screen-lg">
            <section className="lg:mb-0">
              <div className="">
                <h2 className="inline-block border-b-4 border-green-dark pb-1 text-5xl uppercase lg:pr-10">Boka tatueringstid</h2>
                <article className="mt-4">
                  <p className="mb-4">Boka tatueringstid är enkelt när du väl har bestämt dig för ett motiv. Har du svårt att hitta något, be mig hjälpa dig på vägen.</p>
                  <p className="mb-4">Hittar du ingen ledig tid i listan ovan går det bra att kontakta mig med dagar/tider som skulle passa ditt schema bättre.</p>
                </article>

                <div className="mt-10 flex flex-col-reverse items-center gap-y-5 lg:flex-row lg:justify-end lg:gap-x-5">
                  <Link href="/boka-tatueringstid" className="rounded-md bg-green-dark px-6 py-2 uppercase">
                    Boka tid direkt
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ledigaTider;
