'use client'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useReadContract } from 'wagmi'
import { AccountABI } from './utils/abis'

import { Header } from '@/components/Header'
import { Tab } from '@/components/Tab'
import { CreateAccount } from '@/components/CreateAccount'
import { CONTRACT_FACTORY_ADDRESS } from '@/lib/constants'

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

  const { data: orders, error: errorOrders } = useReadContract({
    abi: AccountABI,
    address: CONTRACT_FACTORY_ADDRESS,
    account: account.address,
    functionName: 'get_orders'
  })

  // console.log('account', account)
  // console.log('data', data)
  console.log('orders', orders)
  console.log('errorOrders', errorOrders)

  // console.log('error', error)

  return (
    <div className="flex w-full justify-center">
      <div className="w-full md:w-[1400px] pt-[20px] px-[10px]">
        {!account || (!account.address && orders) ? (
          <div className="flex h-[100%]">
            <CreateAccount />
          </div>
        ) : (
          <Tab />
        )}
      </div>
    </div>
  )
}
