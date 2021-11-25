import { useRef, useState, useEffect } from "react";
import { fetchAPI } from "../api/reqRes";
import { ReqRespListado, User } from "../interfaces/reqRes";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const pageRef = useRef(1);

    useEffect(() => {
        loadUsers(pageRef.current);
    }, [ pageRef ])

    const loadUsers = (page: number) => {
        fetchAPI(page)
            .then((res) => res.json())
            .then((data: ReqRespListado) => {
                if (data.data.length > 0 ) {
                    // pageRef.current += 1;
                    setUsers(data.data);
                    setTotalPages(data.total_pages)
                } else {
                    //alert("No hay mas registros");
                    //pageRef.current -= 1;
                }
            })
            .catch(console.log)
    }

    const beforePage = () => {
        let currentPage = pageRef.current;

        if (currentPage > 0 ) {
            currentPage -= 1;
            loadUsers(currentPage);
        }
    }

    const nextPage = () => {
        let currentPage = pageRef.current;
        
        if (currentPage <= totalPages) {
            currentPage += 1;
            loadUsers(currentPage);
        }
    }

    return {
        users,
        beforePage,
        nextPage,
    }
}
