import { Badge, Button } from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  Drawer,
  Input,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Image,
} from "@chakra-ui/react";

const Personal = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name } = useSelector((state) => state.nameManash);
  const btnRef = React.useRef();

  return (
    <>
     
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} className="mx-5">
        MY DETAILS <i class="bi bi-person mx-2"></i>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{name}</DrawerHeader>

          <DrawerBody>
            <Stack direction="row">
              <Image
                boxSize="100px"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1580483046931-aaba29b81601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt={name}
              />
            </Stack>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mt-4">
                KYC STATUS <Badge colorScheme="purple">PENDING</Badge>
              </li>
              <li className="list-group mt-2">Phone Number 9861333464</li>
              <li className="list-group mt-2">Bank Account Linked 0</li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Personal;
