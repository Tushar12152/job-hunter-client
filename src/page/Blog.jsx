
const Blog = () => {
    return (
        <div>
              <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What is an access token and refresh token? How do they work and where should we
store them on the client-side?
  </div>
  <div className="collapse-content"> 
    <p>An access token is a credential used to gain access to specific resources on a server and refresh token is a credential used to obtain a new access token when the current one expires.The client includes the access token in the header of its requests to the server,The server verifies the token is authenticity and checks if it grants access to the requested resource.It should  be stored in local storage or cookies.  </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
   What is express js? What is Nest JS?
  </div>
  <div className="collapse-content"> 
    <p>Express.js, often referred to simply as Express, is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
    Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Explain my code.
  </div>
  <div className="collapse-content"> 
    <p>My code has two site. one client site and another server site.
      all user and job information go to serversite from client site. and client site transfar all data to database. and when client sites needs data.then server site bring that data from database. 

      
    </p>
  </div>
</div>
        </div>
    );
};

export default Blog;