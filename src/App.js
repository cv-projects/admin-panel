import {routes} from "./routes/routes";
import {BrowserRouter, useRoutes} from "react-router-dom";
import {ContextProvider} from "./Contexts/ContextProvider.js";
import {ProductContextProvider} from "./Contexts/Product/ProductContextProvider";

function App() {
    const router = useRoutes(routes);

    return (
        <ContextProvider>
            <ProductContextProvider>
                {router}
            </ProductContextProvider>
        </ContextProvider>

    );
}

export default App;
