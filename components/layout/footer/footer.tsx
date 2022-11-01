import { useMemo } from "react"
import ExternalLinkSvg from "../../svg/external-link-svg"
import GitHubLogoSvg from "../../svg/github-logo-svg"
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
        url: "http://jeanclauderiedel.com",
      },
    ],
    []
  )

  return (
    <footer className="container mx-auto flex flex-col items-center gap-24 py-40 md:flex md:w-full md:flex-row md:flex-wrap md:items-start md:justify-around md:gap-12 md:text-start">
      <section>
        <h4 className="mb-4 tracking-widest text-amber-900">Mes amis</h4>
        <ul className="flex flex-col gap-3">
          {friends.map(friend => (
            <li key={friend.url} className="flex items-center gap-2">
              <i>
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
        <ul className="flex flex-col gap-3">
          <li className="flex gap-2">
            <i>
              <PhoneSvg />
            </i>
            <a href="tel:+33660835318" className="link" title="Pour m'appeller directement">
              +33 6 60 83 53 18
            </a>
          </li>
          <li className="flex gap-2">
            <i>
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
        <ul className="flex flex-col gap-3">
          <li className="flex gap-2">
            <i>
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
    </footer>
  )
}

export default Footer
