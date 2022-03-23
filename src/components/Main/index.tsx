import { useFetch } from "../../hooks/useFetch";
import { WrapperMain } from "./style";
import androidImg from '../../assets/android.png'

export function Main() {
    const { data } = useFetch()

    console.log(data)


    return (
        <WrapperMain>
            <h2>Cursos</h2>
            {data?.map((item, i) => (
                <div key={item.title + i} className={`card-cursos`}>

                    <div className="section-label">
                        <div className="track">
                            <p>Trilha</p><p>{item.track}</p>
                        </div>
                        <img src={androidImg} alt="simbolo do android - robozinho com uma anteninha na cabeça e um pentágono azul" />
                    </div>


                    <h3>{item.title}</h3>


                    <div className="data">
                        <div>
                            <p>INÍCIO EM</p>
                            <p>{`${("0" + new Date(item.startTime).getDate()).slice(-2)}/${("0" + new Date(item.startTime).getMonth()).slice(-2)}`} às {`${new Date(item.startTime).getHours()}:${new Date(item.startTime).getMinutes()}`}</p>
                        </div>
                        <div>
                            <p>TÉRMINO</p>
                            <p>{`${("0" + new Date(item.endDate).getDate()).slice(-2)}/${("0" + new Date(item.endDate).getMonth()).slice(-2)}`}</p>
                        </div>
                    </div>

                    <div className="aulas">
                        <div>
                            <p>{item.events.length} AULAS</p>
                        </div>
                        <div>
                            {item.events.reduce((total,item) => {
                                
                            })}
                        </div>
                    </div>

                </div>
            ))}
        </WrapperMain>
    )
}