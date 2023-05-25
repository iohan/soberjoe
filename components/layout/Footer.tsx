import Image from 'next/image';
import logotype from '../../images/IAmJoe_light_logo.svg';

export default function Footer() {
  return (
    <footer className="pt-24 lg:pt-52">
      <div className="p-5 lg:mr-[300px]">
        <div className="m-auto max-w-screen-lg">
          <section className="flex flex-col items-center">
            <h2 className="mb-20 inline-block flex-1 border-b-4 border-green-dark pb-1 text-5xl uppercase lg:px-10">Kontakta mig</h2>
            <address className="flex w-full flex-col items-center gap-y-10 lg:flex-row lg:items-start lg:gap-x-10 lg:gap-y-0">
              <div className="text-center lg:basis-1/2 lg:text-right">
                <p>Svalan Tattoo</p>
                <p>Norra Skeppargatan 22</p>
                <p>Gävle</p>
              </div>
              <div className="text-center lg:basis-1/2 lg:text-left">
                <p>Johan Östling</p>
                <p>
                  <a href="mailto:johan@soberjoe.se" className="text-green-dark underline hover:text-green-medium hover:no-underline">
                    johan@soberjoe.se
                  </a>
                </p>
                <p>
                  <strong className="hidden lg:inline-block">Instagram: </strong>{' '}
                  <a href="https://www.instagram.com/johantattooing/" className="text-green-dark underline hover:text-green-medium hover:no-underline">
                    @johantattooing
                  </a>
                </p>
              </div>
            </address>
          </section>
          <section className="flex flex-col items-center pt-24 lg:pt-64">
            <a href="http://www.iamjoe.se" className="uppercase">
              <Image src={logotype} alt="SoberJoe Logotype" className="w-16" />
            </a>
            <a href="http://www.iamjoe.se" className="uppercase">
              iamjoe.se
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
