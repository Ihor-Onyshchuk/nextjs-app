import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = 'Next App' }) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next,javascript,react,nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/posts'>
          <a>Posts</a>
        </Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          positon: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        nav a:hover {
          color: #d7f9e0
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}