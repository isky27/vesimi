import React from 'react'
import EditAddressController from './editAddressController'
import ProfileWrapper from 'pages/account/ProfileWrapper';
import { Form } from 'reactstrap';
import InputField from 'component/forms/InputField';
import { removeSpaceOnly } from 'utils';

const EditAddressView = () => {
  const { addressFormik, countriesData, statesData } = EditAddressController()

  console.log(countriesData, statesData, "countriesData");

  return (
    <ProfileWrapper>
      <div className="myAccountMain">
        <h2>Edit Address</h2>
        <Form className="row g-3" onSubmit={addressFormik.handleSubmit}>
          {/* Contact Information Section */}
          <div className="col-12">
            <h4>Contact Information</h4>
          </div>
          <div className="col-md-6">
            <InputField
              label="Name"
              onChange={addressFormik.handleChange}
              name="name"
              type="name"
              placeholder="Enter name"
              required={true}
              onKeyDown={removeSpaceOnly}
            />
          </div>

          <div className="col-md-6">
            <InputField
              label="Company"
              onChange={addressFormik.handleChange}
              name="company"
              type="name"
              placeholder="Enter company"
              onKeyDown={removeSpaceOnly}
            />
          </div>

          <div className="col-md-6">
          <InputField
              label="Phone Number"
              onChange={addressFormik.handleChange}
              name="phone"
              type="name"
              placeholder="Phone Number"
              required={true}
              onKeyDown={removeSpaceOnly}
            />
          </div>

          <div className="col-md-6">
          <InputField
              label="Fax"
              onChange={addressFormik.handleChange}
              name="fax"
              type="name"
              placeholder="Fax"
              onKeyDown={removeSpaceOnly}
            />
          </div>

          {/* Address Section */}
          <div className="col-12 mt-4">
            <h4>Address</h4>
          </div>

          <div className="col-md-6">
            <label htmlFor="streetAddress1" className="form-label">
              Street Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="streetAddress1"
              placeholder="Street Address: Line 1"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="streetAddress2" className="form-label">Street Address: Line 2</label>
            <input
              type="text"
              className="form-control"
              id="streetAddress2"
              placeholder="Street Address: Line 2"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="country" className="form-label">
              Country <span className="text-danger">*</span>
            </label>
            <select id="country" className="form-select" required>
              <option value="">Select Country</option>
              <option value="India">India</option>
              {/* Add more countries as options */}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="state" className="form-label">
              State/Province <span className="text-danger">*</span>
            </label>
            <select id="state" className="form-select" required>
              <option value="">Select State</option>
              <option value="Rajasthan">Rajasthan</option>
              {/* Add more states as options */}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="postalCode" className="form-label">
              Zip/Postal Code <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              placeholder="Postal Code"
              required
            />
          </div>

          {/* Checkbox for default billing/shipping */}
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="defaultBilling" />
              <label className="form-check-label" htmlFor="defaultBilling">
                Use as my default billing address
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="defaultShipping" />
              <label className="form-check-label" htmlFor="defaultShipping">
                Use as my default shipping address
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-dark">
              Save Address
            </button>
          </div>
        </Form>
      </div>
    </ProfileWrapper>
  );
}

export default EditAddressView