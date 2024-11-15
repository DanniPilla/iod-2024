
import {Routes, Route} from "react-router-dom"
// import Homepage from "../pages/Homepage"
// import AboutPage from "../pages/AboutPage"
import PageNotFound from "../pages/PageNotFound"
import DashboardPage from "../pages/DashboardPage"
    import {DashboardMessages, DashboardTasks} from "../pages/DashboardPage"
import Homepage from "../pages/Homepage"
import AboutPage from "../pages/AboutPage"
function AppRoutes(props) {

return (
<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<Homepage {...props} />} />

{/* nested routes, matches on /dash/messages etc */}
<Route path="dash" element={<DashboardPage {...props} />}>
<Route path="messages" element={<DashboardMessages />} />
<Route path="tasks" element={<DashboardTasks />} />
</Route>

<Route path='/about' element={<AboutPage {...props} />} />

{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound />} />
</Routes>
)
}

export default AppRoutes;