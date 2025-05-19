import axios from "axios";
import Navbar from "../Components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { useParams } from "react-router-dom";
import { DB_URL } from "../utils/details";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import bs58 from "bs58";

const Receive = () => {
    const { connect, connected, publicKey, signMessage } = useWallet();
    const { id } = useParams();

    const handleClaim = async () => {
        try {
            if (!signMessage) {
                alert("Connect wallet");
                return;
            }

            const message = "Claiming you sol gift";
            const encodedMessage = new TextEncoder().encode(message);
            const res = await signMessage(encodedMessage);

            const signatureBase58 = bs58.encode(res);
            console.log("Base58 Signature:", signatureBase58);

            const db = await axios.post(`${DB_URL}/receiveEmail`, {
                data: {
                    signature: signatureBase58,
                    receiverHashedEmail: id,
                    pubkey : publicKey
                }
            })

            console.log(db);

        } catch (e) {
            alert("try again later");
        }
    };

    const handleGifts = async () => {
        try {
            const gifts = await axios.get(`${DB_URL}/gifts`, {
                params: {
                    hashedEmail: id
                }
            });
            console.log(gifts.data.amount)
            alert(`you have a gift of ${gifts.data.amount / LAMPORTS_PER_SOL} SOL`)
        } catch (e) {
            alert("Server error! Try again later")
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Navbar />
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <h1 className="text-4xl font-bold mb-6 text-purple-400">🎉 Welcome to SolDrop Central 🎉</h1>

                {!connected ? (
                    <button
                        onClick={connect}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition mb-6"
                    >
                        👻 Connect Phantom Wallet
                    </button>
                ) : (
                    <p className="text-green-400 font-semibold text-lg mb-6">
                        🔓 Wallet Connected! <br /> Address: {publicKey?.toBase58().slice(0, 6)}...{publicKey?.toBase58().slice(-4)}
                    </p>
                )}

                <div className="bg-gray-800 rounded-xl p-8 shadow-xl w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-purple-300">How to Setup Phantom Wallet (No Nerd Degree Needed 🧠)</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-300 text-left">
                        <li>🧑‍🚀 Go to <a href="https://phantom.app/" className="underline text-purple-400" target="_blank">phantom.app</a></li>
                        <li>🧩 Click “Download” and pick your browser. (Chrome is your bestie.)</li>
                        <li>👻 Add Phantom. A purple ghost will appear in your browser. Don’t worry, it’s friendly.</li>
                        <li>📧 Click “Create Wallet” and choose “Sign up with Email” – easy peasy!</li>
                        <li>📬 Enter your email, get OTP, and boom 💥 you’re in Web3!</li>
                        <li>🪙 Come back here and click Connect above. You're ready to claim SOL like a boss.</li>
                    </ol>
                </div>

                <div className="mt-10 flex gap-6">
                    <button
                        onClick={handleGifts}
                        className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-bold text-black transition"
                    >
                        🎁 See My Gifts
                    </button>
                    <button
                        onClick={handleClaim}
                        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold text-black transition"
                    >
                        🤑 Claim My SOL
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Receive;
