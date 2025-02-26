
export default function Page() {
    return (
      <main>

        <h1>Responsive Design</h1>

        <article>
          <h1>Mobile First</h1>
          <p>I'm designing this website to be viewed on a mobile device,
            but as a self proclaimed desktop power user, I need to show
            some love to that sweet 16/9. I decided to transition formats
            based on aspect ratio, using 4/4 as my threshold because few
            displays are ever a perfect square.
          </p>
        </article>

        <article>
          <h1>Nav Bar</h1>
          <p>I've used Tailwind and Bootstrap to make responsive nav bars,
            before but I've always wanted to create one on my own. Change
            the screen to a mobile format, and you'll see the fruits of
            my self imposed challenge yourself.
          </p>
        </article>

      </main>
    );
  }