import Image from "next/image"
import photoRoland from "../../assets/images/roland01.jpg"
import videoThumbnail from "../../assets/images/video-thumbnail.jpg"
import Resume from "../../components/about/resume/resume"
import Quote from "../../components/quote/quote"
import VideoPlayer from "../../components/video/player/video-player"

function About() {
  return (
    <>
      <section className="flex flex-col items-center gap-20">
        <Quote>
          <p>
            Je suis né très petit, recroquevillé sur un monde bizarre. On m’a fait crier tout de
            suite et le monde fut immédiatement trop grand.
          </p>
          <p>
            J’ai aimé l’herbe et la lumière passante qui éclaire miraculeusement les petits insectes
            plein de pattes, d’ailes, d’yeux noirs et rouges dans les petits couloirs multiples qui
            donnaient vers d’autres mondes.
          </p>
          <p>
            Bientôt, il a fallu se mettre debout et parler, comme si cela allait de soi. Je
            retombais sur mon derrière et bégayais à l’infini. Mes cheveux blanc-blond furent coupés
            et l’école me mis debout. Il fallait se battre comme un garçon, je le fis avec trop de
            force pour être intelligible, cela me parut encore bizarre. Je fus gentil et muet.
          </p>
          <p>
            Un jour, je pénètre dans l’appartement puis le château du collectionneur Henri-Pierre
            Roché, et là, merveille, je fais des rencontres extraordinaires : des tableaux, des
            sculptures, des objets multiples me font face, s’animent et me parlent. Ces jours là je
            parle avec eux, complice et joyeux, je suis dans mon monde.
          </p>
        </Quote>

        <Image
          src={photoRoland}
          alt="Roland souriant devant des tableaux"
          className="aspect-square overflow-hidden rounded-full border-4 border-gray-100 object-cover object-center shadow-2xl"
        />

        <Quote>
          <p>
            Plus tard, j’apprendrais que toutes ces œuvres étaient signées. Les signatures étaient
            entre autre, celles de Georges Braque, Constantin Brancusi, Marcel Duchamp, Pablo
            Picasso, Henry Moore, Etienne Martin, Marie Laurencin, Jean Tinguely, José Garcia Tella,
            Sanyu, etc.
          </p>
          <p>Je compris le sacré et la douleur et ma voie dans l’existence.</p>
          <p>
            Quelques années après, toujours muet et la mémoire pleine, je savais que la
            communication tant désirée se trouvait en moi. Tous ces personnages pouvaient me
            comprendre, avec eux aussi je pouvais discuter et échanger. L’acte de peindre me fut
            assez vite naturel. Mon destin pris en main fit le reste.
          </p>
          <p>
            La recherche du dialogue au travers de tableaux presque autobiographiques, mon Graal
            quotidien.
          </p>
          <cite className="mt-10 block">
            <p className="text-end">Roland Potin-Eizner</p>
          </cite>
        </Quote>

        <div className="relative">
          <VideoPlayer url="/videos/reportage-fr3.mp4" thumbnail={videoThumbnail.src} />
        </div>
      </section>

      <section>
        <Resume />
      </section>
    </>
  )
}
export default About
