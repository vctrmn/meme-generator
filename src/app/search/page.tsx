import ImageKit from "imagekit";
import { unstable_noStore } from "next/cache";
import ResultList from "./results-list";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!publicKey || !privateKey || !urlEndpoint) {
  throw new Error("NEXT_PUBLIC_PUBLIC_KEY environment variable is not set");
}

const imageKit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
});

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  unstable_noStore();

  const files = await imageKit.listFiles({
    searchQuery: `name:${searchParams.q}`,
  });

  return (
    <div className="container mx-auto space-y-8 py-8">
      <h1 className="text-2xl font-bold">Search Results</h1>
      <ResultList files={files} />
    </div>
  );
}
