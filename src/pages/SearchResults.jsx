import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import UserListItem from "../Components/UserListItem";

const SearchResults = () => {
	const { searchText } = useParams();
	const [users, setUsers] = useState();
	const navigate = useNavigate();

    useEffect(() => {
      const fetchUsers = async () => {
        const res = await axios.get(`http://localhost:8000/api/search/${searchText}`, {
          headers: {
            "ngrok-skip-browser-warning": true
          }
        });
        console.log(res);
        setUsers(res.data);
      }
    
      fetchUsers();
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <h3>Search results for {searchText}</h3>
        {users?.map((u) => (

        <UserListItem 
          key={u?.id}
          name={u?.name} 
          username={u?.email} 
          followers="4" 
          following="32"
          onClick={() => Navigate(`profile/${email}`)}
        />
        ))}
    </div>
  )
}

export default SearchResults;