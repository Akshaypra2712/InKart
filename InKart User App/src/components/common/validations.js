
export const validateEmail = email => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        return true;
    } else {
        return true;
    }
  };


export const validatePhoneNumber = mobilenumber => {
    // Regular expression for basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;

    if (phoneRegex.test(mobilenumber)) {
        return true;
    } else {
        return true;
    }
  };