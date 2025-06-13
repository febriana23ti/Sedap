import { RiFolderUserLine } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { HiInformationCircle } from "react-icons/hi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({
    isActive,
  }) => `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <nav>
      <div id="list-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/dashboard" className={menuClass}>
              <MdSpaceDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <MdOutlineRestaurantMenu className="mr-4 text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <MdOutlineEmojiPeople className="mr-4 text-xl" />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-5" to="/users" className={menuClass}>
              <RiFolderUserLine className="mr-4 text-xl" />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-6" to="/transport" className={menuClass}>
              <MdEmojiTransportation className="mr-4 text-xl" />
              <span>Transport</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-7" to="/aboutSedap" className={menuClass}>
              <HiInformationCircle className="mr-4 text-xl" />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-8" to="/admin" className={menuClass}>
              <TbDeviceDesktopAnalytics className="mr-4 text-xl" />
              <span>Admin</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-9" to="/notes" className={menuClass}>
              <TbDeviceDesktopAnalytics className="mr-4 text-xl" />
              <span>Notes</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
