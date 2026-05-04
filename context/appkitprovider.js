'use client'

import { createAppKit } from '@reown/appkit/react'
import { projectId, networks, ethersAdapter, metadata } from '../config'

createAppKit({
  adapters: [ethersAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
    email: false,      // nonaktifkan social login
    socials: false
  },
  themeMode: 'light'
})

export function AppKitProvider({ children }) {
  return <>{children}</>
}