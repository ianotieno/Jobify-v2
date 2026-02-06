/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from 'react';
import { Outlet,redirect, useLoaderData  } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar} from '../components';
import customFetch from '../utils/customFetch';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    
    return data;
  } catch (error) {
    console.log(error);
    return redirect('/');
  }
};


const DashboardContext = createContext();

const Dashboard = ({isDarkThemeEnabled}) => {
  const navigate = useNavigate();
  const { user } = useLoaderData();
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{user}} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;