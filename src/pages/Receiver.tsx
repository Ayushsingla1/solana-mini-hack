import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const RecievingPage = () => {
    return <div className="flex justify-center items-center flex-col gap-y-10 bg-black text-white h-screen w-screen">
        <span>Get you funds...</span>
        <WalletMultiButton/>
    </div>
}

export default RecievingPage;