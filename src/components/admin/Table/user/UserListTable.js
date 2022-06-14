import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from "../../../../redux/actions/userAction"
import "../Table.css"
import { Link, useNavigate } from 'react-router-dom'




const UserListTable = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state)
    const navigate = useNavigate()

    const token = localStorage.getItem('token')


    useEffect(() => {
        dispatch(getUsers(token))
    }, [token, dispatch])



    const columns = [
        { field: 'id', headerName: 'SN', width: 90 },
        { field: 'fullname', headerName: 'FullName', width: 190 },
        {
            field: 'username', headerName: 'UserName', type: 'string', width: 160,
        },
        {
            field: 'address', headerName: 'Address', type: 'string', width: 170, align: 'center',
        },
        {
            field: 'phone', headerName: 'Phone', type: 'string', width: 120, align: 'center',
        },

        { field: 'registerdAt', headerName: 'Registered At', width: 160, align: 'center' },
        {
            field: 'role', headerName: 'Role', width: 100
        },
        {
            field: "action", headerName: "Action", width: 240, sortable: false, align: "center",
            renderCell: (userData) =>

                <span>


                    <span className='me-2 btn btn-warning btn-sm' onClick={() => {
                        console.log(userData.value, "edit")
                        handleChangeRole(userData.value)
                    }}>Change</span>

                    <span className='me-2 btn btn-success btn-sm' onClick={() => {
                        // console.log(userData.value, "edit")
                        navigate("/admin/edituser", { state: { userData: userData.value } })

                    }}>Edit</span>
                    <span className='btn btn-danger btn-sm' onClick={() => {
                        handleDeleteUser({ user: userData.value })
                    }}>Delete</span>
                </span>
        }

    ]

    const userList = user.users.map((item, index) => {
        return {
            id: index + 1,
            fullname: item.fullname,
            username: item.username,
            address: item.address ? item.address : 'N/A',
            phone: item.phone,
            registerdAt: moment(item.createdAt).format('YYYY-MM-DD'),
            role: item.role,
            action: item

        }
    })

    const handleDeleteUser = ({ user }) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser({ user, token }))
        }
    }
    const handleChangeRole = ({ user }) => {
        if (window.confirm("Are you sure you want to change this user role?")) {
            
        }
    }
    return (
        <>
            <span> <Link to="/" className="btn btn-primary btn-sm">Back</Link>  <h2 className='text-center mt-3 '>List of Users</h2></span>
            <div className="container-md " style={{
            }} >
                <DataGrid style={{ height: "90vh", width: "100%" }}
                    rows={userList}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default UserListTable