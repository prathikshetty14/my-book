import Spinner from "react-spinner-material";

export default function Loader(){
    return(
        <div
            style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "15%",
                zIndex: "999",
            }}
        >
            <div>

                <Spinner radius={120} color={"#555"} stroke={3} visible={true} />
                <h4 className="container mt-10 text-center">Loading..</h4>
            </div>
        </div>
    )
}