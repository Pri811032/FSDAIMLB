import react from 'react'
import './studentstyle.css';
function Student({data}) {
return(
    <div className="icard">

        {/* {JSON.stringify(props)} */}
        {/* <h2>Hi, {props.name}
            <br></br>
            Your Branch Is:{props.branch}
        </h2> */}
        <table>
            <tbody>
                <tr>
<td colspan={2}>{data.college}</td>
                </tr>
                <tr>
<td colspan={2}><img src={data.pic} alt="" /></td>
                </tr>
                <tr>
<td colspan={2}>{data.name}</td>
                </tr>
                <tr>
<td> roll: </td><td>{data.roll}</td>
                </tr>
                <tr>
<td> branch: </td><td>{data.branch}</td>
                </tr>
                <tr>
<td> section: </td><td>{data.section}</td>
                </tr>
            </tbody>
        </table>
    </div>
)
}
export default Student