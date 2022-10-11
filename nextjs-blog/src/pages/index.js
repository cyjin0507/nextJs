import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps() {
  console.log('ssr')
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>

      <h1>
        <Link href="/csr">
          <a>csr로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg">
          <a>ssg로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/isr">
          <a>ISR로</a>
        </Link>
      </h1>
    </>
  )
}
