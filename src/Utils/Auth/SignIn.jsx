const handleSignIn = async (values) => {
    if (values) {
        localStorage.setItem('Auth', true); /* replace with your own authentication protocol */
        window.location.replace('/dashboard/home');
    }
}

export default handleSignIn;
