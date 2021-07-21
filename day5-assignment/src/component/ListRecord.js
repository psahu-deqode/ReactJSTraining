import React from 'react';


const ListRecord = (props) => {
    console.log(props.record)
    return <div>
        {props.record === null && <h2>No records to show</h2>}
        {props.record !== null && props.record.map((data) => <table>

            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.DOB}</td>
                    <td>{data.Gender}</td>
                    <td>{data.profilePic}</td>
                    <td>{data.Education}</td>
                    <td>{data.Password}</td>
                    <td>{data.ConfirmPassword}</td>
                </tr>
            </tbody>
        </table>)}
    </div>

}

export default ListRecord;
