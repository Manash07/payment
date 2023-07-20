import { useRouter } from "next/router";
// import { Formik } from "formik";
// import * as Yup from "yup";
import servicesList from "@/data/services";
import { formsList } from "@/data/services";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Select } from "@chakra-ui/react";
const DynamicPage = () => {
  const router = useRouter();
  const { id } = router.query; // This will extract the dynamic parameter from the URL
  const managerList = servicesList?.filter((e) => e.title == id);
  const listFields = formsList?.filter((e) => e.title == id);
  const finalList = listFields?.map((e) => e.formField);
  console.log(finalList);
  return (
    <>
      <Header />
      <div>
        <form className="dynamic-form mb-5">
          <h3 className="mx-3 mt-2">Dynamic ID: {id}</h3>
          {managerList.map((e) => {
            return (
              <>
                <h4 className="mx-3 mt-2 mb-2">Name of Manager: {e.manager}</h4>
              </>
            );
          })}
          {finalList[0]?.map((e) => {
            return (
              <div>
                <label className="mx-3 mt-3 mb-2 form-label">
                  {" "}
                  {e.fieldTitle}{" "}
                </label>
                <input className="input-custom mx-3 mt-2 mb-4 " type={e.type} />
              </div>
            );
          })}

          <button
            className="btn btn-success mx-3 mb-3 mt-3"
            onClick={() => {
              router.push("/");
              console.log("Back");
            }}
          >
            Back
          </button>

          <button className="btn btn-success mx-3 mb-3 mt-3">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DynamicPage;
