
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';

import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';

export const loader = async()=>{
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    console.log(error)
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
}

function Admin() {
  useLoaderData();
  return (
    <Wrapper>
  <h1>Admin page</h1>
    </Wrapper>
   
  )
}

export default Admin