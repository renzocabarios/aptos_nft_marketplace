"use client";
import { WalletSelector } from "@/components/wallet-selector";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Image from "next/image";

export default function Home() {
  const { account, connected, network, wallet, changeNetwork } = useWallet();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <WalletSelector />
    </div>
  );
}
