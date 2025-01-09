import React from 'react'
import AddressController from './addressFormController'
import { Form } from 'reactstrap';
import InputField from 'component/forms/InputField';
import { removeSpaceOnly } from 'utils';
import Select from 'react-select'

const AddressFormView = ({isEdit, handleAfterSuccess }: any) => {

    const { 
        addressFormik, 
        countriesData, 
        statesData, 
        citiesData 
    } = AddressController({isEdit, handleAfterSuccess })

    return (
      <Form className="row g-3" onSubmit={addressFormik.handleSubmit}>
        {/* Contact Information Section */}

        <div className="col-sm-6 col-md-12 col-lg-6">
          <InputField
            label="Name"
            onChange={addressFormik.handleChange}
            name="name"
            type="name"
            placeholder="Enter name"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={addressFormik.touched.name}
            errors={addressFormik.errors.name}
          />
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6">
          <InputField
            label="Phone Number"
            onChange={addressFormik.handleChange}
            name="phone"
            type="name"
            placeholder="Phone Number"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={addressFormik.touched.phone}
            errors={addressFormik.errors.phone}
          />
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6">
          <InputField
            label={"Address"}
            onChange={addressFormik.handleChange}
            name="address"
            type="name"
            placeholder="Enter Address"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={addressFormik.touched.address}
            errors={addressFormik.errors.address}
          />
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6">
          <label htmlFor="country" className="form-label">
            Country <span className="text-danger">*</span>
          </label>
          <Select
            required
            name="country"
            placeholder="Select Country"
            value={addressFormik?.values?.country}
            onChange={(selectedOption) => {
              addressFormik.setFieldValue("state", null);
              addressFormik.setFieldValue("city", null);
              addressFormik.setFieldValue("country", selectedOption);
            }}
            options={countriesData?.data?.map(
              (country: { name: string; id: number }) => {
                return { label: country?.name, value: country?.id };
              }
            )}
          />
        </div>

        <div className="col-sm-6 col-md-12 col-lg-6">
          <label htmlFor="state" className="form-label">
            State/Province <span className="text-danger">*</span>
          </label>
          <Select
            required
            name="state"
            placeholder="Select State"
            value={addressFormik?.values?.state}
            isDisabled={!addressFormik?.values?.country}
            onChange={(selectedOption) => {
              addressFormik.setFieldValue("state", selectedOption);
              addressFormik.setFieldValue("city", null);
            }}
            options={statesData?.data?.map(
              (state: { name: string; id: number }) => {
                return { label: state?.name, value: state?.id };
              }
            )}
          />
        </div>

        <div className="col-sm-6 col-md-12 col-sm-6 col-md-12 col-lg-6">
          <label htmlFor="city" className="form-label">
            City <span className="text-danger">*</span>
          </label>
          <Select
            required
            name="city"
            placeholder="Select City"
            value={addressFormik?.values?.city}
            isDisabled={!addressFormik?.values?.state}
            onChange={(selectedOption) =>
              addressFormik.setFieldValue("city", selectedOption)
            }
            options={citiesData?.data?.map(
              (city: { name: string; id: number }) => {
                return { label: city?.name, value: city?.id };
              }
            )}
          />
        </div>

        <div className="col-sm-6 col-md-12 col-sm-6 col-md-12 col-lg-6">
          <InputField
            label={"Zip/Postal Code"}
            onChange={addressFormik.handleChange}
            name="zip_code"
            type="name"
            placeholder="Postal Code"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={addressFormik.touched.zip_code}
            errors={addressFormik.errors.zip_code}
          />
        </div>
        {/* Save Button */}
        <div className="col-12 mt-4">
          <button type="submit" className="themeBtnCart">
            Save Address
          </button>
        </div>
      </Form>
    );
}

export default AddressFormView