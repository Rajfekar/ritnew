import Image from "next/image"
export default function Home() {
  const user: string[] = ["mighty", "raju", "bheem", "ben10", "kenichi"]
  return (
    <main>
      <div>
        <h2>Form</h2>
        <ul>
          {user.map((val: string, i: number) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
        <form action="/" method="post">
          <input type="text" name="name" id="name" title="helo" />
          <input type="text" name="email" id="email" title="hello" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
