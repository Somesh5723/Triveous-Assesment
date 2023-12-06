import {Routes,Route} from 'react-router-dom'
import News from '../components/News'
import SinglePage from '../components/SinglePage'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Favorite from '../components/Favoriates'

const AllRoutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/favoriate" element={<Favorite/>} />
        <Route path="/singlePage" element={<SinglePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default AllRoutes