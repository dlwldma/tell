import LeftMenu from './components/LeftMenu'
import MainContent from './components/MainContent'
import RightMenu from './components/RightMenu'
import './app.css'

const App = () => {
    
    return (
        <>
            <div className='principal'> 
                <div>
                    <LeftMenu />
                    <MainContent />
                    <RightMenu />
                </div>              
            </div>
           
        </>
    )
}


export default App;