import { Badge, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const Sidebar = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSizeClick = (e) => {
    setSize(e);
    onOpen();
  };
  return (
    <>
      Name:
      <span style={{ color: "blue", fontSize: "15px" }}> {name} </span>
      <h6 className="card-title mb-4">
        KYC Verification Status:
        <Badge className="mx-2" variant="solid" colorScheme="purple">
          Pending
        </Badge>
      </h6>
      <Button onClick={() => handleSizeClick("full")} key={"full"} m={4}>
        KYC Form
      </Button>
    </>
  );
};

export default Sidebar;
