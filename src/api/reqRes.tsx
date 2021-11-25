
export const fetchAPI = (page: number) => {
    return fetch(`https://reqres.in/api/users?page=${page}`)
}