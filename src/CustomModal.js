import { Modal, Alert } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';
import { React } from 'react'

export default function CustomModal(props) {

    return(
    <div>
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>        
          {
            props.status === "" &&
            <Skeleton count={4}/>
          }
        {
          props.status === "Already registered!" &&
          <Alert variant="warning">
            <Alert.Heading>Oops!</Alert.Heading>
            <p>
              Looks like you've already submitted your details.
              Please change your pincode or email and submit again. Thanks!
            </p>
          </Alert>
              
        }
        {
          props.status === "No slots available!" &&
          <Alert variant="success">
            <Alert.Heading>Hey, Thanks for submitting!</Alert.Heading>
            <p>
              Looks like there is no slots available currently.
              We'll send you email notification as soon as slots get available. Thanks!
            </p>
          </Alert>
              
        }
        {
          props.status === "Ok" &&
          <Alert variant="success">
            <Alert.Heading>Hey, Thanks for submitting!</Alert.Heading>
            <p>
              Slots are available now!
              We've send you the details in email. Please go check and take your dose. Thanks!
            </p>
          </Alert>
              
        }
      </Modal>
    </div>
  );
    
}