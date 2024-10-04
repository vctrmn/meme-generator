const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!publicKey || !privateKey || !urlEndpoint) {
  throw new Error("NEXT_PUBLIC_PUBLIC_KEY environment variable is not set");
}

/* const imageKit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
}); */

export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  console.log(searchParams);

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
