//CHECK FORM VALIDATOR
const form = document.getElementById('form'); // Corrected form ID
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const company = document.getElementById('company');
const city = document.getElementById('city'); // 
const address = document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const tableItem = element.parentElement;
    const errorDisplay = tableItem.querySelector('.message');
    errorDisplay.innerText = message;
    tableItem.classList.add('error');
    tableItem.classList.remove('success');
};

const setSuccess = (element) => {
    const tableItem  = element.parentElement;
    const errorDisplay = tableItem.querySelector('.message');
    errorDisplay.innerText = '';
    tableItem.classList.add('success');
    tableItem.classList.remove('error');
};

const isValidTel = (tel) => {
    const re = /^\d{10}$/; //biểu thức chính quy kiểm tra tính hợp lệ của SĐT
    return re.test(tel);
};

const isValidEmail = (email) => {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/; //biểu thức chính quy kiểm tra tính hợp lệ của email
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value;
    const companyValue = company.value.trim();
    
    if (firstnameValue === '') {
        setError(firstname, 'Firstname is required');
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === '') {
        setError(lastname, 'Lastname is required');
    } else {
        setSuccess(lastname);
    }

    if (addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    if (cityValue === '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }
    console.log(city)
    if (telValue === '') {
        setError(tel, 'Phone number is required');
    } else if (!isValidTel(telValue)) {
        setError(tel, 'Invalid phone number');
    } else {
        setSuccess(tel);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Invalid email address');
    } else {
        setSuccess(email);
    }


    if (firstnameValue && lastnameValue && telValue && emailValue && cityValue && addressValue){
        console.log(firstnameValue)
        let customer = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : [];
        customer.push({
            firstname: firstnameValue,
            lastname: lastnameValue,
            tel: telValue,
            email: emailValue,
            city:cityValue,
            company:companyValue,
            address: addressValue,
        });
        localStorage.setItem('customer', JSON.stringify(customer));
            renderListCustomer();
    }};


//LOCAL STORAGE (LEARN)
function renderListCustomer()
{
    let customer = localStorage.getItem('customer')  ? JSON.parse(localStorage.getItem('customer')) : [];
    
    console.log(customer.length)
    if (customer.length === 0){
        document.getElementById('list-customer').style.display ='none';
        return false;
    } 
    document.getElementById('list-customer').style.display ='none';
    let tableContent =`<tr>
        <td>#</td>
        <td>First name</td>
        <td>Last name</td>
        <td>Phone number</td>
        <td>Email address</td>
        <td>Company name</td>
        <td>City</td>
        <td>Street address</td></tr> `;

    customer.forEach((customer,index)=>{
        index++;
        tableContent +=`
        <tr>
            <td>${index}</td>
            <td>${customer.firstname}</td>
            <td>${customer.lastname}</td>
            <td>${customer.tel}</td>
            <td>${customer.email}</td>
            <td>${customer.city}</td>
            <td>${customer.company}</td>
            <td>${customer.address}</td>
        </tr> `;
    })
    
    document.getElementById('grid-customer').innerHTML = tableContent
}
document.addEventListener('DOMContentLoaded', renderListCustomer);


//HIỂN THỊ ND KHI CLICK RADIO BUTTON
document.addEventListener("DOMContentLoaded", function() {
    const paymentRadios = document.getElementsByName('payment');

    function showContent() {
        paymentRadios.forEach(radio => {
            const content = document.getElementById(radio.id + 'Content');
            if (radio.checked) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', showContent);
    });

    // Hiển thị nội dung của radio button được chọn khi tải trang
    showContent();
});

//APPLY COUPON CODE
