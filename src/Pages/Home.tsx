import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center mt-10">
        <table className="border dark:border-gray-400 xl:w-screen lg:w-[800px] w-[400px]  text-center">
          {/* table header */}
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Age</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            <tr className="dark:odd:bg-gray-100 dark:even:bg-white">
              <td className="p-2 before:content-['•'] before:mr-2 dark:before:text-blue-500 ">
                Alice
              </td>
              <td className="p-2">Admin</td>
              <td className="p-2">18</td>
            </tr>
            <tr className="dark:odd:bg-gray-100 dark:even:bg-white">
              <td className="p-2 before:content-['•'] before:mr-2 dark:before:text-green-500 ">
                Bob
              </td>
              <td className="p-2">Editor</td>
              <td className="p-2">24</td>
            </tr>
            <tr className="dark:odd:bg-gray-100 dark:even:bg-white">
              <td className="p-2 before:content-['•'] before:mr-2 dark:before:text-red-500 ">
                Charlie
              </td>
              <td className="p-2">Viewer</td> 
              <td className="p-2">30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
