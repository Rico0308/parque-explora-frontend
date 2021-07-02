import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Card.css';
import { Alert } from '@material-ui/lab';

function Cards() {

  const [experiencias, setExperiencias] = useState([]);

  const API = 'http://localhost:5000';

  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 4;
  let data = experiencias.slice((currentPage - 1) * perPage, currentPage * perPage);

  let ellipsisLeft = false;
  let ellipsisRight = false
  const pages = Math.ceil(experiencias.length / perPage)
  const pagination = [];

  for (let i = 1; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push(
        { id: i, ellipsis: false }
      );
    } else {
      if (i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1) {
        pagination.push(
          { id: i, ellipsis: false }
        );
      } else if (i > 1 && i < currentPage && !ellipsisLeft) {
        pagination.push(
          { id: i, ellipsis: true }
        );
        ellipsisLeft = true;
      } else if (i < pages && i > currentPage && !ellipsisRight) {
        pagination.push(
          { id: i, ellipsis: true }
        );
        ellipsisRight = true;
      }
    }
  }

  const siguiente = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const anterior = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const changePage = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
  }

  const loadExperiencias = async () => {
    const res = await axios.get(API)
    setExperiencias(res.data);
  }

  useEffect(() => {
    loadExperiencias();
  }, []);

  return (
    <div className="container" id="Inicio">
      <div className="heading">
        <h1>
          Experiencias Parque Explora
        </h1>
      </div>

      <div className="row">
        {
          experiencias.length > 0 ?
            data.map(expe => (
              <div className="card" key={expe._id}>
                <div className="card-header">
                  <img className="card-img" src={expe.url_relacionada} alt={expe.sala} />
                </div>
                <div className="card-body">
                  <h2>{expe.titulo}</h2>
                  <p>
                    {expe.descripcion}
                  </p>
                </div>
              </div>

            ))
            :
            <Alert severity="error">No hay experiencias Actualmente</Alert>
        }
      </div>

      <div className="pagination">
          <a onClick={anterior} className="prev" href="/#"><i className="fas fa-angle-left"></i></a>
          {pagination.map(page => {
            if (!page.ellipsis) {
              return <a
                href="/#"
                className="num"
                key={page.id}
                onClick={(e) => changePage(e, page.id)}
              >
                {page.id}
              </a>

            } else {
              return <span key={page.id} className="num" >&hellip;</span>
            }
          })}
          <a onClick={siguiente} className="next" href="/#"><i className="fas fa-angle-right"></i></a>
      </div>

    </div>
  );
}

export default Cards;