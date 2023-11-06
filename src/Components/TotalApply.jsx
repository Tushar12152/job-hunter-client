
import PropTypes from 'prop-types';

const TotalApply = ({apply})=> {
    console.log(apply);

    const{UserName,  category, email, photo,title}=apply
    return (
        <div>
              <div className="card w-96 glass">
  <figure><img className='w-full h-[200px]' src={photo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Job Title: {title}</h2>
    <p>Category:{category}</p>
    <p>user Name:{UserName}</p>
    <p>email:{email}</p>
    
  </div>
</div>
        </div>
    );
};

TotalApply.propTypes = {
    apply:PropTypes.object,
};

export default TotalApply;