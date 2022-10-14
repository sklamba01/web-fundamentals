
class UserService {
    prepareUserRegisterAttributes() {
        let userAttributes = [];
        userAttributes.push({ label: "First Name", key: "firstName" });
        userAttributes.push({ label: "Last Number", key: "lastName" });
        userAttributes.push({ label: "Email", key: "email" });
        userAttributes.push({ label: "Mobile Number", key: "mob" });
        return userAttributes;
    }

    varifyUserFields = (user) => {
        if (
            !user.firstName ||
            !user.lastName ||
            !user.email ||
            !user.mob
        ) {
            return false;
        } else {
            return true;
        }
    }
}

export const userService = new UserService();