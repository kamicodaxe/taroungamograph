import Image from 'next/image'
import ceoImage from '../assets/images/ceo.png'


const AboutCEO: React.FC<{}> = ({ }) => {

    return (
        <section className="bg-black dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 space-y-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <p className="text-lg">
                        C’était pendant ma formation en ingénierie civile que je me découvre cette passion pour le domaine artistique en général et le motion design en particulier. Ce qui a commencé comme un hobby est devenu plus tard un métier que j’exerce aujourd’hui avec passion.
                    </p>
                    <p className="text-lg">
                        A ce jour je suis à plus de 300 vidéos motion design réalisées pour une clientèle très diversifiée allant des entreprises vers des applications, des écoles de formation, des start-up, des artistes musiciens, des entités étatiques en passant par les banques, agences de communication ou de publicité et les créateurs de contenus sur les réseaux sociaux.
                    </p>
                    <p className="text-lg">
                        Mon état d’esprit, mon adaptabilité, mon professionnalisme et le respect des délais sont des qualités qui m’aident à faire face aux défis du quotidien et me permettent de me rapprocher de mes objectifs qui sont de produire des travaux toujours de meilleures qualités, d’acquérir une renommée internationale et bien sûr avoir la satisfaction de ma clientèle.
                    </p>
                    <p className="text-lg">
                        Si vous voulez faire partie de cette aventure, contactez-moi !!!
                    </p>
                    <p className="text-lg italic">
                        TaroungaMograph fait de votre vision une réalité.
                    </p>

                </div>
                <div className="flex p-6">
                    <Image src={ceoImage} height="512px" width="360px" alt="Groupe Bikoula ComplexeCEO image" className="object-cover" />
                </div>

            </div>
        </section>
    )
}

export default AboutCEO