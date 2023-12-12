// src/components/Budgetrow.js
import React from 'react';

const Budgetrow = ({ budget, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{budget.item}</td>
      <td>{budget.budget}</td>
      <td>
        <button onClick={() => onEdit(budget.budget_id)}>Edit</button>
        <button onClick={() => onDelete(budget.budget_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Budgetrow;
