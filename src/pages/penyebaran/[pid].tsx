import { AdminLayout } from "@layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Props } from "react-resize-detector/build/ResizeDetector";

const PokemonPid: NextPage<Props> = (props) => {
    const router = useRouter()
    const { pid } = router.query;
    return (
        <AdminLayout>
            {pid}
        </AdminLayout>
    );
}

export default PokemonPid;
