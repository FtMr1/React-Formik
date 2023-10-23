import React from "react";
import { Form, Formik } from "formik";
import Custominput from "./Custominput";
import { advancedSchemas } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", unıversty: "red", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchemas}
      >
        {({isSubmitting})=>(

        
        <Form>
          <Custominput
            label="Kullanıcı Adı "
            name="username"
            type="text"
            placeholder="kullanıcı adını giriniz"
          />
          <CustomSelect
            label="Okulunuz"
            name="unıversty"
            placeholder="Lütfen üniversitenizi seçinizs"
          >
            <option value="">Lütfen üniversitenizi seçiniz</option>
            <option value="bogazici">Boğaziçi üniversitesi</option>
            <option value="itü">İTÜ</option>
            <option value="ödtü">ÖDTÜ</option>
            <option value="ktü">KTÜ</option>
          </CustomSelect>
          <CustomCheckBox type="checkbox" name="isAccepted" />

          <button  disabled={isSubmitting} type="submit">
            Kaydet
          </button>
        </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
