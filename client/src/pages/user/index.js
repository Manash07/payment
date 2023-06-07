import { useSelector } from "react-redux";
import Header from "@/components/header";
import SecondaryHeader from "@/components/secondarynavbar";
import { useEffect } from "react";
import { Avatar, WrapItem, AvatarBadge } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

const User = () => {
  
  const { name, role } = useSelector((state) => state.nameManash);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (role != 'user') {

      toast({
        title: "Connection Problem",
        description: "Please try again",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        router.push("../login");
      }, 3000);
    }
  }, [role]);

    
    return (
    <>
      <SecondaryHeader />

      <section className="midsection mt-4 mx-4">
        <div className="card" style={{ width: "12rem" }}>
          <a className="mx-3 mt-4">
            <WrapItem>
              <Avatar
                name={name}
                size="sm"
                bg="#11959D"
                color="white"
                borderColor="black"
              >
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </WrapItem>
          </a>

          <div className="card-body">
            <h6 className="card-title">{name}</h6>
          </div>
        </div>
      </section>
    </>
  );
};


export default User;
