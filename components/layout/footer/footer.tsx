import { useMemo } from "react"
import ExternalLinkSvg from "../../svg/external-link-svg"
import GitHubLogoSvg from "../../svg/github-logo-svg"
import HeadWorkersSvg from "../../svg/head-workers-svg"
import MailSvg from "../../svg/mail-svg"
import PhoneSvg from "../../svg/phone-svg"

function Footer() {
  const friends = useMemo(
    () => [
      {
        title: "Galerie Philippe Gelot",
        url: "http://galeriephilippegelot.monsite-orange.fr",
      },
      {
        title: "Galerie Binôme",
        url: "http://www.galeriebinome.com",
      },
      {
        title: "Le Delarge",
        url: "http://www.ledelarge.fr/27427_artiste_potin_eizner__roland",
      },
      {
        title: "Fondation Lopez Fuseya",
        url: "http://www.fundacion-lopez-fuseya.net",
      },
      {
        title: "Jean-Claude Riedel",
        url: "https://www.worldcat.org/identities/viaf-159203900/",
      },
    ],
    []
  )

  return (
    <footer className="container mx-auto flex flex-col items-center gap-24 py-40 text-center md:flex md:w-full md:flex-row md:flex-wrap md:items-start md:justify-around md:gap-12 md:text-start">
      <section>
        <h4 className="mb-4 tracking-widest text-amber-900">Mes amis</h4>
        <ul className="flex flex-col gap-3 text-gray-600">
          {friends.map(friend => (
            <li key={friend.url} className="flex items-center gap-2 hover:text-gray-900">
              <i className="block w-6">
                <ExternalLinkSvg />
              </i>
              <a
                className="link"
                title={`Ouvrir un nouvel onglet vers ${friend.url}`}
                href={friend.url}
                target="_blank"
                rel="noreferrer"
              >
                {friend.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h4 className="mb-4 tracking-widest text-amber-900">Pour me contacter</h4>
        <ul className="flex flex-col gap-3 text-gray-600">
          <li className="flex items-center gap-2  hover:text-gray-900">
            <i className="block w-6">
              <PhoneSvg />
            </i>
            <a href="tel:+33660835318" className="link" title="Pour m'appeller directement">
              +33 6 60 83 53 18
            </a>
          </li>
          <li className="flex items-center gap-2  hover:text-gray-900">
            <i className="block w-6">
              <MailSvg />
            </i>
            <a
              className="link"
              title="Pour me contacter par email"
              href="mailto:rolandpotin@gmail.com"
            >
              rolandpotin@gmail.com
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h4 className="mb-4 tracking-widest text-amber-900">Conception et réalisation</h4>
        <ul className="flex flex-col gap-3 text-gray-600">
          <li className="flex items-center gap-2  hover:text-gray-900">
            <i className="block w-6">
              <GitHubLogoSvg />
            </i>
            <a
              className="link"
              title="Visiter les autres projets du developpeur"
              href="https://github.com/joskapotin"
            >
              Joska Potin
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h4 className="mb-4 tracking-widest text-amber-900">Heads icons are greatly made by</h4>
        <p className="mt-4 flex flex-wrap items-center gap-2  text-gray-600 hover:text-gray-900">
          <i className="block w-6">
            <HeadWorkersSvg />
          </i>
          <a
            className="link"
            title="Sachin Modgekar at the noun project"
            href="https://thenounproject.com/smodgekar/"
          >
            Sachin Modgekar
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
