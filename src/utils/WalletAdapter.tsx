import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletProvider,ConnectionProvider } from "@solana/wallet-adapter-react";
import type React from "react";
import { useMemo } from "react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";

const WalletAdapter = ({children} : {children : React.ReactNode}) => {

    const endpoint = clusterApiUrl("devnet");
    const wallets = useMemo(() => [],[]);

    return (
        <ConnectionProvider endpoint = {endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {/* <WalletMultiButton> */}
                        {children}
                    {/* </WalletMultiButton> */}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletAdapter;