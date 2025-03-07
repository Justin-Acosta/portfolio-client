import Snippet from "@/components/snippet/snippet.jsx";

export default function Page() {
  return (
    <main>
      <h1>API Requests</h1>

      <article>
        <h1>Initial Thoughts</h1>
        <p>Although I'm able to implement fetch requests in my client code and
          put together a working API, I would like to improve my ability to talk about
          this aspect of web development. Communicating technical details like this is
          important for interaction with co-workers and clients alike.
        </p>
      </article>

      <article>
        <h1>What are the steps?</h1>
        <p>First, lets begin with a high level overview. What steps occur when a client sends
          a request ot an API?
          <ol>
            <li>The client sends a request.</li><br></br>
            <li>The API receives and parses request</li><br></br>
            <li>The API executes logic and interacts with the database</li><br></br>
            <li>The API prepares and sends a response</li><br></br>
            <li>The client processes and displays the received data</li><br></br>
          </ol>
          Now, we'll explore each of these steps in more detail. This will still be fairly broad
          as the goal here is to practice using the language associated with these concepts and 
          not to create a technical guide.
        </p>
      </article>

      <article>
        <h1>Step One: The Client Sends A Request</h1>
        <p>The client's job is to take user-oriented data and convert it into a request payload to
          be sent to an API for processing, storage, or both. Typically, the client will expect a
          response from the API. The request payload will need:
          <ol>
            <li>The API URL</li><br></br>
            <li>An HTTP Method (GET, POST, PUT, or DELETE)</li><br></br>
            <li>Request Headers</li><br></br>
            <li>A Request Body in JSON format</li><br></br>
            <li>Sometimes Request Params</li><br></br>
          </ol>
        </p>
      </article>

      <article>
        <h1>Step Two: The API Recieves and Parses the Request</h1>
        <p>Now, the client's request payload has been sent to the API URL where a server is listening
          for requests. The point of this step is to find out where to send the received data using the
          following steps:
          <ol>
            <li>Sometimes, the API checks to make sure the request came from a trusted client URL</li><br></br>
            <li>The API URL is parsed and an endpoint is determined</li><br></br>
            <li>The payload is sent to the correct endpoint and the requested HTTP Method is invoked</li><br></br>
          </ol>
        </p>
      </article>

      <article>
        <h1>Step Three: The API Executes Logic and Interacts With the Database</h1>
        <p>The requested HTTP Method for this particular endpoint has now been invoked. Depending on
          the method, the data is handled in different ways. It is common to have custom methods as
          well that perform specific business oriented logic. Here is the general overview of what happens:
          <ol>
            <li>Relevant data is stored in or retrieved from the database</li><br></br>
            <li>The data is manipulated and business logic is executed</li><br></br>
            <li>Manipulated data is stored in the database if necessary</li><br></br>

          </ol>
        </p>
      </article>

      <article>
        <h1>Step Four: The API Prepares and Sends A Response</h1>
        <p>Now, the HTTP method is still being executed. The API is finished manipulating data, performing
          business logic, and interacting with the database. There are a couple steps left:
          <ol>
            <li>Any response data is converted to JSON format</li><br></br>
            <li>A response is sent back to the client with any relevant response data</li><br></br>
          </ol>
          Sometimes,there will be errors while the HTTP method is being executed. It is important to have
          robust error detection and handling, and send a relevant error code back to the client in the
          response if something went wrong.
        </p>
      </article>

      <article>
        <h1>Step Five: The Client Processes and Displays the Received Data</h1>
        <p>A response has been sent back to the client. During this entire process, the client has been
          awaiting a response so that it can continue executing its logic. Let's wrap this up:
          <ol>
            <li>The client parses the response payload and extracts data</li><br></br>
            <li>The client displays relevant data to the user</li><br></br>
          </ol>
        </p>
      </article>

    </main>
  );
}