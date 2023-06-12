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
          duration: 1000,
          isClosable: true,
        });

        router.push("../login");
      }, 500);
    }
  }, [role]);

  return (
    <>
      <Header />
      <section className="userlist">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Full Name </th>
              <th scope="col">Phone Number</th>
              <th scope="col">Password</th>
              <th scope="col">Status</th>
              <th scope="col">Email</th>
              <th scope="col"> Take Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Manash Ghimire</td>
              <td>9861333464</td>
              <td>M@n@sh123</td>
              <td>VERIFIED</td>
              <td>manashghimire2072@gmail.com</td>
              <td>
                <i class="bi bi-file-text-fill" style={{ color: "gray" }}></i>
                <i
                  class="bi bi-check-circle-fill mx-2"
                  style={{ color: "green" }}
                ></i>
                <i class="bi bi-trash-fill" style={{ color: "red" }}></i>
                <i class="bi bi-pencil-fill mx-2" style={{ color: "blue" }}></i>
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Sushil Ghimire</td>
              <td>9841219151</td>
              <td>Sushil@123</td>
              <td>UNKNOWN</td>
              <td>sushil.369ghimire@gmail.com</td>
              <td>
                <i class="bi bi-file-text-fill" style={{ color: "gray" }}></i>
                <i
                  class="bi bi-check-circle-fill mx-2"
                  style={{ color: "green" }}
                ></i>
                <i class="bi bi-trash-fill" style={{ color: "red" }}></i>
                <i class="bi bi-pencil-fill mx-2" style={{ color: "blue" }}></i>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Sarita Ghimire</td>
              <td>9841428416</td>
              <td>Saritag@123</td>
              <td>PENDING</td>
              <td>saritaghimire56@gmail.com</td>
              <td>
                <i class="bi bi-file-text-fill" style={{ color: "gray" }}></i>
                <i
                  class="bi bi-check-circle-fill mx-2"
                  style={{ color: "green" }}
                ></i>
                <i class="bi bi-trash-fill" style={{ color: "red" }}></i>
                <i class="bi bi-pencil-fill mx-2" style={{ color: "blue" }}></i>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Admin;
