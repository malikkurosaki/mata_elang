import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";
import { scoreState, testSocketState } from "../../hstate";
import ChartPerforma from "./chart_performa";

function AdminScoreWidget() {
    const score = useHookstate(scoreState)
    const testSocket = useHookstate(testSocketState)

    console.log("bergetar");
    useEffect(() => {
        fetch('/api/dashboard/dashboard-score').then(e => e.json()).then(e => score.set(e))
    }, [])

    if (score.get().length == 0) return <div>loading ...</div>
    return <div>
        <AdminScoreWidgetBody data={score.get()} />
    </div>
}

const AdminScoreWidgetBody = ({ data }) => {
    let prabowo = data.find((e) => e.name == "Prabowo Subianto")
    if (!prabowo) return <div>loading ...</div>
    return <div>
        {JSON.stringify(data)}
        <div className="d-flex flex-row justify-content-center align-items-center">
            <div style={{ height: 300 }} className="d-flex flex-row justify-content-center align-items-end">
                <div style={{ width: 250, height: 250 }} className="">
                    <ChartPerforma width={250} height={250} score={prabowo.score ?? 0} />
                </div>
                <div
                    style={{ width: 300, height: 300 }}
                    className="d-flex flex-row justify-content-center align-items-end p-4">
                    <img
                        style={{ height: 170, width: 170 }}
                        className="rounded-circle "
                        src='/api/img/Prabowo%20Subianto.png' alt="gambar" />
                </div>
            </div>
        </div>
        <div>
            <div className="h3 d-flex flex-row justify-content-center">
                {prabowo.name ?? ""}
            </div>
            <div
                className="bg-light p-2 d-flex flex-column justify-content-center">
                <FontAwesomeIcon size="2x" color="green" icon={faSortUp} />
                <FontAwesomeIcon color="grey" icon={faSortDown} />
            </div>
        </div>
        <div style={{ height: 100 }}></div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            {
                data.map(e => {
                    if (e.name == "Prabowo Subianto") return <div key={e.id}></div>
                    let image = `/api/img/${e.name}.png`;

                    return <div key={e.id}>
                        <div
                            className="d-flex flex-row">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center p-4"
                                style={{ width: 200 }}>
                                <div
                                    className="d-flex flex-row justify-content-center align-items-center">
                                    <img
                                        className="rounded-circle"
                                        src={image} height={50} width={50}
                                        alt="gambar" />
                                    <div
                                        className="p-2 h2">{e.score}</div>
                                </div>
                                <div
                                    className="text-center">{e.name}</div>

                            </div>
                            <div
                                className="bg-light p-2 d-flex flex-column justify-content-center">
                                <FontAwesomeIcon size="2x" color="green" icon={faSortUp} />
                                <FontAwesomeIcon color="grey" icon={faSortDown} />
                            </div>
                        </div>
                    </div>
                })}
        </div>
    </div>
}

export default AdminScoreWidget;