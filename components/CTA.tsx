import Link from "next/link"


const CTA: React.FC<{}> = ({ }) => {

    return (
        <section className="py-6 text-gray-800">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
                    Vous souhaitez collaborer avec moi?
                </h1>
                <button className="px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-100">
                    <Link href="/contact">Contactez-moi</Link>
                </button>
            </div>
        </section>
    )
}

export default CTA