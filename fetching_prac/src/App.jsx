import { useEffect, useState } from 'react'

function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setdata(data);
    }
    getData();
  }, [])

  // const data = getData();
  return (
    <>
      <div className="container mx-auto grid grid-cols-4 gap-2">
        {data && data.map((posts) => (
          <div className="bg-lime-100 text-lime-950 text-center p-3" key={posts.id}>
            <img src="https://source.unsplash.com/random/?winter" alt="dsd" />
            <h1 className='font-bold text-lg border border-b-lime-900'>
              {posts.title}
            </h1>
            <p className='font-semibold'>User ID: {posts.userId}, ID: {posts.id}</p>
            <p>
              {posts.body}
            </p>

          </div>
        ))}
        <div className="bg-red-500">{data && data[0].title}</div>

      </div>
    </>
  )
}

export default App
