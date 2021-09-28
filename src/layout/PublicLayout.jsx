import Footer from 'components/Footer'
import Navbar from 'components/Navbar'


const Publiclayout = ({children}) => {
    return (
        <div className="flex flex-col justify-between h-screen" >
            <Navbar></Navbar>
            <main className="flex h-full overflow-y-scroll bg-blue-400  ">{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Publiclayout
