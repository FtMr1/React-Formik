import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz..")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen positif yaş giriniz")
    .integer("lütfen yaşınızı tam sayı olarak giriniz")
    .required("yaş girmek zorunludur."),
  password: yup
    .string("")
    .min(5, "minumum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az bir büyük harf bir küçük harf ve bir sayı giriniz",
    }).required('Şifre girmek zorunludur'),
    confirmPassword:yup.string().oneOf([yup.ref('password')], 'şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur')
});

export const advancedSchemas = yup.object().shape({
  username: yup
    .string()
    .min(3 , 'Kullanıcı adınız  3 karakterden az olamaz')
    .required("Ad girmek zorunludur."),
    unıversty: yup
    .string()
    .oneOf(["bogazici " , "itü " , "ödtü" , "ktü"], "lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz."),
    isAccepted: yup
    .boolean().oneOf([true ], "Kullanım koşullarını kabul ediniz")
    
});