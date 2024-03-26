export default function CartWidget({ greeting }) {
    return (
        <main>
            <section className="min-h-screen flex justify-center items-center">
                <h1 className="font-bold text-7xl">{greeting}</h1>
            </section>
        </main>
    )
}