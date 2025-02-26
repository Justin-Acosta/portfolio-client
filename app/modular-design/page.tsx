import Background from "@/components/background/background";
import Snippet from "@/components/snippet/snippet";
import { pallet } from "../utilities"


export default function Page() {
  return (
    <main>
      <h1>Modular Design</h1>

      <section>
        <h1>Initial Thoughts</h1>
        <p>So far, I've found that the primary design goal of
          a good modular component is that it can used quickly
          and easily when constructing a web page. It is important
          to have a clear purpose in mind and put thought into the
          user's (the software developer's) experience.</p>
      </section>

      <section>
        <h1>Global Styling</h1>
        <p>Usually,when you think React components when you think "modular",
          but styling basic HTML tags with ease of use in mind can save
          a lot of time. I'm avoiding the use of class names as much as
          possible so that I can focus on constructing the webpage content.
          Here's what the code for this paragraph looks like.
        </p>
        <Snippet>{`
<section>
  <h1>Global Styling</h1>
  <p>Usually,when you think React components when you think "modular",
  but styling basic HTML tags with ease of use in mind can save
  a lot of time. I'm avoiding the use of class names as much as
  possible so that I can focus on constructing the webpage content.
  Here's what the code for this paragraph looks like.
  </p>
</section>
          `}</Snippet>
        <p>Mua, nice and simple!</p>
      </section>

      <section>
        <h1>Nav Bar</h1>
        <p>Ahh, the NavBar. A staple of any functioning website. Ideally,
          this component never gets reused, but stays mounted during the
          entire user experience. Next.js is doing some heavy lifting here,
          and I'm leveraging its functionality to make it very easy to add
          new routes.
        </p>
        <Snippet>{`
<div
    className={styles.menuButton}>
</div>
<div className={styles.navContainer}>
    <Link
        className={styles.link}
        href={'/'}>
        Home
    </Link>
    <Link
        className={styles.link}
        href={'/responsive-design'}>
        Responsive Design
    </Link>
    <Link
        className={styles.link}
        href={'/modular-design'}>
        Modular Design
    </Link>
</div>
        `}</Snippet>
      </section>

      <section>
        <h1>Code Snippets</h1>
        <p>This is a perfect case for a modular component. Afterall, this
          website is all about explaining and using code, so I created a
          "Snippet" component that makes it easy to insert correctly formated
          and fully featured code snippets. Below is a look at how the component
          is used on a page.
        </p>
        <Snippet>{`
<Snippet> {"

  if(simple) {
    easyProject = true
  } else {
    project.panic() 
  }

"}</Snippet>
      `}</Snippet>
      </section>

    </main>
  );
}