import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import Image from "next/image";
export const Watchlist = () => {
  return (
    <div className="border rounded-[5px]">
      <Table className="w-full">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead className="w-[200px] font-bold">Symbol</TableHead>
            <TableHead className="text-right font-bold w-[100px]">
              Price
            </TableHead>
            <TableHead className="text-right font-bold w-[100px]">
              Entry
            </TableHead>
            <TableHead className="text-right font-bold">Token Amount</TableHead>
            <TableHead className="text-right font-bold">Amount</TableHead>
            <TableHead className="text-right font-bold">Day P&L</TableHead>
            <TableHead className="text-right font-bold">Total P&L</TableHead>
            <TableHead className="text-right font-bold">Market cap</TableHead>
            <TableHead className="text-right font-bold">Volume 24h</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell className="w-[200px] text-left">
              <div className="flex gap-[10px]">
                <Image src={"/eth.png"} alt="eth" width={20} height={20} />
                <span className="font-bold">Ethereum</span>
                <span className="text-[12px]">ETH</span>
              </div>
            </TableCell>
            <TableCell className="text-right">3400</TableCell>
            <TableCell className="text-right">3000</TableCell>
            <TableCell className="text-right">300</TableCell>
            <TableCell className="text-right">343243$</TableCell>
            <TableCell className="text-right">+30%</TableCell>
            <TableCell className="text-right">+12%</TableCell>
            <TableCell className="text-right">223.003.432$</TableCell>
            <TableCell className="text-right">3.003.432$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell className="w-[200px] text-left">
              <div className="flex gap-[10px]">
                <Image src={"/eth.png"} alt="eth" width={20} height={20} />
                <span className="font-bold">Bitcoin</span>
                <span className="text-[12px]">BTC</span>
              </div>
            </TableCell>
            <TableCell className="text-right">3400</TableCell>
            <TableCell className="text-right">3000</TableCell>
            <TableCell className="text-right">300</TableCell>
            <TableCell className="text-right">343243$</TableCell>
            <TableCell className="text-right">+30%</TableCell>
            <TableCell className="text-right">+12%</TableCell>
            <TableCell className="text-right">223.003.432$</TableCell>
            <TableCell className="text-right">3.003.432$</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
