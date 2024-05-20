import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Skeleton } from '../ui/skeleton'
import { AccountABI, FactoryABI } from '@/app/utils/abis'
import {
  CONTRACT_FACTORY_ADDRESS,
  CONTRACT_NULL_ADDRESS
} from '@/lib/constants'
import {
  useAccount,
  useReadContract,
  useSimulateContract,
  useWriteContract
} from 'wagmi'
import { useCallback, useMemo, useState } from 'react'
import { Tab } from '../Tab'

export const CreateAccount = () => {
  const account = useAccount()
  const [loading, setLoading] = useState(false)
  const { data: hash, writeContract, error: errorMint } = useWriteContract()
  const { data: profile, error: errorOrders } = useReadContract({
    abi: FactoryABI,
    address: CONTRACT_FACTORY_ADDRESS,
    account: account.address,
    functionName: 'get_account',
    args: [account.address],
    query: {
      enabled: true,
      refetchInterval: 500,
      staleTime: 500
    }
  })

  const isExisted = useMemo(() => {
    if (profile) {
      if (profile === CONTRACT_NULL_ADDRESS) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }, [profile])

  const { data: isPrepareCreate, error: errorPrepareCreate } =
    useSimulateContract({
      abi: FactoryABI,
      address: CONTRACT_FACTORY_ADDRESS,
      functionName: 'create_account'
    })

  const onCreateAccount = useCallback(async () => {
    try {
      await writeContract({
        abi: FactoryABI,
        address: CONTRACT_FACTORY_ADDRESS,
        functionName: 'create_account'
      })
    } catch (error) {
      console.error(error)
    }
  }, [isExisted, account.address])

  console.log('CONTRACT_FACTORY_ADDRESS', CONTRACT_FACTORY_ADDRESS)
  console.log('isPrepareCreate', isPrepareCreate)
  console.log('errorPrepareCreate', errorPrepareCreate)

  return (
    <div className="flex w-full flex-col">
      {isExisted ? (
        <Tab />
      ) : (
        <div className="flex w-full flex-col h-[100%] gap-[20px] relative">
          <div className="grid grid-cols-4 w-full gap-[30px]">
            <Skeleton className="h-[125px] rounded-xl" />
            <Skeleton className="h-[125px] rounded-xl" />
            <Skeleton className="h-[125px] rounded-xl" />
            <Skeleton className="h-[125px] rounded-xl" />
          </div>
          <div className="flex flex-col w-full gap-[20px] h-[100%]">
            <Skeleton className="h-[25px] w-[150px] rounded-sm" />
            <div className="flex flex-col justify-between h-[100%]">
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
              <div className="grid grid-col grid-cols-[200px_auto_auto_auto_auto_auto_auto_auto_200px_200px] gap-[10px]">
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[auto] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
                <Skeleton className="w-[200px] h-[25px] rounded-xl" />
              </div>
            </div>
          </div>
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading'
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated')

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      style: {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none'
                      }
                    })}>
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            type="button"
                            className="w-[200px] h-[40px] font-[calc(var(--font-family))] font-[500] bg-btn-bg text-text-color text-[14px] px-[12px] h-[32px] rounded-[6px] hover:bg-btn-bg-hover">
                            Connect Wallet
                          </button>
                        )
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            className="w-[200px] h-[40px] font-[calc(var(--font-family))] font-[500] bg-btn-bg text-text-color text-[14px] px-[12px] h-[32px] rounded-[6px] hover:bg-btn-bg-hover"
                            onClick={openChainModal}
                            type="button">
                            Wrong network
                          </button>
                        )
                      }

                      return !isExisted ? (
                        <button
                          className="w-[200px] h-[40px] font-[calc(var(--font-family))] font-[500] bg-btn-bg text-text-color text-[14px] px-[12px] h-[32px] rounded-[6px] hover:bg-btn-bg-hover"
                          onClick={onCreateAccount}
                          type="button">
                          Create Account
                        </button>
                      ) : (
                        <Tab />
                      )

                      // <div style={{ display: 'flex', gap: 12 }}>
                      //   <button
                      //     onClick={openChainModal}
                      //     type="button"
                      //     className="font-bold text-[12px] flex items-center">
                      //     {chain.hasIcon && (
                      //       <div
                      //         style={{
                      //           background: chain.iconBackground,
                      //           width: 12,
                      //           height: 12,
                      //           borderRadius: 999,
                      //           overflow: 'hidden',
                      //           marginRight: 4
                      //         }}>
                      //         {chain.iconUrl && (
                      //           <img
                      //             alt={chain.name ?? 'Chain icon'}
                      //             src={chain.iconUrl}
                      //             style={{ width: 12, height: 12 }}
                      //           />
                      //         )}
                      //       </div>
                      //     )}
                      //     {chain.name}
                      //   </button>

                      //   <button
                      //     onClick={openAccountModal}
                      //     type="button"
                      //     className="font-bold text-[12px]">
                      //     {account.displayName}
                      //     {account.displayBalance
                      //       ? ` (${account.displayBalance})`
                      //       : ''}
                      //   </button>
                      // </div>
                    })()}
                  </div>
                )
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      )}
    </div>
  )
}
