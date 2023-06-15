import { useSelector } from "react-redux";
import SecondaryHeader from "@/components/secondarynavbar";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import Home from "@/components/formComponents/home";

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
