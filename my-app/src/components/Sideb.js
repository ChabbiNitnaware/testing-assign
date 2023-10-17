import React from 'react';
import { Link } from 'react-router-dom'; 
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as CiIcons from "react-icons/ci";


const Sideb = () => {
  return (
    <nav id="sidebar">
      <div className="position-sticky navb">
        <ul className="nav flex-column">
          <li className="nav-item">
           <Link className='nav-link ntext list-group-item-action ' to={"/"}><MdIcons.MdDashboard/>Dashboard<BiIcons.BiChevronRight /></Link>
          </li>
          <li className="nav-item">
           <Link className='nav-link ntext list-group-item-action ' to={"/"}><BiIcons.BiCube/>Product<BiIcons.BiChevronRight /></Link>
          </li>
          <li className="nav-item">
           <Link className='nav-link ntext list-group-item-action ' to={"/"}><BsIcons.BsFillPersonFill/>Customer<BiIcons.BiChevronRight /></Link>
          </li>
          <li className="nav-item">
           <Link className='nav-link ntext list-group-item-action ' to={"/"}><BiIcons.BiSolidCoinStack/>Income<BiIcons.BiChevronRight /></Link>
          </li>
          <li className="nav-item">
           <Link className='nav-link ntext list-group-item-action ' to={"/"}><CiIcons.CiPercent/>Promote<BiIcons.BiChevronRight /></Link>
          </li>
          <li className="nav-item">
           <Link className='nav-link ntext list-group-item-action ' to={"/"}><BiIcons.BiHelpCircle/>Help<BiIcons.BiChevronRight /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sideb;
