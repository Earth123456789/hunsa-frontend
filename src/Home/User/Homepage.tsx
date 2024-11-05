import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout_Customer";
import CardList from "../../components/ServiceList"; // Ensure this imports your ServiceList component correctly
import { fetchServices } from "../../api/service"; // Adjust the import path as necessary
import { NavLink } from "react-router-dom";

interface Service {
  _id: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description?: string;
  price?: number;
}

const Homepage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Hansa Salon";

    const getServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Error fetching services",
        );
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

  return (
    <Layout>
      <section>
        <article>
          <img
            src="https://hunsa-frontend.s3.us-east-1.amazonaws.com/homepage_1.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGAE1cHPP6QVYb9TnyHpUsZCDul%2FHIbNf67j37J0HqH%2BAiAYY0HRUxy3Gu7SmeJOBKuT%2ByfPZB5%2FMSxB6sfmQSP26yriAwj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDEzNDAxMjQ0MTM1NyIMdL2%2BLqh1GOXMrG1KKrYDec6Spxctl0Ix1ZebyjHZfsVW6RKJYaDAa1a8FnhTW0WTEZovTAW302LtpuvuXE2uq5oFD%2BPr91d16FAce3kjx2Yz58CGPuzwENcZw75hwavXBUCvAXNUIRjT1qen9JEKv4wd2buU9zlh18KPsoUMVotLBu3ipCtX7Wk3NGoT%2Bp7h8MztmLzoZb%2F2UvI33l2JciWKGJ%2BwUcmsnwM6lmmj8SGvm43BfcMWoqwgo3gCmfMdIQVpVS9%2B9SWMA5FNZsGs5Uw5z3OZLpcCZyKXHsd4dpmF3bCDGeTdri36e4lbsaGUJr3DW%2BlVP77zAIF4Ovl7APBG2q502zIRFuWzHLlAom9ZRm7pST8Pg6O6Y4yAwcmgU5WFj0axweO3MdsFZC8Y3U3ZEWInC878jKSykT5a4wxIGU17dk2VTYKIMohggmUCe9LC2X%2FyAzN6wlqYKdm7zzUMuD9OVEkCsQYwnQuz6wmSoRspaVsfMx0hkMNsLrTyOcuQMK9zaiOs5KUl5ykRTvTEVdQIMKL2k4qsHgMim1eb4DaDx4S%2Fg3ZVgdgeK6wt8LTwCwdtO8KPF3eevAtbHpQrCI52MLnNprkGOrgCBa7mNP7HfAEGbues8ThIHZ%2FF%2FV%2B0yOt2BEmap8%2BcHu5rwaD7vEeCPfK5ueWGE6w21giApkxbJvlvb8gD2rKw8a3AcngbXPQ4LaLo8GJwlaFj320ENI%2B0IFAkP99TldirqP7vx039qCXOfHx8fPql2Dq%2FiIIgnvIbmaF8G8yV2qdPnmyAmFHhdwaJ9mYKpEI3gnLsBbZNrxiF1D746%2BmH8f31JvnSRq%2FF1occ07lYkNSvGKCi29%2FrjiiIK4Ei46dGTFbNd6pjcnCBgq4DrHN7RIrm%2Fl9w2FpBuoa2N0j6lvWuMRV2G7TI8IbcGSOjy0H27M6rDizRtcJK25XcLe4mLLDBxQmH6enopGaGarzbI85iv9v4h6UqzHU7B3A%2FjBvfkaiCE9TBRNCXUVCmMWk1McwCgeD1%2FTXz&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAR6M6DSMG6Y4TUG5S%2F20241105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241105T055657Z&X-Amz-Expires=21600&X-Amz-SignedHeaders=host&X-Amz-Signature=f2c33fdde249eb54e4124380cd501228aef533868b4a663e9827c5525d1f9a39"
            alt="Homepage background"
            className="w-full h-screen blur-md"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4 animate">Hansa Salon</h1>
            <p className="text-2xl mb-8 text-gray-700">Beauty Salon Services</p>
            <div className="flex flex-row">
              <NavLink className="btn btn-base-200 mr-4" to="/all_staff">
                Our Staff
              </NavLink>
              <NavLink className="btn btn-primary" to="/all_service">
                All Services
              </NavLink>
            </div>
          </div>
        </article>
      </section>

      <section>
        <article className="m-16">
          <h1 className="text-4xl font-bold">New Services!</h1>
          <p className="text-2xl text-gray-500">Let’s Try</p>
        </article>
        <article>
          <CardList services={services} />
        </article>
      </section>
    </Layout>
  );
};

export default Homepage;
