import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "./firebase";


 const login = async (email: string, password: string) => {
    const auth = getAuth(app);
    const response = await signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            const user: any = userCredential.user;
            localStorage.setItem("User", user);
            const dbRef = ref(getDatabase());
            await get(child(dbRef, `users/${user.uid}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        localStorage.setItem("Name", snapshot.val().username)
                    } else {
                        console.log("No data available");
                        alert("No data available")
                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
            return true;
        })
        .catch((error) => {
            alert(error.message);
        });
        return response
};

export default login