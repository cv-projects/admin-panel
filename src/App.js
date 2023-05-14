import {routes} from "./routes/routes";
import {BrowserRouter, useRoutes} from "react-router-dom";
import {ContextProvider} from "./Contexts/ContextProvider.js";

function App() {
    const router = useRoutes(routes);

    return (
        <ContextProvider>
            {router}
        </ContextProvider>

    );
}

export default App;
