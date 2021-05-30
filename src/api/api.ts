import axios from "axios";

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true}).then(response => response.data)
}


export const unfollowUsers = (userId: number) => {
   return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {withCredentials: true,
            headers: {
                "API-KEY": "e62a63d8-5641-4cb4-86b0-282db5a6f7c0"
            }}).then(response => response.data)
}

export const followUsers = (userId: number) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "e62a63d8-5641-4cb4-86b0-282db5a6f7c0"
            }
        }).then(response => response.data)

}

export const getProfile = (userId: string) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userId)
}

export const authAPI = {
    me() {
       return  axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true}
        )
    }
}