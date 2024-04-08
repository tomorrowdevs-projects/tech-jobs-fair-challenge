import { useState } from "react"
import "./ContactsModal.css" // Import the CSS file containing styles

const EditCard = (props) => {
    const { role, setRole, setEditMode } = props
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [photoUrl, setPhotoUrl] = useState(
        "https://thispersondoesnotexist.com/"
    )

    const handleSave = () => {
        setEditMode(false)
    }
    const handlePhotoChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setPhotoUrl(reader.result)
        }
        reader.readAsDataURL(file)
    }
    return (
        <div className="card-edit-form">
            <div className="photo-input">
                <img className="card-edit-avatar" src={photoUrl} alt="avatar" />
                <label htmlFor="photo-upload">
                    <span>Change Photo</span>
                    <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </label>
            </div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    )
}
export default EditCard
