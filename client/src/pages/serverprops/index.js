export async function getServerSideProps() {


  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default function Notification({ data }) {
  console.log(data);
  return (
    <>
      <div className="notbox">
        <h5 className="mt-3 mx-5"> Notification Panel </h5>
        {data && data.length > 0 ? (
          data.map((e) => <p className="mx-4 mt-2">{e.name}</p>)
        ) : (
          <p className="mx-3 mt-4 mb-2" style={{ color: "green" }}>
            No notifications at the moment
          </p>
        )}
      </div>
    </>
  );
}
