import navlist from "@/data/secnavlist";
import { useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import { setLogout } from "@/redux/reducerslice/userSlice";
import { useDispatch } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { WrapItem, Avatar, AvatarBadge, Spinner } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const SecondaryHeader = () => {
  const { name } = useSelector((state) => state.nameManash);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

//   <Button onClick={onOpen} className="btnopt">
//   Trigger modal
// </Button>

const handleChange = () => {

  
  onOpen()

 

  setTimeout(() => {
    dispatch(setLogout())
  }, "2000");

}


  return (
    <>
      <section className="header-two">
        <nav className="navbar navbar-expand-lg htwo">
          <div className="container-fluid">
            {navlist.map((e, id) => (
              <a className="navbar-brand" href="/" style={{ fontSize: "15px" }}>
                {e.link}
              </a>
            ))}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <a>
                  <i class="bi bi-bell-fill" style={{ fontSize: "25px" }}></i>
                </a>

                <Menu className="logout">
                  <MenuButton>
                    <WrapItem className="mx-3">
                      <Avatar
                        name={name}
                        size="sm"
                        bg="pink"
                        color="black"
                        borderColor="black"
                      >
                        <AvatarBadge boxSize="1em" bg="#0B9E00" />
                      </Avatar>
                    </WrapItem>
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title={name}>
                      <MenuItem>
                        {" "}
                        <Button className="btnopt">
                          <i class="bi bi-gear-wide-connected mx-2"></i>{" "}
                          Settings
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Modal
                          closeOnOverlayClick={false}
                          onClose={onClose}
                          isOpen={isOpen}
                          isCentered
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>
                              Please wait logging you out...
                            </ModalHeader>
                            <ModalBody>
                              <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                                style={{ marginLeft: "10rem" }}
                              />
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                        <Button
                          className="btnopt"
                          onClick={handleChange}
                        >
                          <i className="bi bi-box-arrow-right mx-2"></i>Logout
                        </Button>
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>

                <form className="d-flex mx-2" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default SecondaryHeader;
