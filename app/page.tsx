"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { AccountABI } from "./utils/abis";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Home() {
  const account = useAccount();
  const { data, error } = useReadContract({
    abi: AccountABI,
    address: "0xCc3168039FDB782D48d28C5A5876593f8D03340e",
    account: account.address,
    functionName: "get_order_by_id",
    args: [0],
  });

  const { data: orders, error: errorOrders } = useReadContract({
    abi: AccountABI,
    address: "0xCc3168039FDB782D48d28C5A5876593f8D03340e",
    account: account.address,
    functionName: "get_orders",
  });
  console.log("account", account);
  console.log("data", data);
  console.log("orders", orders);

  console.log("error", error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton />
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
