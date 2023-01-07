import logotype from '../../images/IAmJoe_light_logo.svg';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    if (isNavOpen === false) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  };

  const navBar = classNames('');

  return (
    <div className="fixed z-[1000] w-full lg:relative">
      <div className="flex items-center justify-between bg-blue-dark/75 px-4 py-2 backdrop-blur-md lg:mr-[300px] lg:flex-col lg:justify-center lg:bg-inherit lg:backdrop-blur-none">
        <div className="text-2xl lg:mr-2 lg:pt-5">
          <Link href="/" onClick={() => setIsNavOpen(false)}>
            <Image src={logotype} alt="SoberJoe Logotype" className="h-10 w-10" />
          </Link>
        </div>
        <div className="flex flex-col items-center uppercase">
          <div className="text-3xl">
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              Johan Östling
            </Link>
          </div>
          <div className="text-xl text-green-dark">Tatuering, Gävle</div>
        </div>
        <div className="lg:hidden">
          <button className="btnHamburger block" onClick={() => toggleNav()}>
            <span className="mb-1 block h-[3px] w-6 bg-green-dark"></span>
            <span className="mb-1 block h-[3px] w-6 bg-green-dark"></span>
            <span className="block h-[3px] w-6 bg-green-dark"></span>
          </button>
        </div>
      </div>
      <div
        className={classNames('elNavbar z-50 bg-green-dark/50 px-12 py-5 pb-10 text-right backdrop-blur-md lg:fixed lg:right-0 lg:top-32 lg:block lg:bg-blue-dark/40 lg:backdrop-blur', {
          hidden: !isNavOpen,
        })}
      >
        <div className="mb-5 hidden border-b-2 border-green-dark pb-2 uppercase lg:flex lg:flex-col">
          <div className="text-2xl">
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              Johan Östling
            </Link>
          </div>
          <div className="text-base text-green-dark">Tatuering, Gävle</div>
        </div>
        <ul className="uppercase">
          <li className="py-1 uppercase">
            <Link href="/lediga-tatueringstider" onClick={() => setIsNavOpen(false)}>
              Lediga Tider
            </Link>
          </li>
          <li className="py-1 uppercase">
            <Link href="/skotselrad" onClick={() => setIsNavOpen(false)}>
              Skötselråd
            </Link>
          </li>
          <li className="py-1 uppercase">
            <Link href="/boka-tatueringstid" onClick={() => setIsNavOpen(false)}>
              Boka tid
            </Link>
          </li>
          <li className="mt-5 flex justify-end gap-x-4">
            <div>
              <a href="https://www.instagram.com/johantattooing/">
                <svg className="fill-blue-dark lg:fill-green-dark" xmlns="http://www.w3.org/2000/svg" width="30.007" height="30" viewBox="0 0 30.007 30">
                  <g id="Group_32" data-name="Group 32" transform="translate(-879 -316)">
                    <g id="Group_22" data-name="Group 22" transform="translate(879 316)">
                      <g id="Group_21" data-name="Group 21" clipPath="url(#clipPath)">
                        <path
                          id="Path_14"
                          data-name="Path 14"
                          d="M15.007,7.308A7.692,7.692,0,1,0,22.7,15a7.679,7.679,0,0,0-7.692-7.692m0,12.692a5,5,0,1,1,5-5A5.01,5.01,0,0,1,15.007,20Zm9.8-13.007A1.794,1.794,0,1,1,23.013,5.2a1.79,1.79,0,0,1,1.794,1.794M29.9,8.815a8.878,8.878,0,0,0-2.423-6.286A8.937,8.937,0,0,0,21.192.105c-2.477-.141-9.9-.141-12.378,0A8.924,8.924,0,0,0,2.529,2.522,8.907,8.907,0,0,0,.105,8.808c-.141,2.477-.141,9.9,0,12.378a8.878,8.878,0,0,0,2.423,6.286,8.948,8.948,0,0,0,6.286,2.423c2.477.141,9.9.141,12.378,0a8.878,8.878,0,0,0,6.286-2.423A8.937,8.937,0,0,0,29.9,21.185c.141-2.477.141-9.894,0-12.371M26.7,23.843a5.063,5.063,0,0,1-2.852,2.852c-1.975.783-6.661.6-8.843.6s-6.875.174-8.843-.6a5.063,5.063,0,0,1-2.852-2.852c-.783-1.975-.6-6.661-.6-8.843s-.174-6.875.6-8.843A5.063,5.063,0,0,1,6.164,3.305c1.975-.783,6.661-.6,8.843-.6s6.875-.174,8.843.6A5.063,5.063,0,0,1,26.7,6.157c.783,1.975.6,6.661.6,8.843s.181,6.875-.6,8.843"
                          transform="translate(0 0)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/soberjoese">
                <svg className="fill-blue-dark lg:fill-green-dark" xmlns="http://www.w3.org/2000/svg" width="42.667" height="30" viewBox="0 0 42.667 30">
                  <g id="Group_31" data-name="Group 31" transform="translate(-861 -514)">
                    <g id="Group_19" data-name="Group 19" transform="translate(861 514)">
                      <g id="Group_18" data-name="Group 18" clipPath="url(#clipPath)">
                        <path
                          id="Path_12"
                          data-name="Path 12"
                          d="M41.775,4.694A5.361,5.361,0,0,0,38,.9C34.676,0,21.333,0,21.333,0S7.991,0,4.664.9a5.361,5.361,0,0,0-3.772,3.8C0,8.043,0,15.03,0,15.03s0,6.987.892,10.336A5.281,5.281,0,0,0,4.664,29.1c3.327.9,16.67.9,16.67.9S34.676,30,38,29.1a5.281,5.281,0,0,0,3.772-3.736c.892-3.349.892-10.336.892-10.336s0-6.987-.892-10.336M39.187,24.678a2.6,2.6,0,0,1-1.88,1.838c-2.175.586-10.952.805-15.974.805h0c-5.022,0-13.8-.219-15.972-.8A2.6,2.6,0,0,1,3.48,24.679c-.658-2.471-.8-7.8-.8-9.649s.145-7.183.8-9.647a2.676,2.676,0,0,1,1.88-1.9c2.175-.586,10.952-.805,15.974-.805s13.8.219,15.972.8a2.676,2.676,0,0,1,1.881,1.9c.656,2.466.8,7.8.8,9.649s-.145,7.183-.8,9.647"
                          transform="translate(0)"
                        />
                        <path id="Path_13" data-name="Path 13" d="M215.314,94.875l15.2,8.647-15.2,8.647Z" transform="translate(-200.895 -88.522)" />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
