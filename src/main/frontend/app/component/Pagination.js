import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ onPagination, newerClass, olderClass, count, page, totalPages }) => (
  <nav aria-label="...">
    <ul className="pager">
      <li className="previous">
        <a
          type="button"
          className={'btn btn-link ' + newerClass}
          onClick={() => {
            onPagination(-1);
          }}
        >
          <span aria-hidden="true">←</span> Newer
        </a>
      </li>
      <li>All todos({count}), Page {page}/{totalPages}</li>
      <li className="next">
        <a
          type="button"
          className={'btn btn-link ' + olderClass}
          onClick={() => {
            onPagination(1);
          }}
        >
          Older
          <span aria-hidden="true">→</span>
        </a>
      </li>
    </ul>
  </nav>
);

Pagination.propTypes = {
  onPagination: PropTypes.func.isRequired,
  newerClass: PropTypes.string.isRequired,
  olderClass: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Pagination;
