import { React, useEffect, useState } from 'react'
import CustomModal from './CustomModal';

export default function Form() {
      
   const [pincode, setPincode] = useState("")
   const [date, setDate] = useState(new Date())
   const [email, setEmail] = useState("")
   const [status, setStatus] = useState("")
   const [modalShow, setModalShow] = useState();


   useEffect(() => {
    if (pincode != "" || email != "") {
       async function fetchSlots() {
        const response = await fetch(`https://api-covvaccine.com/findslots?pincode=${encodeURIComponent(pincode)}&date=${encodeURIComponent(changeDateFormat(date))}&sendTo=${encodeURIComponent(email)}`)
        const json = await response.json()
        setStatus(json.status)
       }
       fetchSlots()
    } 
   }, [modalShow])

   const submit = e => {
        e.preventDefault()
        console.log(status)
        setModalShow(true)
   }

   const resetFields = () => {
    setEmail("")
    setPincode("")
    setDate(new Date())
    setModalShow(false)
    setStatus("")
   }

   const changeDateFormat = (formatDate) => {
         var dd = formatDate.getDate();
          var mm = formatDate.getMonth() + 1;

          var yyyy = formatDate.getFullYear();
          if (dd < 10) {
              dd = '0' + dd;
          }
          if (mm < 10) {
              mm = '0' + mm;
          }
          var formatDate = dd + '-' + mm + '-' + yyyy;
          return formatDate
   }

  return(
        <div className="container-md">
            <form onSubmit={submit}>
                
                <div className="row mb-2">
                    <label htmlFor="pincode" className="col-form-label">Pincode</label>
                    <div className="col-sm">
                      <input
                          id="pincode"
                          type="text"
                          className="form-control-sm"
                          placeholder="Please enter your pincode"
                          required
                          minLength="6"
                          value={pincode}
                          onChange={e => setPincode(e.target.value)}
                      />
                    </div>                    
                </div>   

                <div className="row mb-2">
                    <label htmlFor="email" className="col-form-label">Email address</label>
                    <div>
                    <input
                        id="email"
                        type="email"
                        className="form-control-sm"
                        placeholder="Please enter your email"
                        required                    
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    </div>
                </div>

              <div className="submit">
                  
                 <button id="submit" type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Submit</button> 

              </div>
               <CustomModal show={modalShow}
                            status={status}
                            onHide={() => resetFields()} />
            </form>
        </div>
  )
}

