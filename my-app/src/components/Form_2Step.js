import React from 'react';


const Form2Step = ({setCurrentStep}) => {
    return (
        <>
            <div className="warning"><span>Ważne!</span>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
            </div>
            <div className="secondStep">
                <div className="container">
                    <h3>Krok 2/4</h3>
                    <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                    <form>
                        <label htmlFor="numOfBags">Liczba 60l worków:</label>
                        <select id="numOfBags" name="numOfBags" form="numOfBags">
                            <option disabled selected value> — wybierz — </option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                        </select>

                        <button className="form_button" onClick={() => setCurrentStep(3)}>Dalej</button>
                        <button  className="form_button back" onClick={() => setCurrentStep(1)}>Wstecz</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form2Step;