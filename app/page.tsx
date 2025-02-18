import './globals.css'
import Background from '@/components/background/background';

export default function Home() {
  return (
    <main>

      <Background imageURL='https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg'>
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