// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate,
//     NavLink,
//     useNavigate,
//     createSearchParams,
//   } from 'react-router-dom';
// import { useSearchParams } from "react-router-dom";

// const useNavigation = () => {

//     const [searchParams, setSearchParams] = useSearchParams();

//     const day = searchParams.get("day");
//     const startTime = searchParams.get("startTime");
//     const endTime = searchParams.get("endTime");
//     const borough = searchParams.get("borough");
//     const pageNo = searchParams.get("pageNo");
//     const pageSize = searchParams.get("pageSize");
//     const sortBy = searchParams.get("sortBy");
//     const navigate = useNavigate();
//     return (pathname: string, params: string) =>
//     navigate(`${pathname}=${createSearchParams(params)}`);
// }
