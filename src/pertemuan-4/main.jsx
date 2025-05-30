import { createRoot } from "react-dom/client"
import FrameworkList1 from "./FrameworkList1";
import './tailwind.css';
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign"
import LatProductList from "./LatProductList";
import LatProductSearchList from "./LatProductSearchList";

createRoot (document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkListSearchFilter /> */}
            {/* <FrameworkList1 /> */}
            {/* <ResponsiveDesign /> */}
            {/* <LatProductList/> */}
            <LatProductSearchList/>
        </div>
    )
