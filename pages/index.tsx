import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Johan Östling, Tatuering i Gävle</title>
        <meta name="description" content="Tatueringar av Johan Östling, Gävle" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="p-5 lg:mr-[300px]">
        <div className="m-auto max-w-screen-lg">
          <section className="mb-16 py-32 text-center">
            <h1 className="mb-16 text-5xl uppercase lg:mb-8">Redo för att tatuera dig?</h1>
            <Link href="/lediga-tatueringstider" className="rounded-md bg-green-dark px-6 py-2 uppercase">
              Hitta lediga tider
            </Link>
          </section>

          <section className="mb-24 lg:mb-48">
            <h2 className="inline-block border-b-4 border-green-dark pb-1 text-4xl uppercase lg:pr-10">Inspiration för din nästa tatuering</h2>
            <article className="mt-4">
              <p className="mb-4">
                Söka inspiration är en viktig del i processen att välja ett tatueringsmotiv. Motivet behöver nödvändigtvis inte betyda något speciellt för dig utan du kan helt enkelt välja något du
                tycker är väldigt snyggt. Det behöver ofta inte vara krångligare än så.
              </p>
              <p className="mb-4">Det finns många olika sätt att söka inspiration, t.ex. genom att titta på andra tatueringar, söka på nätet eller prata med vänner och familj.</p>
              <p className="mb-4 font-medium">Jag har samlat inspiration som kan hjälpa dig på vägen.</p>
            </article>
            <div className="mt-10 flex flex-col-reverse items-center gap-y-5 lg:flex-row lg:justify-end lg:gap-x-5">
              <a href="https://www.pinterest.se/johanostling/tattoo-reference/vintage-tattoo-flash/" className="rounded-md bg-green-dark px-6 py-2 uppercase">
                Pintarest
              </a>{' '}
              <a href="https://www.instagram.com/johantattooing/" className="rounded-md bg-green-dark px-6 py-2 uppercase">
                Instagram
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="lg:relative lg:z-10 lg:mb-40 lg:py-20 lg:before:absolute lg:before:-top-24 lg:before:-z-10 lg:before:h-full lg:before:w-full lg:before:skew-y-2 lg:before:bg-blue-medium lg:after:absolute lg:after:-bottom-10 lg:after:-z-10 lg:after:h-full lg:after:w-full lg:after:-skew-y-2 lg:after:bg-blue-medium">
        <div className="p-5 lg:mr-[300px]">
          <div className="m-auto max-w-screen-lg">
            <section className="mb-24 lg:mb-0">
              <div className="">
                <h2 className="inline-block border-b-4 border-green-dark pb-1 text-5xl uppercase lg:pr-10">Boka tatueringstid</h2>
                <article className="mt-4">
                  <p className="mb-4">Boka tatueringstid är enkelt när du väl har bestämt dig för ett motiv. Har du svårt att hitta något, be mig hjälpa dig på vägen.</p>
                  <p className="mb-4">Jag har lediga tider med jämna mellanrum som går att boka. Hittar du ingen tid som passar dig kan du alltid föreslå tider utifrån ditt eget schema.</p>
                </article>
                <div className="mt-10 flex flex-col-reverse items-center gap-y-5 lg:flex-row lg:justify-end lg:gap-x-5">
                  <Link href="/lediga-tatueringstider" className="rounded-md bg-green-dark px-6 py-2 uppercase">
                    Hitta lediga tider
                  </Link>{' '}
                  <Link href="/boka-tatueringstid" className="rounded-md bg-green-dark px-6 py-2 uppercase">
                    Boka tid direkt
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="p-5 lg:mr-[300px]">
        <div className="m-auto max-w-screen-lg">
          <section className="relative z-30">
            <h2 className="inline-block border-b-4 border-green-dark pb-1 pr-10 text-4xl uppercase">Skötselråd</h2>
            <article className="mt-4">
              <p className="mb-4">Att ta hand om din nya tatuering är minsta lika viktigt som tatuerarens arbete för ett snyggt resultat.</p>
              <p className="mb-4">En tatuering som läkt dåligt kan resultera i att den inte ser ut som den gjorde när du lämnade tatueringsstudion.</p>
            </article>
            <div className="mt-10 flex flex-col-reverse items-center gap-y-5 lg:flex-row lg:justify-end lg:gap-x-5">
              <Link href="/skotselrad" className="rounded-md bg-green-dark px-6 py-2 uppercase">
                Läs Skötselråden
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
