import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Watchlist } from "./watchlist";
import { useAccount } from "wagmi";

export const Tab = () => {
  const account = useAccount();
  if (!account || !account.address) {
    return null;
  }

  return (
    <Tabs defaultValue="watchlist" className="w-full">
      <TabsList>
        <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
        <TabsTrigger value="market">Market</TabsTrigger>
      </TabsList>
      <TabsContent value="watchlist">
        <Watchlist />
      </TabsContent>
      <TabsContent value="market">Change your password here.</TabsContent>
    </Tabs>
  );
};
