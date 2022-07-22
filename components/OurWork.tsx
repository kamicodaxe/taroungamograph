import Image from "next/image"
import Slider from 'react-awesome-slider';
import styles from './OurWork.module.css';

const OurWork: React.FC<{}> = ({ }) => {
    return (
        <section className="bg-black text-gray-100 py-16 space-y-12">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">Mes réalisations!</h2>
                {/* <p className="dark:text-gray-400">Libero minima optio qui</p> */}
            </div>
            <Slider
                animation="cubeAnimation"
                cssModule={styles}
            >
                {
                    [
                        "https://www.youtube.com/embed/L4EiJ3qV53g",
                        "https://www.youtube.com/embed/ylpzl016Ees",
                        "https://www.youtube.com/embed/zXJ5OUF29LE",
                        "https://www.youtube.com/embed/7P_68VTEqYY",

                    ].map(link => (
                        <div key={link} className="container mx-auto lg:px-16">
                            <div className="flex flex-col md:flex-row md:items-center lg:items-start">
                                <div className="flex justify-center px-4 md:px-0">
                                    <iframe width="560" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <div className="flex flex-col p-2 pb-4 md:pl-8 ">
                                    <h3 className="text-2xl font-bold text-gray-100 mb-2">Bogital</h3>
                                    <p className="text-gray-500 text-md">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            {/* <button>Voir tout</button> */}
        </section>
    )
}

export default OurWork