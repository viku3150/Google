import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { API_KEY, CONTEXT_KEY } from "../Keys.js";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link
          rel="icon"
          href="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
        />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || 0;
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  //Pass the Server has rendered... Pass the result to the client
  return {
    props: {
      results: data,
    },
  };
}
