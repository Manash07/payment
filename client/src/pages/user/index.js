import { useSelector } from "react-redux";
import SecondaryHeader from "@/components/secondarynavbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import Home from "./home";
import Midsection from "./midsection";
import Footer from "@/components/footer";

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

const User = ({ data }) => {
  const { role } = useSelector((state) => state.nameManash);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (role != "user") {
      setTimeout(() => {
        toast({
          title: "Connection Problem",
          description: "Please try again",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        router.push("../login");
      }, 500);
    }
  }, [role]);

  return (
    <>
      <SecondaryHeader data={data} />
      <Home />
      <Midsection />
      <Footer/>
    </>
  );
};

export default User;

// import Link from 'next/link';

// const items = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
//   { id: 3, name: 'Item 3' },
// ];

// const ItemsList = () => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Link href={`/items/${item.id}`}>
//             <a>{item.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ItemsList;
