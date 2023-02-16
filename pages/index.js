import Head from 'next/head'
import User from '../components/user/user.js';
import GotoTop from '../components/gototop/gototop.js';
import GithubCard from '../components/githubCard/githubcard'
import Heatmap from '../components/heatmap/heatmap.js';
export default function Home() {
  return (
    <>
      <Head class="dark">
        <title>GitSpotlight</title>
        <meta name="description" content="Poertfolio website developed by Abhishek Tiwari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name ="keywords" content = "backend, portfolio, Abhishek, Abhishek Tiwari, NSUT, NEXT, next.js"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <User/>
     <GotoTop/>
     <GithubCard/>
     {/* <Heatmap/> */}
     

      </main>
    </>
  )
}