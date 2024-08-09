import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/login";
import { CadastroPage } from "../pages/cadastro/cadastro";
import { HomePage } from "../pages/dashboard/home/home";
import { TemplatePrivateRoute } from "../templates/private-route";
import { CadastroLocais } from "../pages/dashboard/cadastroLocais/cadastroLocais";

export function AppRoutes() {
    return (
        <Routes>
            
            <Route path="/" element={<LoginPage />}/>
            <Route path="/cadastro" element={<CadastroPage />} />
            
            <Route path="/dashboard" element={<TemplatePrivateRoute />}>
                <Route path="/dashboard" element={<HomePage />}/>
                <Route path="/dashboard/cadastrolocais" element={<CadastroLocais />}/>
            </Route>
        </Routes>
    )
} 