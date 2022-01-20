import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';


// import {
//   DocumentDuplicateIcon,
//   CashIcon,
//   TableIcon,
//   UserIcon,
//   HomeIcon,
// } from '@heroicons/react/solid';


const Navbar = () => {
  const { asPath } = useRouter();

  console.log('aspath', asPath);
  console.log(asPath.includes('/member/'));

  return (
    <section
      id="bottom-navigation"
      className="sticky bottom-0 bg-neutral-900"
    >
      <div className="grid grid-cols-4 gap-2 px-1">
        <div>
          <Link href="/">
            <a
              className={clsx({
                'w-full justify-center inline-block text-center pt-2 pb-1': true,
                'text-gray-400': asPath !== '/',
                'text-green-400': asPath === '/',
              })}
            >
              <p
                className={clsx({
                  'h-7 w-7 mx-auto': true,
                  'text-gray-400': asPath !== '/',
                  'text-green-400': asPath === '/',
                })}
              />
              <span className="tab tab-whishlist block text-xs">Home</span>
            </a>
          </Link>
        </div>

        <div>
          <Link href="/donations">
            <a
              className={clsx({
                'w-full justify-center inline-block text-center pt-2 pb-1': true,
                'text-gray-400': asPath !== '/donations',
                'text-green-400': asPath === '/donations',
              })}
            >
              <hr
                className={clsx({
                  'h-7 w-7 mx-auto': true,
                  'text-gray-400': asPath !== '/donations',
                  'text-green-400': asPath === '/donations',
                })}
              />
              <span className="tab tab-whishlist block text-xs">Donasi</span>
            </a>
          </Link>
        </div>

        <div>
          <Link href="/member/raise-funds">
            <a
              className={clsx({
                'w-full justify-center inline-block text-center pt-2 pb-1': true,
                'text-gray-400': asPath !== '/member/raise-funds',
                'text-green-400': asPath === '/member/raise-funds',
              })}
            >
              <hr
                className={clsx({
                  'h-7 w-7 mx-auto': true,
                  'text-gray-400': asPath !== '/member/raise-funds',
                  'text-green-400': asPath === '/member/raise-funds',
                })}
              />
              <span className="tab tab-whishlist block text-xs">
                Galang Dana
              </span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/auth/login">
            <a
              className={clsx({
                'w-full justify-center inline-block text-center pt-2 pb-1': true,
                'text-gray-400': !asPath.includes('/member/'),
                'text-green-400': asPath.includes('/member/'),
              })}
            >
              <hr
                className={clsx({
                  'h-7 w-7 mx-auto': true,
                  'text-gray-400': !asPath.includes('/member/'),
                  'text-green-400': asPath.includes('/member/'),
                })}
              />
              <span className="tab tab-whishlist block text-xs">Akun Saya</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;