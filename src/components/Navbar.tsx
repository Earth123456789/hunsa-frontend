import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  button1?: string;
  button2?: string;
  button3?: string;
  button4?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  button1,
  button2,
  button3,
  button4,
}) => {
  return (
    <nav className="navbar bg-secondary p-2 flex flex-col md:flex-row justify-between items-center fixed top-0 w-full z-10 backdrop-blur-xl">
      <img
        src="https://hunsa-frontend.s3.us-east-1.amazonaws.com/logo.png?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGAE1cHPP6QVYb9TnyHpUsZCDul%2FHIbNf67j37J0HqH%2BAiAYY0HRUxy3Gu7SmeJOBKuT%2ByfPZB5%2FMSxB6sfmQSP26yriAwj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDEzNDAxMjQ0MTM1NyIMdL2%2BLqh1GOXMrG1KKrYDec6Spxctl0Ix1ZebyjHZfsVW6RKJYaDAa1a8FnhTW0WTEZovTAW302LtpuvuXE2uq5oFD%2BPr91d16FAce3kjx2Yz58CGPuzwENcZw75hwavXBUCvAXNUIRjT1qen9JEKv4wd2buU9zlh18KPsoUMVotLBu3ipCtX7Wk3NGoT%2Bp7h8MztmLzoZb%2F2UvI33l2JciWKGJ%2BwUcmsnwM6lmmj8SGvm43BfcMWoqwgo3gCmfMdIQVpVS9%2B9SWMA5FNZsGs5Uw5z3OZLpcCZyKXHsd4dpmF3bCDGeTdri36e4lbsaGUJr3DW%2BlVP77zAIF4Ovl7APBG2q502zIRFuWzHLlAom9ZRm7pST8Pg6O6Y4yAwcmgU5WFj0axweO3MdsFZC8Y3U3ZEWInC878jKSykT5a4wxIGU17dk2VTYKIMohggmUCe9LC2X%2FyAzN6wlqYKdm7zzUMuD9OVEkCsQYwnQuz6wmSoRspaVsfMx0hkMNsLrTyOcuQMK9zaiOs5KUl5ykRTvTEVdQIMKL2k4qsHgMim1eb4DaDx4S%2Fg3ZVgdgeK6wt8LTwCwdtO8KPF3eevAtbHpQrCI52MLnNprkGOrgCBa7mNP7HfAEGbues8ThIHZ%2FF%2FV%2B0yOt2BEmap8%2BcHu5rwaD7vEeCPfK5ueWGE6w21giApkxbJvlvb8gD2rKw8a3AcngbXPQ4LaLo8GJwlaFj320ENI%2B0IFAkP99TldirqP7vx039qCXOfHx8fPql2Dq%2FiIIgnvIbmaF8G8yV2qdPnmyAmFHhdwaJ9mYKpEI3gnLsBbZNrxiF1D746%2BmH8f31JvnSRq%2FF1occ07lYkNSvGKCi29%2FrjiiIK4Ei46dGTFbNd6pjcnCBgq4DrHN7RIrm%2Fl9w2FpBuoa2N0j6lvWuMRV2G7TI8IbcGSOjy0H27M6rDizRtcJK25XcLe4mLLDBxQmH6enopGaGarzbI85iv9v4h6UqzHU7B3A%2FjBvfkaiCE9TBRNCXUVCmMWk1McwCgeD1%2FTXz&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAR6M6DSMG6Y4TUG5S%2F20241105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241105T055727Z&X-Amz-Expires=21600&X-Amz-SignedHeaders=host&X-Amz-Signature=a2b83c54eb1dd4098c2d29c31b532d9b33999e3e55f35285c059aa76deae6e7c"
        alt="Logo"
        style={{ width: "auto", height: "75px" }}
      />

      <div className="flex flex-col md:flex-row items-center mt-4">
        <NavLink
          className="btn lg:mr-12 bg-[#5A3D5C] text-white hover:bg-[#3E2A4D]"
          to="/"
        >
          {button1}
        </NavLink>
        <NavLink
          className="btn lg:mr-12 bg-[#35524A] text-white hover:bg-[#2A413C]"
          to="/all_service"
        >
          {button2}
        </NavLink>
        <NavLink
          className="btn lg:mr-12 bg-[#6B4F4F] text-white hover:bg-[#543D3D]"
          to="/all_staff"
        >
          {button3}
        </NavLink>
        <NavLink
          className="btn lg:mr-12 bg-[#483c5c] text-white hover:bg-[#443e6b]"
          to="/admin/login"
        >
          {button4}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
