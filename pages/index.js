import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    <h1>Spiderman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/shows/[id]" as={`shows/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=spiderman");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return { shows: data.map(entry => entry.show) };
}

export default Index;