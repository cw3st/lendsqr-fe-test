import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "../Styles/UserDetails.css";
import avatar from "../assets/avatar.png";
import line1 from "../assets/Line 1.png";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

type UserDetailsProps = {
  onBack: any;
};

const UserDetails: React.FC<UserDetailsProps> = ({ onBack }) => {
  return (
    <div className="user-details-component">
      <div className="user-details-previous" onClick={onBack}>
        <MdOutlineKeyboardBackspace />
        <span>Back to User</span>
      </div>
      <div className="user-details-header">
        <h1>User Details</h1>
        <div className="user-details-children">
          <div className="user-details-child1">BLACKLIST USER</div>
          <div className="user-details-child2">ACTIVATE USER</div>
        </div>
      </div>
      <div className="user-details-card1">
        <div className="user-details-card1-child">
          <img src={avatar} alt="" />
          <span className="user-details-card1-child2">
            <div className="user-details-card1-child2-name">Grace Effiom</div>
            <div className="user-details-card1-child2-reg">LSQFf587g90</div>
          </span>
          <img src={line1} alt="" className="user-details-card1-line1" />
          <span className="user-details-card1-reviews">
            <div className="user-details-card1-reviews-child1">User's Tier</div>
            <div className="user-details-card1-reviews-icons">
              <IoStarSharp className="review-stars-filled" />
              <IoStarOutline className="review-stars-unfilled" />
              <IoStarOutline className="review-stars-unfilled" />
            </div>
          </span>
          <img src={line1} alt="" className="user-details-card1-line1" />
          <span className="bank-details">
            <div className="balance">₦200,000.00</div>
            <div className="bank">9912345678/Providus Bank</div>
          </span>
        </div>
        <div className="user-details-card1-menu">
          <div className="user-details-card1-menu1">General Details</div>
          <div className="user-details-card1-menu2">Document</div>
          <div className="user-details-card1-menu2">Bank Details</div>
          <div className="user-details-card1-menu2">Loans</div>
          <div className="user-details-card1-menu2">Savings</div>
          <div className="user-details-card1-menu2">App and System</div>
        </div>
      </div>
      <div className="user-details-card2">
        <div className="personal-information">
          <div className="personal-information-child1">
            Personal Information
          </div>
          <div className="PI-ggchild">
            <div className="PI-ggchild1">
              <div>FULL NAME</div>
              <div>PHONE NUMBER</div>
              <div>EMAIL ADDRESS</div>
              <div>BVN</div>
              <div>GENDER</div>
            </div>
            <div className="PI-ggchild2">
              <div>Grace Effiom</div>
              <div>07060780922</div>
              <div>grace@gmail.com</div>
              <div>07060780922</div>
              <div>Female</div>
            </div>
          </div>
          <div className="PI-ggchild">
            <div className="PI2-ggchild1">
              <div>MARITAL STATUS</div>
              <div>CHILDREN</div>
              <div>TYPE OF RESIDENCE</div>
            </div>
            <div className="PI2-ggchild2">
              <div>Single</div>
              <div>None</div>
              <div>Parent's Apartment</div>
            </div>
          </div>
        </div>
        <div className="personal-information-border"></div>
        <div className="personal-information">
          <div className="personal-information-child1">
            Education and Employment
          </div>
          <div className="PI-ggchild">
            <div className="PI-ggchild1">
              <div>LEVEL OF EDUCATION</div>
              <div>EMPLOYMENT STATUS</div>
              <div>SECTOR OF EMPLOYMENT</div>
              <div>DURATION OF EMPLOYMENT</div>
            </div>
            <div className="PI-ggchild2">
              <div>B.Sc</div>
              <div>Employed</div>
              <div>FinTech</div>
              <div>2 years</div>
            </div>
          </div>
          <div className="PI-ggchild">
            <div className="PI2-ggchild1">
              <div>OFFICE EMAIL</div>
              <div>MONTHLY INCOME</div>
              <div>LOAN REPAYMENT</div>
            </div>
            <div className="PI2-ggchild2">
              <div>grace@lendsqr.com</div>
              <div>₦200,000.00-₦400,000.00</div>
              <div>40.000</div>
            </div>
          </div>
        </div>
        <div className="personal-information-border"></div>
        <div className="personal-information">
          <div className="personal-information-child1">Socials</div>
          <div className="PI-ggchild">
            <div className="PI3-ggchild1">
              <div>TWITTER</div>
              <div>FACEBOOK</div>
              <div>INSTAGRAM</div>
            </div>
            <div className="PI3-ggchild2">
              <div>@grace_effiom</div>
              <div>Grace Effiom</div>
              <div>@grace_effiom</div>
            </div>
          </div>
        </div>
        <div className="personal-information-border"></div>
        <div className="personal-information">
          <div className="personal-information-child1">Guarantor</div>
          <div className="PI-ggchild">
            <div className="PI3-ggchild1">
              <div>FULL NAME</div>
              <div>PHONE NUMBER</div>
              <div>EMAIL ADDRESS</div>
              <div>RELATIONSHIP</div>
            </div>
            <div className="PI3-ggchild2">
              <div>Debby Ogana</div>
              <div>07060780922</div>
              <div>debby@gmail.com</div>
              <div>Sister</div>
            </div>
          </div>
        </div>
        <div className="personal-information-border"></div>
        <div className="personal-information">
          <div className="PI-ggchild">
            <div className="PI-last-details1">
              <div>FULL NAME</div>
              <div>PHONE NUMBER</div>
              <div>EMAIL ADDRESS</div>
              <div>RELTIONSHIP</div>
            </div>
            <div className="PI-last-details2">
              <div>Debby Ogana</div>
              <div>07060780922</div>
              <div>debby@gmail.com</div>
              <div>Sister</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
