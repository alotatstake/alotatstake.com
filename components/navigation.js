import Head from "next/head";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="container flex justify-between items-center py-3">
      <Link href="">
        <a className="font-black text-sm uppercase tracking-wide italic">
          A Lot at Stake
        </a>
      </Link>

      <nav className="flex items-center font-medium gap-x-8 text-sm">
        <Link href="#benefits">Benefits</Link>
        <Link href="#how-it-works">How It Works</Link>

        <div className="flex items-center border-x border-gray-600 px-8 gap-x-4">
          <Link href="">
            <a>
              <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Logo Twitter</title>
                <path fill="currentColor"
                  d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/>
              </svg>
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-x-4">
          {/*<Link href="http://localhost/login">Delagator Login</Link>*/}
          <Link href="#how-it-works">
            <a
              className="border-2 flex gap-x-2 items-center border-gray-600 hover:border-gray-200 rounded-full px-4 leading-none py-2">
              Stake

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-50" viewBox="0 0 20 20"
                   fill="currentColor">
                <path fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  )
}
