import './globals.css'
import Background from '@/components/background/background';

export default function Home() {
  return (
    <main>

      <Background imageURL='https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg'>
        <h1>About This Project</h1>
        <section>
          <h1>Introduction</h1>
          <p>This website is my personal portfolio, but not only that,
            this is a place where I can record my thoughts and satisfy
            my curiosity. Here, you'll find my organized thoughts About
            software development concepts and practices.</p>
          <p>Technologies: JavaScript, React, Next.js, Python, Django</p>
        </section>
      </Background>

    </main>
  );
}