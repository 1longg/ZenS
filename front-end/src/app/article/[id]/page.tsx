import Link from "next/link";
import { cookies } from "next/headers";
import { headers } from 'next/headers'

/* eslint-disable react/no-unescaped-entities */
async function getData(id: string) {
 const cookie = cookies().get('id')?.value
  const data = await fetch(`http://localhost:4000/article/${id}`, {
    method: 'GET',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cookie': `id=${cookie}; SameSite=None; Secure; HttpOnly`  
    }
  });
  if (!data.ok) throw new Error("Failed to fetch data");
  return data.json();
}

export default async function Home({ params }: { params: { id: string } }) {
  const article = await getData(params.id);

  return (
    <>
      {article.data ? (
        <>
          <div className="py-8 text-text-main text-md mx-24 sm:mx-36 md:mx-44 lg:mx-52 xl:mx-64">
            {article.data.content}
          </div>
          <div className="mb-4 flex items-center border-t py-16 border-slate-200 justify-center mx-48 sm:mx-56 md:mx-64 lg:mx-80 xl:mx-96 mt-4">
            <Link
              href={`/article/${Number(article.data.id) + 1}`}
              className="bg-main-blue px-6 py-1 md:px-8 md:py-2 lg:px-12 lg:py-3 xl:px-16 xl:py-4 mr-8 border-b-bottom-button-blue border-b-4 text-white text-xl cursor-pointer hover:bg-opacity-80"
            >
              This is Funny!
            </Link>
            <Link
              href={`/article/${Number(article.data.id) + 1}`}
              className="bg-main-green px-6 py-1 md:px-8 md:py-2 lg:px-12 lg:py-3 xl:px-16 xl:py-4 border-b-bottom-button-green border-b-4  text-white text-xl cursor-pointer hover:bg-opacity-80"
            >
              This is not Funny.
            </Link>
          </div>
        </>
      ) : (
        <div className="flex justify-center py-8 text-text-main text-md mx-24 sm:mx-36 md:mx-44 lg:mx-52 xl:mx-64">
          "That's all the jokes for today! Come back another day!"
        </div>
      )}
    </>
  );
}
