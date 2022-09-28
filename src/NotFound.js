import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <center><h2>Sorry</h2></center>
            <center><p>Page Not Found</p></center>
            <center><Link to ='/'>Back to Homepage..</Link></center>
        </div>
    );
}
 
export default NotFound;
