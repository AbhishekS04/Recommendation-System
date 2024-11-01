// CloseButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const CloseButton = ({ onClick }) => (
    <FaTimes style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }} onClick={onClick} />
);

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CloseButton;
