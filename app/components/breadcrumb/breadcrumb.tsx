import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import GrassIcon from "@mui/icons-material/Grass";

type Props = {};

const Breadcrumb = (props: Props) => {
  return (
    <nav className="flex justify-between" aria-label="Breadcrumb">
      <ol className="inline-flex items-center mb-3 sm:mb-0">
        <li>
          <div className="flex items-center">
            <button
              id="dropdownProject"
              data-dropdown-toggle="dropdown-project"
              className="flex items-stretch gap-1 px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
            >
              <LocalMallIcon fontSize="inherit" />
              Store
            </button>
          </div>
        </li>
        <span className="mx-2 text-gray-400">/</span>
        <li aria-current="page">
          <div className="flex items-center">
            <button
              id="dropdownDatabase"
              data-dropdown-toggle="dropdown-database"
              className="flex items-stretch gap-1 px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
            >
              <GrassIcon fontSize="inherit" />
              Indoor
            </button>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
