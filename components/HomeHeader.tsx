import Image from 'next/image'
import ceoImage from '../assets/images/ceo.png'


const HomeHeader: React.FC<{}> = ({ }) => {

    return (
        <section className="text-gray-800">
            {/* <MapView /> */}
            <div className="container flex flex-col justify-center align-center p-6 lg:flex-row lg:justify-between ">
                <div className="flex flex-col justify-start pl-6 pt-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:pt-32">
                    <h1 className="text-6xl font-bold leading-none text-center lg:text-left md:text-5xl">
                        Je suis Tarounga Mbaye,
                        <span className="text-primary"> Motion Designer!</span>
                    </h1>
                    {/* <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p> */}
                    <div className="hidden sm:flex flex-col mt-12 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-primary text-white">
                            Contactez moi
                        </a>
                    </div>

                </div>
                <div className="flex bg-transparent justify-center">
                    <Image src={ceoImage} height="512px" width="360px" alt="Tarounga Mbaye Armel - Taroungamograph" className="object-cover" />
                </div>
            </div>
        </section>
    )
}

export default HomeHeader