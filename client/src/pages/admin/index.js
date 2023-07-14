import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import AdminHeader from "@/components/adminHeader";
import { Badge } from "@chakra-ui/react";

const Admin = () => {
  
  const { name, role } = useSelector((state) => state.nameManash);
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        const res = await fetch(
          "http://localhost:8080/userdata",
          requestOptions
        );
        const data = await res.json();
        const { users, ...others } = data;
        setUserData(users);
        console.log(userData);

        if (res.status === 200) {
          toast({
            title: "Loading data",
            description: "Please wait.......",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Could not load data",
            description: "Please try again later",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (err) {
        console.log(err);
        toast({
          title: "Connection Problem",
          description: "Please try again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    if (role !== "superadmin") {
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
    } else {
      fetchData();
    }
  }, [role]);

  return (
    <>
      <AdminHeader />

      <section className="userlist mt-4">
        <h5
          className="mx-3 g-4 mb-4 px-2 py-2 mt-4"
          style={{ background: "pink", width: "23.5rem" }}
        >
          {" "}
          List of users with their respective details{" "}
        </h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Full Name </th>
              <th scope="col">Phone Number</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
              <th scope="col"> Take Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e) => {
              return (
                <>
                  <tr>
                    <td>#</td>
                    <td>
                      {e.name}
                      {e.role == "superadmin" ? (
                        <Badge
                          variant="solid"
                          colorScheme="purple"
                          className="mx-2"
                        >
                          Admin
                        </Badge>
                      ) : null}
                    </td>
                    <td>{e.phoneNumber}</td>
                    <td>************</td>
                    <td>{e.email}</td>
                    <td>
                      <i
                        class="bi bi-file-text-fill"
                        style={{ color: "gray" }}
                      ></i>

                      <i
                        class="bi bi-pencil-fill mx-3"
                        style={{ color: "black" }}
                      ></i>
                      <i
                        class="bi bi-trash-fill mx-1"
                        style={{ color: "red" }}
                      ></i>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* <section>
        {userData.slice(0,1).map((e) => {
          return <Input
            type="text"
            name="id"
            value={e.name}
            style={{border:"2px solid black", padding:"5px", margin:"5px"}}
            contentEditable
            
          />;
         
        })}
      </section> */}
    </>
  );
};

export default Admin;
