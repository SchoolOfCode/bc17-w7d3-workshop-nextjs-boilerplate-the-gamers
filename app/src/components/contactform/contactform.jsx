import styles from './contactform.module.css'

export default function ContactForm() {
    return (
        <form>
            <fieldset className={`${styles.formFiedset} grid`}><legend>Personal Information: </legend>
                <label>Full Name: <input /></label>
                <label>Postcode: <input /></label>
                <label>Street Address: <input /></label>
                <label>City: <input /></label>
            </fieldset>
            <fieldset className={`${styles.formFiedset} grid`}><legend>Contact Information: </legend>
                <label>Phone Number: <input /></label>
                <label>Email Address: <input /></label>
            </fieldset>
            <button>Request Design Consultation</button>
        </form >
    );
}