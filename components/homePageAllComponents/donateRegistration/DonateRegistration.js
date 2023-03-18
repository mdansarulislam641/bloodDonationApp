
const DonateRegistration = () => {
    return (
        <section>
            <div className="container">
                {/* form  */}
                <div>
                    <form>
                        <input type="text"  placeholder="Your Name" />
                        <input type="text"  placeholder="Your Phone" />
                        <input type="text"  placeholder="Your Email" />
                        <select name="group" id="">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </form>
                </div>
                {/* details */}
                <div>

                </div>
            </div>
        </section>
    );
};

export default DonateRegistration;