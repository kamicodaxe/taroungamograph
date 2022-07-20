import Image from "next/image"


const OurWork: React.FC<{}> = ({ }) => {
    return (
        <section className="bg-black text-gray-100 py-16 space-y-12 h-screen">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">Mes réalisations!</h2>
                {/* <p className="dark:text-gray-400">Libero minima optio qui</p> */}
            </div>
            <div className="container mx-auto flex flex-col md:flex-row lg:px-16">
                <div className="flex bg-white">
                    <Image src="https://source.unsplash.com/TlRQin0iwjE/1080x1920" width={1280} height={720} className="object-cover" />
                </div>
                <div className="flex flex-col p-2 pb-4 md:pl-8">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">Bogital</h3>
                    <p className="text-gray-500 text-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurWork