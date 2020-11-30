import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'
import { AboutPage } from '../../interfaces/about';

interface AboutPageProps {
  data: AboutPage
}

export default function About({ data }: AboutPageProps) {
  return (
    <MainLayout title="About">
      <h1>{data.title}</h1>
      <button onClick={() => Router.push('/')}>
        Go back to home
      </button>
      <button onClick={() => Router.push('/posts')}>
        Go to Posts
      </button>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`)
  const data: AboutPage = await response.json();

  return {
    data
  }
}