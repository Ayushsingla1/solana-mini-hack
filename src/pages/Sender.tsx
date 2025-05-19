import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import axios from "axios";
import { DB_URL, Owner } from "../utils/details";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Sender = () => {
    const [data, setData] = useState({ email: "", mobile: "", amount: "" });
    const [selectedOption, setSelectedOption] = useState<"email" | "phone">("email");

    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    const sendHandler = async () => {
        if (!data.amount) return alert("Please enter an amount");

        if (selectedOption === "email" && data.email) {
            const ix = SystemProgram.transfer({
                fromPubkey: new PublicKey(publicKey!),
                toPubkey: new PublicKey(Owner),
                lamports: Number(data.amount) * LAMPORTS_PER_SOL,
            });

            const tx = new Transaction().add(ix);
            await sendTransaction(tx, connection);

            const response = await axios.post(`${DB_URL}/emailTransfer`, {
                data: {
                    email: data.email,
                    amount: data.amount,
                    sender: publicKey!,
                },
            });

            console.log(response);
            alert("Success");
        } else if (selectedOption === "phone" && data.mobile) {
            const response = await axios.post(`${DB_URL}/mobileTranfer`, {
                data: {
                    mobile: data.mobile,
                    amount: data.amount,
                    sender: publicKey,
                },
            });

            console.log(response);
            alert("Success");
        } else {
            alert("Please fill all fields");
        }
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="flex justify-center items-center py-16 px-4">
                <div className="bg-gray-800 rounded-lg p-10 shadow-lg w-full max-w-xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">Send SOL</h2>

                    <div className="flex justify-center mb-6 gap-4">
                        <button
                            onClick={() => setSelectedOption("email")}
                            className={`px-4 py-2 rounded-md font-semibold ${
                                selectedOption === "email"
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-700 text-gray-300"
                            }`}
                        >
                            Send by Email
                        </button>
                        <button
                            onClick={() => setSelectedOption("phone")}
                            className={`px-4 py-2 rounded-md font-semibold ${
                                selectedOption === "phone"
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-700 text-gray-300"
                            }`}
                        >
                            Send by Phone
                        </button>
                    </div>

                    <div className="space-y-6">
                        {selectedOption === "email" && (
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={changeHandler}
                                    placeholder="Enter receiver's email"
                                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        )}

                        {selectedOption === "phone" && (
                            <div>
                                <label htmlFor="mobile" className="block mb-1 text-gray-300">
                                    Phone Number
                                </label>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    value={data.mobile}
                                    onChange={changeHandler}
                                    placeholder="Enter receiver's phone number"
                                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        )}

                        {selectedOption && (
                            <div>
                                <label htmlFor="amount" className="block mb-1 text-gray-300">
                                    Amount (in SOL)
                                </label>
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    value={data.amount}
                                    onChange={changeHandler}
                                    placeholder="e.g. 0.01"
                                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        )}

                        {selectedOption && (
                            <button
                                onClick={sendHandler}
                                className="w-full py-2 mt-4 bg-purple-600 hover:bg-purple-700 transition rounded-md font-semibold text-white"
                            >
                                Send SOL
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sender;
