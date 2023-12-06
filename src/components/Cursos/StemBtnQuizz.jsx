import S from '../../img/iconos/S.svg'
import T from '../../img/iconos/T.svg'
import E from '../../img/iconos/E.svg'
import M from '../../img/iconos/M.svg'
import { Link } from 'react-router-dom'
function StemBtn(){

    return(
        <div className="header-box container w-60 h-auto   ">
          <div className="  m-4 row ">
            <div className=" col">
              <Link to="/Ciencia" className='icons-stem btn rounded-circle'><img src={S} alt="Icono S" /></Link>
            </div>
            <div className=" col">
            <Link to="/Tecnologia" className='icons-stem btn rounded-circle'><img src={T} alt="Icono T" /></Link>
            </div>
            <div className=" col">
            <Link to="/Ingenieria" className='icons-stem btn rounded-circle'><img src={E} alt="Icono E" /></Link>         
            </div>
            <div className=" col">
              <Link to="/Matematicas" className='icons-stem btn rounded-circle'><img src={M} alt="Icono M" /></Link>
            </div>
          </div>
        </div>
    )
}

export default StemBtn;