import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ onPagination, newerClass, olderClass }) => (
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
  onPagination: PropTypes.func.isRequired
};

export default Pagination;
