import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import css from "./Contact.module.css";
import PropTypes from 'prop-types';

const Contact = ({ data }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(data.id));
    return (
        <>
            <div className={css.contactContent}>
                <div className={css.contactText}>
                    <span className={css.contactSvg}>
                        <IoPerson style={{color:"#000000",}}/>
                    </span>
                    <span className={css.contactData}>{data.name}</span>
                </div>
                <div className={css.contactText}>
                    <span className={css.contactSvg}>
                        <IoCall style={{color:"#000000",}}/>
                    </span>
                    <span className={css.contactData}>{data.number}</span>
                </div>
            </div>
            <button className={css.contactDelete} onClick={handleDelete}>Delete</button>
        </>
    )
}
Contact.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired
};

export default Contact;
