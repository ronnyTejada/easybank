import "./style.css";
import React, { useEffect, useState } from "react";
import { headersTable } from "../../utils/const";
import Pagination from "../pagination/pagination";
import { deleteArticle } from "../../controllers";
import { Link } from "react-scroll";
const limit = 5;
const Table = ({ data, setData, edit }) => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);

  const tableLength = () => {
    let num = data.length / 5;
    let arr = [];

    for (let i = 0; i <= num + 1; i++) {
      arr.push(i);
      setRows(arr);
    }
  };

  useEffect(() => {
    tableLength();

    console.log(data)
  }, [data]);

  return (
    <div className="tableWrapper">
      <table>
        <tr>
          {headersTable.map((header) => {
            return <th>{header}</th>;
          })}
        </tr>
        {data.slice((page - 1) * limit, page * limit).map((item) => {
          return (
            <tr>
              <td>
                <span className="author">{item.author}</span>
              </td>
              <td>{item.title}</td>
              <td>{item.content.slice(0, 50) + "..."}</td>
              <td>{item.createdAt.slice(0, 10)}</td>
              <td>
                <span
                  className="delete"
                  onClick={() => deleteArticle(item.id, setData)}
                >
                  Delete
                </span>
                <Link
                  className="edit"
                  smooth={true}
                  onClick={() => edit(item, true)}
                  to={"form"}
                >
                  Edit
                </Link>
              </td>
            </tr>
          );
        })}
      </table>

      <Pagination rows={rows} setCurrentPage={setPage} currentPage={page} />
    </div>
  );
};

export default Table;
