import { useFetch } from "../../hooks/useFetch";
import { WrapperMain } from "./style";
import androidImg from '../../assets/android.png'
import iconDate from '../../assets/data.png'
import livroIcon from '../../assets/livroicon.png'
import iconperson from '../../assets/iconperson.png'
import gpsicon from '../../assets/gpsicon.png'
import { format } from 'date-fns'


export function Main() {
    const { data } = useFetch()

    const handleBtnNavigate = (href: string) => {
        window.location.href = href
    }


    return (
        <WrapperMain>
            <div className="grid">
                <div className="curso-text">
                    <h2>Cursos</h2>
                </div>

                {data?.map((item, i) => (
                    <div key={item.title + i} className={`card-cursos`} data-testid="card-cursos">
                        <div className="section-label">
                            <div className="track">
                                <p>TRILHA</p><p>{item.track.toUpperCase()}</p>
                            </div>
                            <img src={androidImg} alt="simbolo do android - robozinho com uma anteninha na cabeça e um pentágono azul" />
                        </div>


                        <h3>{item.title}</h3>


                        <div className="data">
                            <div className="wrapper-data">
                                <img src={iconDate} alt="" />
                                <div className="format-data">
                                    <p>INÍCIA EM</p>
                                    <p>{format(new Date(item.startTime), "dd/MM")} às {format(new Date(item.startTime), "HH:mm")}</p>
                                </div>
                            </div>
                            <div className="wrapper-data">
                                <img src={iconDate} alt="" />
                                <div className="format-data">
                                    <p>TÉRMINO</p>
                                    <p>{format(new Date(item.endDate), "dd/MM")}</p>
                                </div>
                            </div>
                        </div>


                        <div className="aulas">
                            <div className="wrapper-aulas">
                                <img src={livroIcon} alt="" />
                                <div className="format-aulas">
                                    <p>{item.events.length} AULAS</p>
                                </div>
                            </div>
                            <div className="wrapper-aulas">
                                <img src={iconDate} alt="" />
                                <div className="format-aulas">
                                    <p>{
                                        (item.events.reduce((total, item) => {
                                            return new Date(item.endTime).getTime() - new Date(item.startTime).getTime() + total
                                        },0) / 1000 / 60 / 60).toFixed()
                                    }H</p>
                                    <p>TOTAL</p>
                                </div>
                            </div>
                        </div>

                        <div className="pessoa">
                            <div className="wrapper-pessoa">
                                <img src={iconperson} alt="" />
                                <div className="format-pessoa">
                                    <p className="name">{
                                        item.speakers.toString().length > 46
                                            ? `${item.speakers.toString().toUpperCase().substring(0, 45)}...`
                                            : item.speakers.toString().toUpperCase()
                                    }</p>
                                </div>
                            </div>
                            <div className="wrapper-pessoa">
                                <img src={gpsicon} alt="" />
                                <div className="format-pessoa">
                                    <p>{item.campus.toString().replace('de', '')}</p>
                                </div>
                            </div>
                        </div>


                        <div className='inscrição'>
                            <p>INSCRIÇÃO A PARTIR DE {format(new Date(item.enrollmentsStart), "dd/MM")}</p>
                        </div>



                        <button onClick={() => handleBtnNavigate(item.detailsURL)}>Página do curso</button>
                    </div>
                ))}
                <div className='ver-mais'>
                    <p>Ver mais</p>
                </div>
            </div>
        </WrapperMain>
    )
}