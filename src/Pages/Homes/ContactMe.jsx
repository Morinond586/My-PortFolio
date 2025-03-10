
export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title"> Get In Touch</p>
        <h2>
          Contact Me
        </h2>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit.
        </p>
      </div>
      <form  className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Firs Name</span>
            <input type="text" className="contact--input text-md" name="first-name"
            id="first-name"
            required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" className="contact--input text-md" name="last-name"
            id="last-name"
            required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" className="contact--input text-md" name="email"
            id="email"
            required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone</span>
            <input type="number" className="contact--input text-md" name="phone-number"
            id="phone-number"
            required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a Topic</span>
             <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
             </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea type="text" className="contact--input text-md" name="message"
            id="message"
            rows="8"
            placeholder="type your message..."
            />
          </label>
          <label htmlFor="checkbox"
          className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox"/>
            <span className="text-sm">
             I accept the term
            </span>
          </label>
          <div>
          <button className="btns btn-primary contact--form--btn">Submit</button>
          </div>
      </form>
    </section>
  )
}  