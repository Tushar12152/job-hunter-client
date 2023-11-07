

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllJobTable = ({ job }) => {
    const {_id, UserName, title, postDate, deadLine, salary } = job;
    console.log(job);

    return (
        <tr className=''>
            <td>{UserName}</td>
            <td>{title}</td>
            <td>{postDate}</td>
            <td>{deadLine}</td>
            <td>{salary}</td>
            <td>
            <Link to={`/detail/${_id}`}>
     <button  className="btn bg-gradient-to-r from-red-500 to-blue-500">View Detail</button>
     </Link>
            </td>
        </tr>
    );
};

AllJobTable.propTypes = {
    job: PropTypes.object,
};

export default AllJobTable;
