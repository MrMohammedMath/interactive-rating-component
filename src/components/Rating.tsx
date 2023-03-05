import React from "react";
export default function Rating() {
    // const [rating, setRating] = React.useState<undefined | number>(undefined);

    const [data, setData] = React.useState<{ rating: number, isSubmited: boolean }>({ rating: -1, isSubmited: false });
    // TODO: print current rating value

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setData(prevData => {
            return {
                ...prevData,
                rating: (event.target.value as unknown) as number
            }
        });
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setData(prevData => {
            return {
                ...prevData,
                isSubmited: true
            }
        });

    }

    return (
        <div className="rating">
            <form className={`form${data.isSubmited? '--hidden':''}`}>

                <div className="form__icon">
                    <img src="./images/icon-star.svg" alt="star icon 1" />
                </div>

                <h1 className="form__title">How did we do?</h1>

                <p className="form__paragraph">Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>

                <div className="form__rating">
                    {[1, 2, 3, 4, 5].map((v) => {
                        return (
                            <div key={v}>
                                <input
                                    type="radio"
                                    name="rating"
                                    id={`star${v}`}
                                    value={v}
                                    onChange={handleChange}
                                    className="form__rating__radio" />
                                <label
                                    htmlFor={`star${v}`}
                                    className={`form__rating__star-number ${data.rating == v && 'form__rating__star-number--selected'}`}>
                                    {v}
                                </label>
                            </div>
                        );
                    })}
                </div>

                <button className="form__submit" onClick={handleSubmit}>Submit</button>
            </form>

            <div className={`thanks${!data.isSubmited? '--hidden':''}`}>
                <img src="./images/illustration-thank-you.svg" alt="thanks image" className="thanks__img" />
                <h2 className="thanks__result">You selected {data.rating} out of 5</h2>
                <h1 className="thanks__title">Thank you!</h1>
                <p className="thanks__paragraph">
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}