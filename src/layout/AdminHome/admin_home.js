import Image from "next/image";
import ChartPerforma from "./chart_performa";

function AdminHome({ data }) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Image className="rounded-circle"
                    width={200}
                    height={200}
                    src='/api/img/Prabowo%20Subianto.png' />
            </div>
            <div className="d-flex justify-content-center p-2">
                Prabowo Subianto
            </div>
            <div className="d-flex justify-content-center">
                <ChartPerforma />
            </div>

        </div>
    )
}

export default AdminHome;
