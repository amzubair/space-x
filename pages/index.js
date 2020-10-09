import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import Main from "../component/main.js";

import axios from "axios";
import { withRouter } from "next/router";
import Header from "../component/header.js";
import Filters from "../component/filters.js";
import Missions from "../component/missions.js";
import Footer from "../component/footer.js";

function Home({ data, router }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        <main>
          <Filters router={router} />
          <Missions data={data} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(Home);

export async function getServerSideProps(context) {
  // export async function getStaticProps() {
  // Fetch data from external API

  // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true
  // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
  const { query } = context;

  const launchYear = query.launch_year
    ? `&launch_year=${query.launch_year}`
    : "";
  const launchSuccess = query.launch_success
    ? `&launch_success=${query.launch_success}`
    : "";
  const landSuccess = query.land_success
    ? `&land_success=${query.land_success}`
    : "";

  let queryString = `https://api.spaceXdata.com/v3/launches?limit=100${launchYear}${launchSuccess}${landSuccess}`;
  // console.log(query, queryString);

  // axios.get('url', {headers: {"x-dsi-restful":1}})
  const { data } = await axios.get(queryString);

  // Pass data to the page via props
  return { props: { data } };
}
