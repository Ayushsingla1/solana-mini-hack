import Navbar from "../Components/Navbar";



const Homepage = () => {
    return <div className="flex flex-col gap-y-6 bg-gray-900">
        <Navbar />
        <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-teal-400 mb-4">
                    🎁 Dropify
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Send crypto to anyone via email or phone — no wallet required. The
                    easiest way to onboard your friends to Solana.
                </p>
            </header>

            {/* Why We Built This */}
            <section className="mb-20 text-center">
                <h2 className="text-3xl font-bold mb-3 text-white">🚧 The Problem</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    You can’t send crypto to someone without asking for their wallet
                    address. Most people don’t even have one. That’s a huge barrier to
                    adoption.
                </p>
            </section>

            {/* Sender Experience */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-6 text-teal-300 text-center">
                    ✉️ For Senders
                </h2>
                <div className="text-gray-300 max-w-3xl mx-auto space-y-4 text-lg">
                    <p>✅ Enter recipient's email or phone number</p>
                    <p>✅ Choose an amount (SOL, SPL token, or NFT)</p>
                    <p>✅ We generate a secure claim link and send it to them</p>
                    <p>
                        ✅ Funds are held safely in a smart contract until claimed (or
                        refunded after expiry)
                    </p>
                </div>
            </section>

            {/* Receiver Experience */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-6 text-teal-300 text-center">
                    💌 For Recipients
                </h2>
                <div className="text-gray-300 max-w-3xl mx-auto space-y-4 text-lg">
                    <p>📩 They get a message with a special claim link</p>
                    <p>🧠 If they don’t have a wallet, we guide them to create one</p>
                    <p>🔐 They connect a wallet and claim the gift instantly</p>
                    <p>🎉 No need to ever ask: “Hey, what’s your wallet address?”</p>
                </div>
            </section>

            <footer className="mt-20 text-center text-sm text-gray-500">
                Made with ❤️ for a more inclusive crypto world. Powered by Solana.
            </footer>
        </div>
    </div>
}

export default Homepage;