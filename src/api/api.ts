import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e62a63d8-5641-4cb4-86b0-282db5a6f7c0"
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },


    unfollowUsers(userId: number) {
        return instance.delete(`follow/${userId}`,)
            .then(response => response.data)
    },

    followUsers(userId: number) {
        return instance.post(`follow/${userId}`,)
            .then(response => response.data)

    },


}

export const profileAPI = {

    getProfile(userId: string) {
        return instance.get(`Profile/` + userId)
    },
    getStatus (userId: string) {
        return instance.get(`Profile/status/` + userId)
    },
    savePhoto (photo: File) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`Profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateStatus(status: string) {
        return instance.put(`Profile/status`, {
            status,
        })
    }

}


export const authAPI = {
    me() {
        return instance.get('auth/me',)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        debugger
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login',)
    },
}