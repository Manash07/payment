import Cards from "./cards";

const Home = () => {
  return (
    <>
      <section className="midsection mt-3">
        <div className="container-fluid main">
          <Cards />
        </div>
      </section>
    </>
  );
};

export default Home;

// import banklist from "@/data/banklist";

// const getBranchesByName = (bankName) => {
//   const branches = banklist
//     .find((bank) => bank.name === bankName)
//     .branch.map((branch) => branch.name);

//   return branches;
// };

// // Example usage
// const branches = getBranchesByName("Nepal Investment Mega Bank");
// console.log(branches);
