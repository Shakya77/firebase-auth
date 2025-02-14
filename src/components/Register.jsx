export default function Register() {
    return (
        <form>
            <h3>Sign Up</h3>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            
        </form>
    )
}
