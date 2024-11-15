
import {Routes, Route} from "react-router-dom"

import HomePage from "../pages/Homepage"
import {BitcoinRates} from "../pages/BitcoinRates"
import { LoginForm } from "../pages/LoginPage";
function AppRoutes(props) {

return (
<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<HomePage {...props} />} />

{/* nested routes, matches on /dash/messages etc */}
<Route path="/login" element={<LoginForm {...props} />}>

</Route>

<Route path='/bitcoinrates' element={<BitcoinRates {...props} />} />

{/* special route to handle if none of the above match */}

</Routes>
)
}

export default AppRoutes;