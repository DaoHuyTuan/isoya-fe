import Image from 'next/image'
export const Footer = () => {
  return (
    <div className="flex h-[32px] justify-end p-[10px]">
      {/* <div>footer</div> */}
      <div className="flex text-[12px] items-center gap-[5px] cursor-pointer self-end">
        <Image
          src={'/icons/lang.svg'}
          width={12}
          height={12}
          alt="lang"
          className="cursor-pointer"
        />
        <span className="text-[12px] leading-[12px]">Language</span>
      </div>
    </div>
  )
}
