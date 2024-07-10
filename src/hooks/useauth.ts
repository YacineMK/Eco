import { authStore } from "@/store/authstroe";

export const useAuth = () => {
    const isAuthenticated = authStore(state => state.auth)
    const login = authStore(state => state.login)
    const logout = authStore(state => state.logout)

    return { isAuthenticated, login, logout }
}


