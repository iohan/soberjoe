import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function skotselrad() {
  return (
    <>
      <Head>
        <title>Skötselråd för ny tatuering</title>
        <meta name="description" content="Skötselråd för ny tatuering" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="p-5 lg:mr-[300px] lg:mb-10">
        <div className="m-auto max-w-screen-lg">
          <section className="pt-32 pb-20 lg:text-center">
            <h1 className="mb-10 inline-block border-b-4 border-green-dark pb-1 text-5xl uppercase lg:px-10">Skötselråd</h1>
            <p className="mb-10 text-3xl font-medium">
              När tatueringen är färdig är det väldigt viktigt att du som kund tar hand om den på rätt sätt. En dåligt omhändertagen tatuering kommer avgöra hur den kommer att se ut när den är läkt.
            </p>
            <article className="text-left">
              <h2 className="mb-2 text-4xl text-green-dark">Tatuering täckt med vanlig plastfolie</h2>
              <p className="mb-8">
                Om du lämnat tatueringsstudion med tatueringen täckt av vanlig plastfolie och kirurgtejp följer du dessa enkla steg för att din tatueringen skall läka som den ska.
              </p>
              <ul className="lg:mb-24 lg:list-disc lg:marker:text-green-dark">
                <li className="mb-10">
                  <p className="mb-2">
                    Ta av plastfolien på kvällen när du kommit hem{' '}
                    <strong>
                      <em>(plasten bör ha suttit några timmar)</em>
                    </strong>
                    , tvätta tatueringen grundligt med mild tvål tills den inte längre känns kladdig. Viktigt är att du får bort allt blod, bläck och annat kladd.
                  </p>
                  <p className="mb-2">Skölj med kallt vatten och badda försiktigt tatueringen torr med en ren handduk. Låt sedan tatueringen torka helt (det kan ta upp till en timme).</p>
                </li>
                <li className="mb-10">
                  <p className="mb-2">
                    Efter att tatueringen torkat är det dags att applicera ett tunt lager salva. Tvätta dina händer väl och gnid in ett tunt lager{' '}
                    <a href="https://www.google.com/search?q=helosan+original" className="text-green-dark underline hover:text-green-medium hover:no-underline">
                      Helosan
                    </a>{' '}
                    eller{' '}
                    <a href="https://www.google.com/search?q=bepanthen+salva" className="text-green-dark underline hover:text-green-medium hover:no-underline">
                      Bepanthen
                    </a>
                    . Om du vill kan du plasta in tatueringen första natten för att förhindra att den kladdar ner sängkläderna dina.
                  </p>
                </li>
                <li className="mb-10">
                  <p className="mb-2">Nu fortsätter du med att tvätta och smörja din tatuering 2 - 3 ggr per dag tills att du känner att tatueringen är en del av huden.</p>
                  <p className="mb-2">
                    <strong>Viktigt att du innan varje gång du smörjer tvättar ren tatueringen med tvål och vatten för att skölja bort eventuella orenheter som kan ha fastnat under dagen.</strong>
                  </p>
                  <p className="mb-2">Hur länge det tar innan tatueringen har läkt varierar beroende på storlek och placering.</p>
                </li>
              </ul>

              <h2 className="mb-2 text-4xl text-green-dark">
                Tatuering täckt med självhäftande plastfilm <em>(Second Skin)</em>
              </h2>
              <p className="mb-8">
                Om du lämnat tatueringsstudion med tatueringen täckt med en tunn elastisk och självhäftande plastfilm följer du dessa enkla steg för att din tatueringen skall läka som den ska.
              </p>
              <ul className="lg:mb-24 lg:list-disc lg:marker:text-green-dark">
                <li className="mb-10">
                  <p className="mb-2">
                    Låt plastfilmen sitta kvar över tatueringen i 3-5 dagar förutsatt att allt går som det ska. Efter första dagen kommer sårvätska, blod och bläck ha samlats under plasten och din
                    tatuering är inte längre lika synlig. Detta är full normalt.
                  </p>
                </li>
                <li className="mb-10">
                  <p className="mb-2">
                    Om plasten skulle flika upp sig och vätska skulle sippra ut är det viktigt att du avlägsnar plasten. Om syre kommer in under plasten så är risken stor att orenheter också gör det.
                    Ställ dig i duschen och spola vatten för att den enklare skall lossna. Påbörja omhändertagande av tatueringen enligt anvisningar ovan som om du hade haft vanlig plastfolie.
                  </p>
                </li>
                <li className="mb-10">
                  <p className="mb-2">Efter 3-5 dagar är det dags att avlägsna plasten. Vätskan under plasten har nu torkat helt och enklast är att du ställer dig i duschen när du drar av plasten.</p>
                </li>
              </ul>

              <h2 className="mb-2 text-4xl text-green-dark">Allmänna upplysningar</h2>

              <ul className="lg:mb-24 lg:list-disc lg:marker:text-green-dark">
                <li className="mb-10">
                  <p className="mb-2">Det är mycket viktigt att du alltid tvättar händerna före och efter du rör din nya tatuering. En tatuering bör endast tas på vid rengöring och smörjning.</p>
                </li>
                <li className="mb-10">
                  <p className="mb-2">
                    Klia och pilla inte på eventuella sårskorpor och kraffsa inte på tatueringen hur mycket det än kliar. Detta kan resultera i en tatuering som inte läker som den ska.
                  </p>
                </li>
                <li className="mb-10">
                  <p className="mb-2">Undvik sol och bad under hela läkningsprocessen. Träning kan göras efter några dagar om det verkligen inte går att undvika.</p>
                </li>
                <li className="mb-10">
                  <p className="mb-2">
                    Det är fullt normalt att en tatuering kan vara svullen och röd dagen efter tatueringstillfälle. Om du efter fyra dagar fortfarande känner att smärtan inte lagt sig eller att
                    rodnaden inte avtagit, tveka inte att skicka ett mail eller komma förbi studion.
                  </p>
                </li>
              </ul>
              <div className="text-center text-3xl">
                <p>Du har nu all information som behövs för att ta hand om din nya tatuering.</p>
                <p className="mt-4 text-4xl uppercase text-green-dark">Lycka till!</p>
              </div>
            </article>
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
    </>
  );
}

export default skotselrad;
