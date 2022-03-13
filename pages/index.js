import Head from 'next/head'
import Navigation from "../components/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>

        <meta name="description" content="Stake Mina"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navigation/>

      <main className="h-screen">
        {/* Hero */}
        <section className="container pt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
            {/* Copy */}
            <div className="col-span-2">
              <h1 className="text-4xl font-extrabold font-serif">
                Stake Mina with Us
              </h1>

              <p className="mt-4">
                We cast our magic to produce blocks and prove Snarks on <a href="https://minaprotocol.com">Mina</a>.
              </p>

              <p className="mt-4">
                Unlike with other validators, our delegators also earn rewards from our other operations, such as Snark
                work, and more!
              </p>

              <p className="mt-4">
                We don&apos;t do Orc-crap or hypnotising design witchcraft.
              </p>

              <p className="mt-4">
                <div>Delegate to</div>
                <div className="inline-block mt-2 text-sm p-2 border border-black border-dotted">B62qqD9f8CGy5QeFj1h3nsit3Zp2GDBntjEoVCdfj4SPQuubRW1CYXp</div>
              </p>
            </div>

            {/* Stats */}
            <ul>
              <li className="flex justify-between border-b border-black border-dotted py-2">
                <span className="font-bold font-sans-uc">Commission</span>
                <span className="font-mono">10%</span>
              </li>

              <li className="flex justify-between border-b border-black border-dotted py-2">
                <span className="font-bold font-sans-uc">Staked</span>
                <span className="font-mono">~1.200.000 Mina</span>
              </li>

            </ul>
          </div>
        </section>

        <section className="container py-16">
          <h2 className="text-3xl font-bold font-serif" id="benefits">
            Benefits
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-8 gap-y-12 md:gap-y-12">
            <li>
              <h3 className="font-semibold flex gap-x-2 font-sans-uc text-lg">
                Bad Ass Support
              </h3>
              <p className="leading-relaxed mt-2">
                Our support is run by the same wizards that maintain our infrastructure. <a href="mailto:">Write
                us a mail</a>, <a href="">send us a tweet</a>, or <a href="">ask
                on our Discord</a>. We aim for fast response times 24/7.
              </p>
            </li>

            <li>
              <h3 className="font-semibold flex gap-x-2 font-sans-uc text-lg">
                Future Rewards
              </h3>
              <p className="leading-relaxed mt-2">
                Delegators are our shareholders. Excess profit from our operations is distributed to our delegators.
                This includes profit from Snark work.
              </p>
            </li>

            <li>
              <h3 className="font-semibold flex gap-x-2 font-sans-uc text-lg">
                Overpowered Hardware
              </h3>
              <p className="leading-relaxed mt-2">
                Literally. We use hardware beyond the minimum requirements recommended by Mina to stay fast and future
                proof.
              </p>
            </li>

            <li>
              <h3 className="font-semibold flex gap-x-2 font-sans-uc text-lg items-center">
                Bleeding Edge Research
              </h3>
              <p className="leading-relaxed mt-2">
                We are constantly aiming to optimise our delegators profits by developing more efficient approaches to
                block production and Snark work.
              </p>
              <p className="leading-relaxed mt-2">
                Our research is funded by our staking commission, revenue from
                Snark work, and private capital.
              </p>
              <p className="leading-relaxed mt-2">
                Are you a major delegator? Please <a
                href="mailto:hello@alotatstake.com">reach out to us</a> to learn more about our current projects.
              </p>
            </li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold font-serif" id="how-it-works">How It Works</h2>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-12 mt-8 gap-y-12 md:gap-y-12">
            <li>
              <div className="flex items-center gap-x-3">
                <span
                  className="bg-black rounded-full inline-flex items-center justify-center h-5 w-5 text-white font-bold text-xs">1</span>
                <h3 className="font-semibold font-sans-uc text-lg">Install a Wallet</h3>
              </div>
              <p className="leading-relaxed mt-2">Install a wallet like <a href="https://www.aurowallet.com/"
                                                                           rel="noreferrer">Auro</a>, create an
                account, and finally deposit MINA on it for staking.</p>
            </li>

            <li>
              <div className="flex items-center gap-x-3">
                <span
                  className="bg-black rounded-full inline-flex items-center justify-center h-5 w-5 text-white font-bold text-xs">2</span>
                <h3 className="font-semibold font-sans-uc text-lg">Stake Mina</h3>
              </div>
              <p className="leading-relaxed mt-2">Inside Auro, click on &quot;Staking&quot; and search for <span className="whitespace-nowrap">&quot;A Lot at Stake&quot;</span>, select it and stick with the defaults. Continue and confirm.</p>
            </li>

            <li>
              <div className="flex items-center gap-x-3">
                <span
                  className="bg-black rounded-full inline-flex items-center justify-center h-5 w-5 text-white font-bold text-xs">3</span>
                <h3 className="font-semibold font-sans-uc text-lg">Profit!</h3>
              </div>
              <p className="leading-relaxed mt-2">You made it! Keep in mind that it will take 2 blocks for your stake to
                activate and another block for your blocks to produce rewards.</p>
            </li>
          </ol>
        </section>
      </main>
    </div>
  )
}
