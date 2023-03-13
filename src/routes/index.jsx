import {
  CartPage,
  ChosenCategory,
  Comunity,
  CyberSport,
  Error,
  Locations,
  Reviews,
  Sales,
  Searched,
} from "../pages";

export const routes = [
  { id: "page-1", path: "/comunity", element: <Comunity /> },
  { id: "page-2", path: "*", element: <Error /> },
  { id: "page-3", path: "/locations", element: <Locations /> },
  { id: "page-4", path: "/sales", element: <Sales /> },
  { id: "page-5", path: "/searched/:search", element: <Searched /> },
  { id: "page-6", path: "/categories/:type", element: <ChosenCategory /> },
  { id: "page-7", path: "/cartPage", element: <CartPage /> },
  { id: "page-7", path: "/reviews", element: <Reviews /> },
  { id: "page-7", path: "/cyberSport", element: <CyberSport /> },
];