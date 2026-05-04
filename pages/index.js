'use client'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'

export default function Home() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()

  if (!isConnected) return (
    <button className="bg-blue-500 text-white p-3 cursor-pointer" onClick={() => open()}>
      Connect Wallet
    </button>
  )
  return (
    <div>
      <p>Connected as: {address}</p>
    </div>
  );
}
