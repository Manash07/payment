"use client";

import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();
 

  return {
    props: {
     data
    },
  };
}

export default function Home({data}) {

 
  const geoDetails = data.map((e) => e.address.geo);

  return (
    <>
      {data.length > 0 && (
        <>
          {geoDetails?.map((e) => {
            return <p>{e.lat}</p>;
          })}
        </>
      )}
    </>
  );
}
