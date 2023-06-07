import { useSelector } from "react-redux";
import Header from "@/components/header";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

const Admin = () => {
  const { name, role } = useSelector((state) => state.nameManash);
  const router = useRouter();
  const toast = useToast();


  useEffect(() => {
    if (role != "superadmin") {
      setTimeout(() => {

        toast({
          title: "Connection Problem",
          description: "Please try again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });

        router.push("../login");
      }, 3000);


    }
  }, [role]);

  return (
    <>
      <Header />
    </>
  );
};

export default Admin;
