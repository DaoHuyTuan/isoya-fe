'use client'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useReadContract } from 'wagmi'
import { AccountABI } from './utils/abis'

import { Header } from '@/components/Header'
import { Tab } from '@/components/Tab'
import { CreateAccount } from '@/components/CreateAccount'
import {
  CONTRACT_FACTORY_ADDRESS,
  CONTRACT_NULL_ADDRESS
} from '@/lib/constants'
import { useMemo } from 'react'

export default function Home() {
  const account = useAccount()
  // const { data, error } = useReadContract({
  //   abi: AccountABI,
  //   address: '0xCc3168039FDB782D48d28C5A5876593f8D03340e',
  //   account: account.address,
  //   functionName: 'get_order_by_id',
  //   args: [0]
  // })

  // const { data: orders, error: errorOrders } = useReadContract({
  //   abi: AccountABI,
  //   address: '0xCc3168039FDB782D48d28C5A5876593f8D03340e',
  //   account: account.address,
  //   functionName: 'get_orders'
  // })

  console.log('account.address', account.address)

  return (
    <div className="flex w-full justify-center">
      <div className="w-full md:w-[1400px] pt-[20px] px-[10px]">
        <div className="flex h-[100%]">
          <CreateAccount />
        </div>
      </div>
    </div>
  )
}
