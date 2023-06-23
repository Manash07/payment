import { useSelector } from "react-redux";
import SecondaryHeader from "@/components/secondarynavbar";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import Home from "./home";

const User = () => {
  const {role } = useSelector((state) => state.nameManash);
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
      <SecondaryHeader />
      <Home />
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
