import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

const signup = async(email: string, password: string, name:string):Promise<any> => {
    const auth = getAuth(app);
    const db = getDatabase();
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         const user: any = userCredential.user;
    //         localStorage.setItem("User", user);
    //     })
    //     .catch((error) => {
    //         const errorMessage = error.message;
    //         alert(errorMessage);
    //     });
    const response:boolean = await createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const response2 = signInWithEmailAndPassword(auth, email, password)
                .then(async(userCredential) => {
                    const user: any = userCredential.user;
                    localStorage.setItem("User", user);
                    localStorage.setItem("Name", name);

                    await set(ref(db, "users/" + result.user.uid), {
                        username: name,
                        email: email,
                        id: result.user.uid
                    });
                    return true
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                    return false
                });
                return response2
        })
        .catch(function (error) {
            console.log(error);
            alert(error.message);
            return false
        });
        return response
};

export default signup;
