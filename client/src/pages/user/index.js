import { useSelector } from "react-redux";
import SecondaryHeader from "@/components/secondarynavbar";
import { useEffect } from "react";
import { Avatar, WrapItem, AvatarBadge, Badge } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

const User = () => {
  const { name, role } = useSelector((state) => state.nameManash);
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

      <section className="midsection mt-4 mx-4">
        <div className="card" style={{ width: "18rem" }}>
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
            <h6 className="card-title mb-4">
              Name: {""} {name}
            </h6>
            <h6 className="card-title mb-4">
              KYC verification status:
              <Badge className="mx-2" variant="solid" colorScheme="yellow">
                Unknown
              </Badge>

            </h6>
            <a href="/login" style={{fontSize:"20px", color:"red",}}> Logout </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
