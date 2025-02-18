import './globals.css'
import Background from '@/components/background/background';

export default function Home() {
  return (
    <main>

      <Background imageURL=''>
        <h1>About This Project</h1>
        <section>
          <h1>Introduction</h1>
          <p>This website is a personal database for my learning endeavors.
             The idea is to take notes, but also integrate my learnings
             into the very structure of the website for future reference.
             I intend to create a searchable, feature rich platform that
             enables rapid development. </p>
          <p>Technologies: JavaScript, React, Next.js, Python, Django</p>
        </section>
      </Background>

    </main>
  );
}