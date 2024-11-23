import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaEllipsisH } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import '../Styles/DashboardUsers.css';
import axios from 'axios';
import filterIcon from '../assets/filter-results-button (1).png';
import FilterUsers from './FilterUsers';

type User = {
    organization: string;
    username: string;
    email: string;
    phone: string;
    date: string;
    status: string;
};

type DashboardUsersProps = {
    cumulation: Array<{ icon: string; title: string; total: string; }>;
    onUserClick: any;
};

const DashboardUsers: React.FC<DashboardUsersProps> = ({ cumulation, onUserClick }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [filters, setFilters] = useState({ organization: '', username: '', email: '', phone: '', date: '', status: '' });
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jumpToPage, setJumpToPage] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const usersPerPage = 10;
    
    

    const updateAll = async () => {
        try {
            const result = await axios.get("https://run.mocky.io/v3/df5c90c0-5ba4-453a-a6db-aa96f37453b3");
            setUsers(result.data);
            setFilteredUsers(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        updateAll();
    }, []);

    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const openFilterModal = () => setIsFilterModalOpen(true);
    const closeFilterModal = () => setIsFilterModalOpen(false);

    const applyFilters = () => {
        const newFilteredUsers = users.filter(user => {
            return (
                (filters.organization ? user.organization.includes(filters.organization) : true) &&
                (filters.username ? user.username.includes(filters.username) : true) &&
                (filters.email ? user.email.includes(filters.email) : true) &&
                (filters.phone ? user.phone.includes(filters.phone) : true) &&
                (filters.date ? user.date.includes(filters.date) : true) &&
                (filters.status ? user.status.toLowerCase() === filters.status.toLowerCase() : true)
            );
        });
        setFilteredUsers(newFilteredUsers);
        closeFilterModal();
    };

    const resetFilters = () => {
        setFilters({ organization: '', username: '', email: '', phone: '', date: '', status: '' });
        setFilteredUsers(users);
    };

    const goToPage = (pageNumber: any) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            setIsDropdownVisible(false);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleJumpToPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJumpToPage(e.target.value);
    };

    const handleJumpToPageSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const page = parseInt(jumpToPage, 10);
        if (page >= 1 && page <= totalPages) {
            goToPage(page);
        }
        setJumpToPage('');
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const generatePageNumbers = () => {
        const pageNumbers = [];

        if (currentPage <= 3) {
            pageNumbers.push(1, 2, 3, "...", totalPages - 1, totalPages);
        } else if (currentPage >= totalPages - 2) {
            pageNumbers.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
        } else {
            pageNumbers.push(1, 2, "...");
            pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
            pageNumbers.push("...", totalPages - 1, totalPages);
        }

        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="dashboard-users">
            <h1>Users</h1>
            <div className="cumulation">
                {cumulation.map((item, index1) => (
                    <span key={index1} className="cumulation-details">
                        <img src={item.icon} alt="" />
                        <div className="cumulation-title">{item.title}</div>
                        <div className="cumulation-total">{item.total}</div>
                    </span>
                ))}
            </div>

            <div className="user-list">
                <div className="user-list-header">
                    <div className='user-list-organization'>ORGANIZATION <img src={filterIcon} alt="" onClick={openFilterModal} /></div>
                    <div className='user-list-username'>USERNAME <img src={filterIcon} alt="" onClick={openFilterModal} /></div>
                    <div className='user-list-email'>EMAIL <img src={filterIcon} alt="" onClick={openFilterModal} /></div>
                    <div className='user-list-phonenumber'>PHONE NUMBER <img src={filterIcon} alt="" onClick={openFilterModal} /></div>
                    <div className='user-list-date  '>DATE JOINED <img src={filterIcon} alt="" onClick={openFilterModal} /></div>
                    <div className="status-header">STATUS <img src={filterIcon} alt="" onClick={openFilterModal} /></div>
                </div>

                {currentUsers.map((user, index2) => (
                    <div key={index2} className="user-details-wrapper">
                        <div className="user-details" onClick={onUserClick}>
                            <div className='user-list-organization'>{user.organization}</div>
                            <div>{user.username}</div>
                            <div className='user-list-email'>{user.email}</div>
                            <div className='user-list-phonenumber'>{user.phone}</div>
                            <div className='user-list-date'>{user.date}</div>
                            <div className={`status ${user.status.toLowerCase()}`}>{user.status}</div>
                            <HiMiniEllipsisVertical className="option-icon" />
                        </div>
                        <div className="bottom-border"></div>
                    </div>
                ))}
            </div>

            <div className='pagination'>
                <div className="pagination-info">
                    <span>Showing </span>
                    <button onClick={toggleDropdown} className="current-page-button">
                        {currentPage} <FaChevronDown className='current-page-button-icon'/>
                    </button>
                    <span> out of {totalPages}</span>
                    {isDropdownVisible && (
                        <div className="page-jump-dropdown">
                            <form onSubmit={handleJumpToPageSubmit}>
                                <input
                                    type="number"
                                    min="1"
                                    max={totalPages}
                                    value={jumpToPage}
                                    onChange={handleJumpToPageChange}
                                    placeholder="Page"
                                />
                                <button type="submit">Go</button>
                            </form>
                        </div>
                    )}
                </div>

                <div className="pagination-controls">
                    <button onClick={goToPreviousPage} disabled={currentPage === 1} className='pagination-prev'>
                        <IoIosArrowBack className='pagination-prev-button'/>
                    </button>

                    {pageNumbers.map((page, index3) =>
                        page === "..." ? (
                            <span key={index3} className="ellipsis"><FaEllipsisH /></span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`page-button ${currentPage === page ? "active" : ""}`}
                                disabled={currentPage === page}
                            >
                                {page}
                            </button>
                        )
                    )}

                    <button onClick={goToNextPage} disabled={currentPage === totalPages} className='pagination-next'>
                        <IoIosArrowForward  className='pagination-prev-button'/>
                    </button>
                </div>
            </div>

            {isFilterModalOpen && (
                <FilterUsers
                    filters={filters}
                    setFilters={setFilters}
                    applyFilters={applyFilters}
                    resetFilters={resetFilters}
                    closeFilterModal={closeFilterModal}
                />
            )}

        </div>
    );
}

export default DashboardUsers;