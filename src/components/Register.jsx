import React, { useState } from 'react'
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                const userRef = doc(db, "Users", user.uid);
                await setDoc(userRef, {
                    fname: fname,
                    lname: lname,
                    email: email,
                });
            }
            toast.success("Registered successfully", { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
        } catch (error) {
            console.log(error.message);
            console.log("hello");
            toast.error(error.message, { position: "top-right" });

        }
    }

    return (
        <form onSubmit={handleRegister}>
            <h3>Sign Up</h3>
            <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="">
                <button type="submit">Register</button>
            </div>
        </form>
    )
}
