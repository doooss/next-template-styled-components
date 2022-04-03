import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/" passHref>
            홈
          </Link>
        </li>
        <li>
          <Link href="/todo" passHref>
            투두
          </Link>
        </li>
        <li>
          <Link href="/result" passHref>
            결과
          </Link>
        </li>
      </ul>
      <main>{children}</main>
    </>
  );
};

export default Layout;
