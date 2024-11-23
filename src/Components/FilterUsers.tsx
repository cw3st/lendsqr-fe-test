import React from "react";
import "../Styles/FilterUser.css";

type FilterProps = {
  filters: {
    organization: string;
    username: string;
    email: string;
    phone: string;
    date: string;
    status: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      organization: string;
      username: string;
      email: string;
      phone: string;
      date: string;
      status: string;
    }>
  >;
  applyFilters: () => void;
  resetFilters: () => void;
  closeFilterModal: () => void;
};

const FilterUsers: React.FC<FilterProps> = ({
  filters,
  setFilters,
  applyFilters,
  resetFilters,
  closeFilterModal,
}) => {
  return (
    <div>
      <div className="filter-overlay" onClick={closeFilterModal}></div>
      <div className="filter-modal">
        <div className="filter-parent">
          <div className="filter-organization">Organization</div>
          <input
            placeholder="Organization"
            value={filters.organization}
            onChange={(e) =>
              setFilters({ ...filters, organization: e.target.value })
            }
          />
        </div>
        <div className="filter-parent">
          <div className="filter-organization">Username</div>
          <input
            placeholder="Username"
            value={filters.username}
            onChange={(e) =>
              setFilters({ ...filters, username: e.target.value })
            }
          />
        </div>
        <div className="filter-parent">
          <div className="filter-organization">Email</div>
          <input
            placeholder="Email"
            value={filters.email}
            onChange={(e) => setFilters({ ...filters, email: e.target.value })}
          />
        </div>
        <div className="filter-parent">
          <div className="filter-organization">Phone Number</div>
          <input
            placeholder="Phone Number"
            value={filters.phone}
            onChange={(e) => setFilters({ ...filters, phone: e.target.value })}
          />
        </div>
        <div className="filter-parent">
          <div className="filter-organization">Date Joined</div>
          <input
            placeholder="Date Joined"
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          />
        </div>
        <div className="filter-parent">
          <div className="filter-organization">Status</div>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="status-select"
          >
            <option value="" className="select-status">
              Status
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
        <button onClick={resetFilters} className="reset-button">
          Reset
        </button>
        <button onClick={applyFilters} className="filter-button">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterUsers;
