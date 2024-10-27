import { Modal, ModalBody, ModalHeader } from "reactstrap";
import InputField from "../forms/InputField";
import { removeSpaceOnly } from "utils";
import { Button } from "react-bootstrap";

const CustomPopup = ({
  show,
  handleClose,
  handleInput,
  modalHeader,
  isInputBox,
  secondaryBtnDisabled,
  primaryBtnDisabled,
  inputPlaceholder,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonClick,
  secondaryButtonClick,
  primaryButtonClass,
  secondaryButtonclass,
  inputValue,
  modalBody,
  modalClass,
  children,
  testId
}: any) => {
  return (
    <Modal isOpen={show} toggle={handleClose} className={modalClass}>
      <ModalHeader toggle={handleClose} className="p-0 pb-2">
        <p className="modal-title">{modalHeader}</p>
      </ModalHeader>
      <ModalBody className="p-0">
        <div data-testid={testId}>
          {children}
          {isInputBox && (
            <InputField
              type="text"
              name="folder_name"
              Id="folder_name"
              value={inputValue}
              placeholder={inputPlaceholder}
              onChange={(e: any) => handleInput(e)}
              onKeyDown={(e: any) => removeSpaceOnly(e)}
            />
          )}
          {modalBody && <p>{modalBody}</p>}
          <div className="d-flex justify-content-end gap-2 mt-3">
            {secondaryButtonText && (
              <Button
                disabled={secondaryBtnDisabled}
                onClick={secondaryButtonClick}
                className={secondaryButtonclass}
              >
                {secondaryButtonText}
              </Button>
            )}
            {primaryButtonText && (
              <Button
                disabled={primaryBtnDisabled}
                onClick={primaryButtonClick}
                className={primaryButtonClass}
              >
                {primaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

CustomPopup.defaultProps = {
  isInputBox: false,
  secondaryBtnDisabled: false,
  primaryBtnDisabled: false,
  inputPlaceholder: "",
  primaryButtonText: "",
  secondaryButtonText: "",
  modalBody: "",
  primaryButtonClass: "btn-deepgreenLg font-14 w-100",
  secondaryButtonclass: "btn-deepgreenLg font-14 w-100",
  modalClass: "",
};

export default CustomPopup;
