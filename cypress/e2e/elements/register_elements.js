class RegisterElements{

inputFirstName = () => { return '[@placehoder="First Name"]'}
inputLastName = () => { return '[@placehoder="Last Name"]'}
inputAdress = () => { return '//*[@id="basicBootstrapForm"]/div[2]/div/textarea'}
inputAdressEmail = () => { return '#eid'}
inputPhone = () => { return '//*[@id="basicBootstrapForm"]/div[4]/div/input'}
selectFile = () => { return '#imagesrc'}
checkRadio = () => { return '[@type="radio"]'}
checkHobbie = () => { return '[@type="checkbox"]'}
inputLanguage = () => { return '#msdd'}
selectSkills = () => { return '#Skills'}
seelctCountry = () => { return '//*[@id="basicBootstrapForm"]/div[10]/div/span/span[1]/span'}
selectDay = () => { return '#daybox'}
selectMonth = () => { return '[@placeholder="Month"]'}
selectYear = () => { return '#yearbox'}
inputPass = () => { return '#firstpassword'}
inputConfirmPass = () => { return '#secondpassword'}
submitRegister = () => { return '#submitbtn'}



}export default RegisterElements;