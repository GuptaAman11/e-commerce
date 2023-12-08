 

export function useRegister() {
    
    const register = async(signupFormData) => {
        try {
            const response = await fetch(
              "http://localhost:8000/api/v1/users/register",
              {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  // email, name, password ,typeOfUser , phoneNumber , address
                  email: signupFormData.email,
                  name: signupFormData.fullname,
                  password: signupFormData.password,
                  address: signupFormData.address,
                  phoneNumber: signupFormData.phoneNumber,
                  typeOfUser: signupFormData.typeOfUser,
                }),
              }
            );
            const responseData = await response.json();
            if (response.ok) {
              console.log(responseData);
            }
          } catch (error) {
            console.log(error);
          }
    }

    return {register}
    
    
  };







  export function useLogin() {

    const userLogin = async (loginDetails) => {
        try {
          const response = await fetch("http://localhost:8000/api/v1/users/login", {
            headers: {
              "Content-Type": "application/JSON",
            },
            method: "POST",
            body: JSON.stringify({
              email: loginDetails.email,
              password: loginDetails.password,
            }),
          });
          const responseData = await response.json();
          if (response.ok) {
            console.log(responseData);
          }
          localStorage.setItem('token', responseData.token);
    
        } catch (error) {
            console.log(error)
        }
      };

      return {userLogin}
  }

