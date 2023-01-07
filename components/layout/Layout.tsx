import { ReactNode } from 'react';
import Header from './Header';

import imageBgTop from '../../images/bg/bg_top_100PS.webp';
import imageBgBottom from '../../images/bg/bg_footer_100PS.webp';
import Image from 'next/image';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const bgStyle = {
    'var(--bgTopImageUrl)': imageBgTop,
  } as React.CSSProperties;

  return (
    <div className="lg:relative">
      <Image src={imageBgTop} quality="100" unoptimized={true} priority={true} alt="Background Image Soberjoe" className="hidden lg:block lg:absolute lg:-z-10 lg:right-0 lg:top-0" />
      <Header />
      <main>{children}</main>
      <div className="lg:relative">
        <Image src={imageBgBottom} quality="100" unoptimized={true} alt="Background Image Soberjoe" className="hidden lg:block lg:absolute lg:-z-10 lg:left-0 lg:bottom-0" />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
