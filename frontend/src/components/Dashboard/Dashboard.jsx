import { PageProvider } from "../../context/PageContext"
import ContactsPage from "../ContactsPage/ContactsPage"
import Navbar from "../Navbar/Navbar"

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <PageProvider>
                <ContactsPage />
            </PageProvider>
        </>
    )
}
export default Dashboard
