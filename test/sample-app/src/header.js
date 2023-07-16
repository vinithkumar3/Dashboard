import React from "react";
import Counter from "./Counter";
const Header = ({dashboardName , accountName , isSearchVisible}) => {

    return <><div class="header">
        <div class="dashboard">
            <button><div>Dashboard
            </div></button>
            <div><button>
                <img src=" ../images/paint.png" class="paint" alt="paint" /></button>
            </div>

            <div>
                <img src="../images/global.png" class="global" alt="global"/> <select></select>
            </div>
            <div>
                <img src="../images/search.jpg" class="search" alt="search" /></div>
            search


        </div>
        <Counter/>
        <div class="right_header">
            <div class="account">
                Account
            </div>
              <div class="account">
                <label for="dropdown"> Dropdown</label>
                <select></select>
            </div>
            <div class="account">
                Logout
            </div>

        </div>
    </div><div class="header_mobile">
            <button><div>Dashboard
            </div></button>
            <div><button>
                <img src="../images/menu.png" class="menu_mobile"alt="menu" /></button>
            </div>


        </div></>
    

       }
     export default Header;