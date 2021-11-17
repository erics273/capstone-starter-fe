//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ClinicForm({ handleChange, handleSubmit, formData, isUpdate }) {

    return (
        <div className="ClinicForm container">

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="clinic">
                    <Form.Label><strong>Clinic:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.clinic} type="text" placeholder="clinic" />
                </Form.Group>
                <Form.Group controlId="doctor">
                    <Form.Label><strong>Doctor:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.doctor} type="text" placeholder="doctor" />
                </Form.Group>
  
                <Form.Group controlId="specialty">
                    <Form.Label><strong>Specialty:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.specialty} type="text" placeholder="specialty" />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Label><strong>Phone #:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.phoneNumber} type="text" placeholder="phoneNumber" />
                </Form.Group>

                <Form.Group controlId="faxNumber">
                    <Form.Label><strong>Fax #:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.faxNumber} type="text" placeholder="faxNumber" />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label><strong>Address:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.address} type="text" placeholder="address" />
                </Form.Group>

                <Form.Group controlId="website">
                    <Form.Label><strong>Website:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.website} type="text" placeholder="website" />
                </Form.Group>

                <Form.Group controlId="area">
                    <Form.Label><strong>Area:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.area} type="text" placeholder="area" />
                </Form.Group>

                <Form.Group controlId="alternatePhoneNumbers">
                    <Form.Label><strong>Alternate phone #s:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.alternatePhoneNumbers} type="text" placeholder="alternatePhoneNumbers" />
                </Form.Group>
            
                <Form.Group controlId="caseCoordinator">
                    <Form.Label><strong>Case Coordinator:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.caseCoordinator} type="text" placeholder="caseCoordinator" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label><strong>Email:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.email} type="text" placeholder="email" />
                </Form.Group>

                <Form.Group controlId="notes">
                    <Form.Label><strong>Notes:</strong></Form.Label>
                    <Form.Control onChange={handleChange} value={formData.notes} type="text" placeholder="notes" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default ClinicForm
