import Link from "next/link";

const JacksonvillePaverInstallation = () => {
  return (
    <section
      id="paver-installation-overview"
      aria-labelledby="paver-installation-heading"
      className="relative bg-white"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
          Local Expertise
        </p>
        <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
        <h2
          id="paver-installation-heading"
          className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
        >
          Jacksonville Paver Installation, Built for the Florida Lifestyle
        </h2>
        <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Jax Pavers is a Jacksonville paver installation company specializing in custom
            hardscape design and construction across Northeast Florida. Our crew has completed
            hundreds of paver projects in Jacksonville, Ponte Vedra Beach, Nocatee, St. Johns,
            Mandarin, Riverside, Atlantic Beach, Jacksonville Beach, St. Augustine, Fleming
            Island, and Orange Park — every one of them engineered for Florida's heat, humidity,
            and sandy soil.
          </p>
          <p>
            Whether you're planning a new{" "}
            <Link href="/driveways/" className="text-[#0A86C4] hover:underline">
              paver driveway in Jacksonville
            </Link>
            , a{" "}
            <Link href="/patios/" className="text-[#0A86C4] hover:underline">
              custom paver patio
            </Link>
            , a{" "}
            <Link href="/pool-decks/" className="text-[#0A86C4] hover:underline">
              slip-resistant pool deck
            </Link>
            , a fully equipped{" "}
            <Link href="/outdoor-kitchens/" className="text-[#0A86C4] hover:underline">
              outdoor kitchen
            </Link>
            , or a{" "}
            <Link href="/pergolas/" className="text-[#0A86C4] hover:underline">
              hurricane-code pergola
            </Link>
            , our team handles every phase of paver installation — design, permitting, base
            preparation, paver laying, sealing, and final walkthrough.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
            What Makes Jacksonville Paver Installation Different
          </h3>
          <p>
            Paver installation in Jacksonville isn't the same job as paver installation in a
            cooler, drier climate. The sandy soil that runs across much of Duval and St. Johns
            counties drains well but moves more than clay or rocky substrates, which makes proper
            base preparation the single most important factor in a driveway or patio that lasts
            twenty years instead of five. UV exposure fades cheap pavers within a season or two,
            so we install only manufacturer-rated, UV-stable pavers from{" "}
            <strong className="text-gray-900">Tremron</strong> and{" "}
            <strong className="text-gray-900">Belgard</strong> — both engineered for the Southeast.
            And the daily afternoon thunderstorms that define Florida summers demand drainage
            planning that most builders in milder climates never have to think about.
          </p>
          <p>
            Every paver installation we deliver in Jacksonville starts with a free on-site
            consultation, includes engineered base prep, uses polymeric joint sand, and is
            completed by a licensed and insured local crew. We don't sub the work out and we
            don't disappear when the install is done.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
            Paver Installation Services We Offer
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/driveways/" className="text-[#0A86C4] hover:underline">
                Paver driveway installation
              </Link>{" "}
              — Tremron and Belgard pavers in tumbled, smooth, and large-format styles.
              Herringbone, running bond, and circle medallion patterns rated for vehicular
              traffic.
            </li>
            <li>
              <Link href="/patios/" className="text-[#0A86C4] hover:underline">
                Paver patios and courtyards
              </Link>{" "}
              — Custom outdoor living spaces with fire pits, seating walls, integrated lighting,
              and seamless transitions to existing hardscape.
            </li>
            <li>
              <Link href="/pool-decks/" className="text-[#0A86C4] hover:underline">
                Pool deck pavers
              </Link>{" "}
              — Slip-resistant, heat-reflective travertine and brick pavers installed around
              new and existing pools with proper drainage and premium coping.
            </li>
            <li>
              <Link href="/outdoor-kitchens/" className="text-[#0A86C4] hover:underline">
                Custom outdoor kitchens
              </Link>{" "}
              — Twin Eagles and TrueFlame grills, kamado smokers, granite and quartz
              countertops, weatherproof appliances, and full island construction.
            </li>
            <li>
              <Link href="/pergolas/" className="text-[#0A86C4] hover:underline">
                Pergola installation
              </Link>{" "}
              — Aluminum, cedar, and StruXure louvered pergolas engineered to Florida wind code.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
            Get a Free Quote for Your Jacksonville Paver Installation
          </h3>
          <p>
            Every project starts with a free, no-pressure consultation at your property. We'll
            assess the site, listen to your vision, take precise measurements, and provide a
            detailed written proposal with transparent pricing. Our project minimum is $7,500,
            and we handle everything from permits to final inspection. Call{" "}
            <a href="tel:+19044451261" className="text-[#0A86C4] hover:underline font-semibold">
              (904) 445-1261
            </a>{" "}
            or scroll down to request a quote online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JacksonvillePaverInstallation;
