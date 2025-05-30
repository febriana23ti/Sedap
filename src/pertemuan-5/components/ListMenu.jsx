import { MdOutlineEmojiPeople } from "react-icons/md"; 
import { MdOutlineRestaurantMenu } from "react-icons/md"; 
import { MdSpaceDashboard } from "react-icons/md"; 

export default function ListMenu () {
    return (
        <div id="list-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <MdSpaceDashboard className="mr-4 text-xl" />
                        <span>Dashboard</span>
                    </div>
                </li>
                <li>
                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <MdOutlineRestaurantMenu className="mr-4 text-xl"/>
                        <span>Orders</span>
                    </div>
                </li>
                <li>
                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <MdOutlineEmojiPeople className="mr-4 text-xl"/>
                        <span>Customers</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
