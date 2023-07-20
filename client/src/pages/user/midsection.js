import servicesList from "@/data/services";
import { useRouter } from "next/router";

const Midsection = () => {
  const router = useRouter();

  return (
    <>
      <section style={{ background: "#F5F7FD" }}>
        <div className="container mt-4">
          <div
            className="row row-cols-1 row-cols-md-4 g-4"
            style={{
              marginTop: "27rem",
              paddingBottom: "2rem",
              paddingLeft: "2rem",
            }}
          >
            {servicesList.map((e) => {
              return (
                <div className="col">
                  <div className="card" style={{ width: "17rem" }}>
                    <img
                      src={e.img}
                      className="card-img-top mt-2"
                      alt="..."
                      style={{
                        height: "5rem",
                        width: "5rem",
                        marginLeft: "5.5rem",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title text-center"
                        style={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        {e.title}
                      </h5>
                      <a
                        onClick={() => router.push(`/dynamic/${e.title}`)}
                        href="#"
                        class="btn btn-success viewmore mt-3"
                        style={{ marginLeft: "4rem", fontSize: "12px" }}
                      >
                        Open now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Midsection;
