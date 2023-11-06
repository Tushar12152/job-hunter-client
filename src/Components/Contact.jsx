import swal from "sweetalert";

const Contact = () => {

    const handleSend=e=>{
         e.preventDefault()
         swal("success","Your message is successFully send to Admin panel","success")
    }


    return (
        <div>
              <form onSubmit={handleSend}>
          


          <div className="flex w-full   gap-2">
             
        


              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input name="salary" type="text" placeholder="First Name" className="input input-bordered input-primary w-full" required />
              </div>

              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input name="salary" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" required />
              </div>





          </div>


          <div className="flex w-full   gap-2">
             
          <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="description" type="text" placeholder="Email" className="input input-bordered input-primary w-full " required />
              </div>

              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input name="description" type="text" placeholder="Phone" className="input input-bordered input-primary w-full " required />
              </div>

          </div>

         <textarea placeholder="Write Your Text.................." className="border-2 input-primary w-full mt-6" name="" id="" cols="30" rows="10"></textarea>
         

             <input className="btn w-full mt-5 bg-gradient-to-r from-red-500 to-blue-500" type="submit" value="Send" />
        </form>
        </div>
    );
};

export default Contact;