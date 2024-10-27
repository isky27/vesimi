import React from 'react'
import EditAddressController from './editAddressController'
import ProfileWrapper from 'pages/account/ProfileWrapper';
import { Form } from 'reactstrap';
import InputField from 'component/forms/InputField';
import { removeSpaceOnly } from 'utils';
import Select from 'react-select'

const EditAddressView = () => {
  const { addressFormik, countriesData, statesData, citiesData } = EditAddressController()

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
              label="Phone Number"
              onChange={addressFormik.handleChange}
              name="phone"
              type="name"
              placeholder="Phone Number"
              required={true}
              onKeyDown={removeSpaceOnly}
            />
          </div>

          {/* Address Section */}
          <div className="col-12 mt-4">
            <h4>Address</h4>
          </div>

          <div className="col-md-6">
            <InputField
            label={"Address"}
            onChange={addressFormik.handleChange}
            name="address"
            type="name"
            placeholder="Enter Address"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          </div>
          <div className="col-md-6">
            <label htmlFor="country" className="form-label">
              Country <span className="text-danger">*</span>
            </label>
            <Select
              required
              name='country'
              placeholder="Select Country"
              value={addressFormik?.values?.country}
              onChange={(selectedOption) => {
                addressFormik.setFieldValue('state',null)
                addressFormik.setFieldValue('city',null) 
                addressFormik.setFieldValue('country', selectedOption);
              }}
              options={countriesData?.data?.map((country:{name:string, id: number})=> {return {label:country?.name, value: country?.id}})}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="state" className="form-label">
              State/Province <span className="text-danger">*</span>
            </label>
            <Select
              required
              name='state'
              placeholder="Select State"
              value={addressFormik?.values?.state}
              isDisabled={!addressFormik?.values?.country}
              onChange={(selectedOption) => {addressFormik.setFieldValue('state', selectedOption);
                addressFormik.setFieldValue('city',null)
              }}
              options={statesData?.data?.map((state:{name:string, id: number})=> {return {label:state?.name, value: state?.id}})}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City <span className="text-danger">*</span>
            </label>
            <Select
              required
              name='city'
              placeholder="Select City"
              value={addressFormik?.values?.city}
              isDisabled={!addressFormik?.values?.state}
              onChange={(selectedOption) => addressFormik.setFieldValue('city', selectedOption)}
              options={citiesData?.data?.map((city:{name:string, id: number})=> {return {label:city?.name, value: city?.id}})}
            />
          </div>

          <div className="col-md-6">
            <InputField
              label={"Zip/Postal Code"}
              onChange={addressFormik.handleChange}
              name="zip_code"
              type="name"
              placeholder="Postal Code"
              required={true}
              onKeyDown={removeSpaceOnly}
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