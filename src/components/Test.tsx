import { sql } from "@vercel/postgres";

export default async function Test(): Promise<JSX.Element> {
  const result = await sql`
SELECT * from needs
`;

  return <div>{JSON.stringify(result)}</div>;
}
