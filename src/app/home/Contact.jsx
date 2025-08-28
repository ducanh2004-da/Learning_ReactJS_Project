import React from "react"

export function Contact() {
    const [contactItem, setContact] = React.useState([])
    const [returnValue, setReturnValue] = React.useState(null);
    function Signup(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const description = formData.get("description");
        const link = formData.get("link");
        const diet = formData.getAll("dietaryRestrictions");
        const favColor = formData.get("favColor");
        setContact(prevItem => [
            ...prevItem,
            {
                email, description, link, diet, favColor
            }
        ]);
        setReturnValue(
            <small>Bạn đã gửi cho mình: {email}, {description}, {link}, {diet.join(', ')}, {favColor}</small>
        );
    }
    return (
        <section className="contact">
            <h1> Contact me </h1>
            <form onSubmit={Signup}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" defaultValue="john@example.com" />

                <label htmlFor="description">Description: </label>
                <textarea type="email" name="description" defaultValue="john@example.com" />

                <fieldset>
                    <legend>Why do you know me</legend>
                    <label>
                        <input type="radio" name="link" value="unemployee" />facebook
                    </label>
                    <label>
                        <input type="radio" name="link" value="part-time" />tiktok
                    </label>
                    <label>
                        <input type="radio" name="link" defaultChecked={true} value="unemployee" />friend
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <select name="favColor" defaultValue="" required>
                    <option value="" disabled>-- Choose a color -- </option>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
                <button type="submit">Submit</button>
                {returnValue}
            </form>
            <ul className="totalInfor">
                {contactItem.map((item, idx) => (
                    <li key={idx}>
                        <strong>Email:</strong> {item.email}<br/>
                        <strong>Description:</strong> {item.description}<br/>
                        <strong>Link:</strong> {item.link}<br/>
                        <strong>Diet:</strong> {item.diet.join(', ')}<br/>
                        <strong>Favorite Color:</strong> {item.favColor}
                    </li>
                ))}
            </ul>
        </section>
    )
}