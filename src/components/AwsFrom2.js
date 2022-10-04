import React, { Fragment, useState } from "react";

const AwsForm = () => {
  const [txtAccessKeyID, setAccesskeyID] = useState("");
  const [txtSecretAccessKey, setSecretAccessKey] = useState("");
  const [selectRegionID, setRegionID] = useState("ap-northeast-1");

  return (
    <Fragment>
      <form className="d-flex flex-column">
        <h2 className="border-bottom pb-2">AWS列表</h2>
        <div className="mb-3">
          <label htmlFor="txtAccessKeyID" className="form-label fs-6">
            AccessKeyID
          </label>
          <input
            type="text"
            className="form-control"
            id="txtAccessKeyID"
            value={txtAccessKeyID}
            onChange={(event) => {
              setAccesskeyID(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="txtSecretAccessKey" className="form-label fs-6">
            SecretAccessKey
          </label>
          <input
            type="password"
            className="form-control"
            id="txtSecretAccessKey"
            value={txtSecretAccessKey}
            onChange={(event) => {
              setSecretAccessKey(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="selectRegionID" className="form-label fs-6">
            AWS區域
          </label>
          <select
            className="form-select font12"
            id="selectRegionID"
            value={selectRegionID}
            onChange={(event) => setRegionID(event.target.value)}
          >
            <option value="us-east-1">美東 (紐約)</option>
            <option value="ap-northeast-1">亞太 (東京)</option>
            <option value="eu-west-2">歐洲 (倫敦)</option>
          </select>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={(event) => {
              console.log(txtAccessKeyID, txtSecretAccessKey, selectRegionID);
            }}
          >
            确定
          </button>
        </div>
        <hr />
      </form>
    </Fragment>
  );
};
export default AwsForm;
