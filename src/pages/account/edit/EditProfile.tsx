import { Form, Button, Row, Col } from 'react-bootstrap';
import EditController from './editController';
import ProfileWrapper from '../ProfileWrapper';

const EditProfile = () => {

  const {
    editEmail, setEditEmail,
    changePassword, setChangePassword,
    loginDetails,
    user, setUser
  } = EditController()

  return (
    <ProfileWrapper>
      <Form>
        <Row>
          <Col>
            <h3>Account Information</h3>
            <Form.Group controlId="formFirstName">
              <Form.Label>Name *</Form.Label>
              <Form.Control type="text" placeholder="Name" defaultValue={loginDetails?.user?.name} />
            </Form.Group>

            <Form.Group controlId="formChangeEmail" className="mt-3">
              <Form.Check
               type="checkbox"
                label="Change Email"
                checked={editEmail} 
                onChange={()=>setEditEmail(!editEmail)}
              />
            </Form.Group>

            <Form.Group controlId="formChangePassword" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Change Password"
                checked={changePassword}
                onChange={() => setChangePassword(!changePassword)}
              />
            </Form.Group>
          </Col>

          <Col>
            <h3>{`Change ${editEmail ? 'Email':''} Password`}</h3>
            {editEmail && <Form.Group controlId="formCurrentPassword">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                disabled={!editEmail}
                value={user?.email}
              />
            </Form.Group>}
            
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Current Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Current Password"
                disabled={!changePassword}
                value={user?.currentPassword}
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword" className="mt-3">
              <Form.Label>New Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                disabled={!changePassword}
                value={user?.password}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm New Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm New Password"
                disabled={!changePassword}
                value={user?.confirmPassword}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-4">
          Save
        </Button>
      </Form>
    </ProfileWrapper>

  )
}

export default EditProfile